"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./admin.module.css";

export default function AdminPage() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("rfqs"); // rfqs | consultations | newsletters | posts
  
  // Data Lists
  const [rfqs, setRfqs] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [posts, setPosts] = useState([]);
  const [trainingApps, setTrainingApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  // Clear selected checkboxes when tab changes
  useEffect(() => {
    setSelectedIds([]);
  }, [activeTab]);

  // Editor states
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null); // null means creating new
  const [editorData, setEditorData] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    category: "Cloud",
    author: "Admin",
    readTime: "5 min read"
  });

  // Retrieve token on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedToken = localStorage.getItem("admin_token");
      if (savedToken) {
        setToken(savedToken);
      }
    }
  }, []);

  const handleLogout = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_token");
    }
    setToken(null);
    setRfqs([]);
    setConsultations([]);
    setNewsletters([]);
    setPosts([]);
    setTrainingApps([]);
    setIsEditingPost(false);
  }, []);

  // Fetch data from backend
  const fetchData = useCallback(async (tabName, jwtToken) => {
    const currentToken = jwtToken || token;
    if (!currentToken) return;

    setLoading(true);
    setError("");
    try {
      const endpoint = tabName || activeTab;
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
      const urlPath = endpoint === "posts" ? `${API_BASE}/api/posts` : `${API_BASE}/api/admin/${endpoint}`;
      
      const response = await fetch(urlPath, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          handleLogout();
          setError("Session expired. Please log in again.");
          return;
        }
        const contentType = response.headers.get("content-type");
        let errData = {};
        if (contentType && contentType.includes("application/json")) {
          errData = await response.json().catch(() => ({}));
        }
        setError(errData.message || `Server returned error (${response.status})`);
        return;
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        setError(`Server returned non-JSON response (${response.status})`);
        return;
      }

      const result = await response.json();
      if (endpoint === "rfqs") setRfqs(result.data || []);
      else if (endpoint === "consultations") setConsultations(result.data || []);
      else if (endpoint === "newsletters") setNewsletters(result.data || []);
      else if (endpoint === "posts") setPosts(result.data || []);
      else if (endpoint === "training-applications") setTrainingApps(result.data || []);
    } catch (err) {
      console.error("fetchData error:", err);
      setError(`Connection error: ${err.message || "Failed to connect to backend server."}`);
    } finally {
      setLoading(false);
    }
  }, [token, activeTab, handleLogout]);

  // Fetch when active tab or token changes
  useEffect(() => {
    if (token && !isEditingPost) {
      fetchData(activeTab, token);
    }
  }, [activeTab, token, fetchData, isEditingPost]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
      const response = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const contentType = response.headers.get("content-type");
      let data = {};
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response received:", text);
        setError(`Server error (${response.status}): Make sure backend server is running on port 5050.`);
        return;
      }

      if (response.ok) {
        localStorage.setItem("admin_token", data.token);
        setToken(data.token);
        setUsername("");
        setPassword("");
        fetchData(activeTab, data.token);
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      setError(`Login connection error: ${err.message || "Connection to login server failed."}`);
    }
  };

  const updateStatus = async (id, newStatus, type) => {
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
      const response = await fetch(`${API_BASE}/api/admin/${type}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchData(activeTab);
      } else {
        alert("Failed to update status.");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating status.");
    }
  };

  // Single Item Delete Function
  const handleDeleteItem = async (id, endpointType) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
      const url = `${API_BASE}/api/admin/${endpointType}/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setSelectedIds(prev => prev.filter(item => item !== id));
        fetchData(activeTab);
      } else {
        const contentType = response.headers.get("content-type");
        let errMessage = `Server error (${response.status})`;
        if (contentType && contentType.includes("application/json")) {
          const errJson = await response.json();
          errMessage = errJson.message || errMessage;
        } else if (response.status === 401 || response.status === 403) {
          errMessage = "Session expired or unauthorized. Please re-login.";
          handleLogout();
        }
        alert(`Failed to delete record: ${errMessage}`);
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert(`Error deleting record: ${err.message || "Network error"}`);
    }
  };

  // Bulk Delete Function
  const handleBulkDelete = async (endpointType) => {
    if (selectedIds.length === 0) return;
    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} selected record(s)?`)) return;

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
      const url = `${API_BASE}/api/admin/${endpointType}/bulk-delete`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ids: selectedIds }),
      });

      if (response.ok) {
        setSelectedIds([]);
        fetchData(activeTab);
      } else {
        const contentType = response.headers.get("content-type");
        let errMessage = `Server error (${response.status})`;
        if (contentType && contentType.includes("application/json")) {
          const errJson = await response.json();
          errMessage = errJson.message || errMessage;
        } else if (response.status === 401 || response.status === 403) {
          errMessage = "Session expired or unauthorized. Please re-login.";
          handleLogout();
        }
        alert(`Failed to perform bulk delete: ${errMessage}`);
      }
    } catch (err) {
      console.error("Bulk delete error:", err);
      alert(`Error performing bulk delete: ${err.message || "Network error"}`);
    }
  };

  // Select All Handler
  const handleSelectAll = (dataList, isChecked) => {
    if (isChecked) {
      const allIds = dataList.map(item => item._id);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  // Individual Checkbox Handler
  const handleSelectRow = (id, isChecked) => {
    if (isChecked) {
      setSelectedIds(prev => [...prev, id]);
    } else {
      setSelectedIds(prev => prev.filter(itemId => itemId !== id));
    }
  };

  // Helper function to get active data list by tab
  const getCurrentTabList = () => {
    if (activeTab === "rfqs") return rfqs;
    if (activeTab === "consultations") return consultations;
    if (activeTab === "newsletters") return newsletters;
    if (activeTab === "training-applications") return trainingApps;
    return [];
  };

  // --- BLOG POST CRUD FUNCTIONS ---
  const handleOpenCreatePost = () => {
    setEditingPostId(null);
    setEditorData({
      title: "",
      slug: "",
      summary: "",
      content: "",
      category: "Cloud",
      author: "Admin",
      readTime: "5 min read"
    });
    setIsEditingPost(true);
  };

  const handleOpenEditPost = (post) => {
    setEditingPostId(post._id);
    setEditorData({
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      content: post.content,
      category: post.category,
      author: post.author,
      readTime: post.readTime
    });
    setIsEditingPost(true);
  };

  const handleSavePost = async (e) => {
    e.preventDefault();
    setError("");

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';
    const method = editingPostId ? "PUT" : "POST";
    const url = editingPostId 
      ? `${API_BASE}/api/admin/posts/${editingPostId}`
      : `${API_BASE}/api/admin/posts`;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editorData),
      });

      const result = await response.json();
      if (response.ok) {
        setIsEditingPost(false);
        fetchData("posts");
      } else {
        setError(result.message || "Failed to save blog post.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to backend server.");
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
      const response = await fetch(`${API_BASE}/api/admin/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchData("posts");
      } else {
        alert("Failed to delete post.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting post.");
    }
  };

  const handleEditorChange = (e) => {
    const { name, value } = e.target;
    setEditorData(prev => {
      const updated = { ...prev, [name]: value };
      // Auto-generate slug from title if creating a new post
      if (name === "title" && !editingPostId) {
        updated.slug = value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }
      return updated;
    });
  };

  // Status Class Mapper
  const getStatusClass = (status) => {
    if (status === "Resolved") return styles.statusResolved;
    if (status === "Contacted") return styles.statusContacted;
    return styles.statusPending;
  };

  // --- RENDER LOGIN IF NOT AUTHENTICATED ---
  if (!token) {
    return (
      <div className={styles.adminPage}>
        <div className={styles.loginContainer}>
          <h2 className={styles.loginTitle}>Admin Portal</h2>
          {error && <div className={styles.errorText}>{error}</div>}
          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                className={styles.inputField}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.loginBtn}>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER DASHBOARD IF LOGGED IN ---
  return (
    <div className={styles.adminPage}>
      <div className={styles.dashboardContainer}>
        
        {/* Header */}
        <header className={styles.dashboardHeader}>
          <h1 className={styles.dashboardTitle}>TwinsCloud Lead Center</h1>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </header>

        {/* Tab Buttons */}
        <div className={styles.tabs}>
          <button
            onClick={() => { setActiveTab("rfqs"); setIsEditingPost(false); }}
            className={`${styles.tabBtn} ${activeTab === "rfqs" ? styles.tabBtnActive : ""}`}
          >
            RFQ Submissions ({rfqs.length})
          </button>
          <button
            onClick={() => { setActiveTab("consultations"); setIsEditingPost(false); }}
            className={`${styles.tabBtn} ${activeTab === "consultations" ? styles.tabBtnActive : ""}`}
          >
            Booked Consultations ({consultations.length})
          </button>
          <button
            onClick={() => { setActiveTab("newsletters"); setIsEditingPost(false); }}
            className={`${styles.tabBtn} ${activeTab === "newsletters" ? styles.tabBtnActive : ""}`}
          >
            Newsletter Subscribers ({newsletters.length})
          </button>
          <button
            onClick={() => { setActiveTab("posts"); setIsEditingPost(false); }}
            className={`${styles.tabBtn} ${activeTab === "posts" ? styles.tabBtnActive : ""}`}
          >
            Manage Blog ({posts.length})
          </button>
          <button
            onClick={() => { setActiveTab("training-applications"); setIsEditingPost(false); }}
            className={`${styles.tabBtn} ${activeTab === "training-applications" ? styles.tabBtnActive : ""}`}
          >
            Training Applications ({trainingApps.length})
          </button>
        </div>

        {error && <div className={styles.errorText}>{error}</div>}
        {loading && <p>Loading data...</p>}

        {/* Blog Post Editor View */}
        {isEditingPost && (
          <div className={styles.editorForm}>
            <h3 className={styles.sectionTitle}>
              {editingPostId ? "Edit Technical Post" : "Publish New Technical Post"}
            </h3>
            <form onSubmit={handleSavePost}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    className={styles.inputField}
                    placeholder="Enter article title"
                    value={editorData.title}
                    onChange={handleEditorChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Slug URL (auto-generated)</label>
                  <input
                    type="text"
                    name="slug"
                    className={styles.inputField}
                    placeholder="example-slug-url"
                    value={editorData.slug}
                    onChange={handleEditorChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Category</label>
                  <select
                    name="category"
                    className={styles.inputField}
                    value={editorData.category}
                    onChange={handleEditorChange}
                  >
                    <option value="Cloud">Cloud</option>
                    <option value="MERN Stack">MERN Stack</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Security">Security</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    className={styles.inputField}
                    value={editorData.author}
                    onChange={handleEditorChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Estimated Read Time</label>
                <input
                  type="text"
                  name="readTime"
                  className={styles.inputField}
                  placeholder="e.g. 5 min read"
                  value={editorData.readTime}
                  onChange={handleEditorChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Summary / Excerpt</label>
                <textarea
                  name="summary"
                  rows={2}
                  className={styles.textareaField}
                  placeholder="Provide a short excerpt for the grid..."
                  value={editorData.summary}
                  onChange={handleEditorChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Content HTML (Markdown formatting compatible)</label>
                <textarea
                  name="content"
                  rows={10}
                  className={styles.textareaField}
                  placeholder="Write post content using HTML (e.g. <p>, <h2>, <pre><code>)"
                  value={editorData.content}
                  onChange={handleEditorChange}
                  required
                />
              </div>

              <div className={styles.btnGroup}>
                <button type="submit" className={styles.saveBtn}>
                  Save &amp; Publish
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingPost(false)}
                  className={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Data Tables display */}
        {!loading && !isEditingPost && (
          <div className={styles.tableWrapper}>
            {/* Bulk Action Header Bar */}
            {activeTab !== "posts" && getCurrentTabList().length > 0 && (
              <div className={styles.bulkActionBar}>
                <div className={styles.bulkInfo}>
                  <span>Selected: {selectedIds.length} of {getCurrentTabList().length}</span>
                </div>
                {selectedIds.length > 0 && (
                  <button
                    onClick={() => handleBulkDelete(activeTab)}
                    className={styles.bulkDeleteBtn}
                  >
                    🗑️ Delete Selected ({selectedIds.length})
                  </button>
                )}
              </div>
            )}

            {activeTab === "rfqs" && (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ width: "40px" }}>
                      <input
                        type="checkbox"
                        className={styles.checkboxInput}
                        checked={rfqs.length > 0 && selectedIds.length === rfqs.length}
                        onChange={(e) => handleSelectAll(rfqs, e.target.checked)}
                      />
                    </th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Project Details</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rfqs.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center", color: "#718096" }}>No RFQs found.</td>
                    </tr>
                  ) : (
                    rfqs.map((rfq) => (
                      <tr key={rfq._id}>
                        <td>
                          <input
                            type="checkbox"
                            className={styles.checkboxInput}
                            checked={selectedIds.includes(rfq._id)}
                            onChange={(e) => handleSelectRow(rfq._id, e.target.checked)}
                          />
                        </td>
                        <td>{new Date(rfq.createdAt).toLocaleDateString()}</td>
                        <td style={{ fontWeight: "700" }}>{rfq.name}</td>
                        <td><a href={`mailto:${rfq.email}`} style={{ color: "#0070f3" }}>{rfq.email}</a></td>
                        <td style={{ whiteSpace: "pre-wrap", maxWidth: "350px", fontSize: "14px" }}>{rfq.projectDescription}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${getStatusClass(rfq.status)}`}>
                            {rfq.status}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <select
                              value={rfq.status}
                              onChange={(e) => updateStatus(rfq._id, e.target.value, "rfqs")}
                              className={styles.selectStatus}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Resolved">Resolved</option>
                            </select>
                            <button
                              onClick={() => handleDeleteItem(rfq._id, "rfqs")}
                              className={styles.deleteIconBtn}
                              title="Delete RFQ"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "consultations" && (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ width: "40px" }}>
                      <input
                        type="checkbox"
                        className={styles.checkboxInput}
                        checked={consultations.length > 0 && selectedIds.length === consultations.length}
                        onChange={(e) => handleSelectAll(consultations, e.target.checked)}
                      />
                    </th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Preferred Appointment</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center", color: "#718096" }}>No consultations found.</td>
                    </tr>
                  ) : (
                    consultations.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <input
                            type="checkbox"
                            className={styles.checkboxInput}
                            checked={selectedIds.includes(item._id)}
                            onChange={(e) => handleSelectRow(item._id, e.target.checked)}
                          />
                        </td>
                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td style={{ fontWeight: "700" }}>{item.name}</td>
                        <td><a href={`mailto:${item.email}`} style={{ color: "#0070f3" }}>{item.email}</a></td>
                        <td>
                          <strong>Date:</strong> {item.preferredDate}<br/>
                          <strong>Time:</strong> {item.preferredTime}
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${getStatusClass(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <select
                              value={item.status}
                              onChange={(e) => updateStatus(item._id, e.target.value, "consultations")}
                              className={styles.selectStatus}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Resolved">Resolved</option>
                            </select>
                            <button
                              onClick={() => handleDeleteItem(item._id, "consultations")}
                              className={styles.deleteIconBtn}
                              title="Delete Consultation"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "newsletters" && (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ width: "40px" }}>
                      <input
                        type="checkbox"
                        className={styles.checkboxInput}
                        checked={newsletters.length > 0 && selectedIds.length === newsletters.length}
                        onChange={(e) => handleSelectAll(newsletters, e.target.checked)}
                      />
                    </th>
                    <th>Subscribed Date</th>
                    <th>Subscriber Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {newsletters.length === 0 ? (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center", color: "#718096" }}>No subscribers found.</td>
                    </tr>
                  ) : (
                    newsletters.map((sub) => (
                      <tr key={sub._id}>
                        <td>
                          <input
                            type="checkbox"
                            className={styles.checkboxInput}
                            checked={selectedIds.includes(sub._id)}
                            onChange={(e) => handleSelectRow(sub._id, e.target.checked)}
                          />
                        </td>
                        <td>{new Date(sub.subscribedAt).toLocaleString()}</td>
                        <td style={{ fontWeight: "600" }}>
                          <a href={`mailto:${sub.email}`} style={{ color: "#0070f3" }}>{sub.email}</a>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDeleteItem(sub._id, "newsletters")}
                            className={styles.deleteIconBtn}
                            title="Delete Subscriber"
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {activeTab === "posts" && (
              <div style={{ padding: "20px" }}>
                <button onClick={handleOpenCreatePost} className={styles.createBtn}>
                  + Write New Post
                </button>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Author</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.length === 0 ? (
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#718096", padding: "20px 0" }}>
                          No blog posts found in Database.
                        </td>
                      </tr>
                    ) : (
                      posts.map((post) => (
                        <tr key={post._id}>
                          <td style={{ fontWeight: "700" }}>{post.title}</td>
                          <td>
                            <span className={styles.badge} style={{ fontSize: "11px", padding: "4px 10px" }}>
                              {post.category}
                            </span>
                          </td>
                          <td>{post.author}</td>
                          <td>{post.date || new Date(post.createdAt).toLocaleDateString()}</td>
                          <td>
                            <button onClick={() => handleOpenEditPost(post)} className={styles.editBtn}>
                              Edit
                            </button>
                            <button onClick={() => handleDeletePost(post._id)} className={styles.deleteBtn}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "training-applications" && (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ width: "40px" }}>
                      <input
                        type="checkbox"
                        className={styles.checkboxInput}
                        checked={trainingApps.length > 0 && selectedIds.length === trainingApps.length}
                        onChange={(e) => handleSelectAll(trainingApps, e.target.checked)}
                      />
                    </th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Contact Info</th>
                    <th>Academic Details</th>
                    <th>Program &amp; Course</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingApps.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: "center", color: "#718096" }}>No training applications found.</td>
                    </tr>
                  ) : (
                    trainingApps.map((app) => (
                      <tr key={app._id}>
                        <td>
                          <input
                            type="checkbox"
                            className={styles.checkboxInput}
                            checked={selectedIds.includes(app._id)}
                            onChange={(e) => handleSelectRow(app._id, e.target.checked)}
                          />
                        </td>
                        <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                        <td style={{ fontWeight: "700" }}>{app.name}</td>
                        <td>
                          <strong>Email:</strong> <a href={`mailto:${app.email}`} style={{ color: "#0070f3" }}>{app.email}</a><br/>
                          <strong>Phone:</strong> {app.phone}
                        </td>
                        <td>
                          <strong>College:</strong> {app.college}<br/>
                          <strong>Branch:</strong> {app.branch}<br/>
                          <strong>Passing:</strong> {app.passingYear}
                        </td>
                        <td>
                          <strong>Type:</strong> {app.programType}<br/>
                          <strong>Course:</strong> {app.courseOfInterest}
                        </td>
                        <td>
                          <span className={`${styles.statusBadge} ${getStatusClass(app.status)}`}>
                            {app.status}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                            <select
                              value={app.status}
                              onChange={(e) => updateStatus(app._id, e.target.value, "training-applications")}
                              className={styles.selectStatus}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Resolved">Resolved</option>
                            </select>
                            <button
                              onClick={() => handleDeleteItem(app._id, "training-applications")}
                              className={styles.deleteIconBtn}
                              title="Delete Application"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
