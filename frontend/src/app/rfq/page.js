"use client";

import React, { useState } from 'react';

export default function RFQPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: ''
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const prefill = window.sessionStorage.getItem("rfq_prefill");
      if (prefill) {
        setFormData(prev => ({ ...prev, projectDescription: prefill }));
        window.sessionStorage.removeItem("rfq_prefill");
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDescription) {
      setStatus({ loading: false, success: '', error: 'All fields are required.' });
      return;
    }

    setStatus({ loading: true, success: '', error: '' });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/rfq`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: 'Thank you! Your RFQ has been submitted successfully.',
          error: ''
        });
        setFormData({ name: '', email: '', projectDescription: '' });
      } else {
        setStatus({
          loading: false,
          success: '',
          error: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: '',
        error: 'Failed to submit. Please ensure the backend server is running.'
      });
    }
  };

  return (
    <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
        Request <span style={{ color: '#f9841a' }}>a Quote</span> (RFQ)
      </h1>
      <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>
        Tell us about your project requirements, and we will get back to you with a detailed quote proposal.
      </p>

      {status.success && (
        <div style={{ padding: '15px', backgroundColor: '#e6f4ea', color: '#137333', borderRadius: '6px', marginBottom: '20px', fontWeight: '600' }}>
          {status.success}
        </div>
      )}

      {status.error && (
        <div style={{ padding: '15px', backgroundColor: '#fce8e6', color: '#c5221f', borderRadius: '6px', marginBottom: '20px', fontWeight: '600' }}>
          {status.error}
        </div>
      )}
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe" 
              required
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} 
            />
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com" 
              required
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} 
            />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Project Description</label>
          <textarea 
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={5} 
            placeholder="Describe what you want to build..." 
            required
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
          ></textarea>
        </div>
        <button 
          type="submit"
          disabled={status.loading}
          style={{ 
            backgroundColor: status.loading ? '#ccc' : '#f9841a', 
            color: '#fff', 
            border: 'none', 
            padding: '14px 28px', 
            borderRadius: '6px', 
            fontWeight: '600', 
            cursor: status.loading ? 'not-allowed' : 'pointer', 
            width: 'fit-content' 
          }}
        >
          {status.loading ? 'Submitting...' : 'Submit RFQ'}
        </button>
      </form>
    </div>
  );
}
