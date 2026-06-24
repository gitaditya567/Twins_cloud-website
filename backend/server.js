const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ override: true });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'TwinsCloud MERN Backend is running successfully.' });
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/twinscloud';
console.log('Server is connecting to MONGO_URI:', MONGO_URI);
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    if (typeof seedBlogPosts === 'function') {
      seedBlogPosts();
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));

// RFQ Mongoose Schema and Model
const rfqSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projectDescription: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Contacted, Resolved
  createdAt: { type: Date, default: Date.now }
});
const Rfq = mongoose.model('Rfq', rfqSchema);

// Consultation Mongoose Schema and Model
const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Contacted, Resolved
  createdAt: { type: Date, default: Date.now }
});
const Consultation = mongoose.model('Consultation', consultationSchema);

// Newsletter Mongoose Schema and Model
const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// Blog Post Mongoose Schema and Model
const blogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  readTime: { type: String, required: true },
  date: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Training Application Mongoose Schema and Model
const trainingApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  branch: { type: String, required: true },
  passingYear: { type: String, required: true },
  programType: { type: String, required: true },
  courseOfInterest: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Contacted, Resolved
  createdAt: { type: Date, default: Date.now }
});
const TrainingApplication = mongoose.model('TrainingApplication', trainingApplicationSchema);

const defaultPosts = [
  {
    slug: "aws-cost-optimization-startups",
    title: "AWS Cost Optimization: Best Practices for Startups",
    summary: "Discover how to right-size EC2 instances, leverage spot policies, and utilize S3 Intelligent-Tiering to slash monthly AWS billing by up to 40%.",
    category: "Cloud",
    date: "June 24, 2026",
    author: "Prince Kumar",
    readTime: "5 min read",
    content: `<p>Cloud infrastructure is essential for modern applications, but cost efficiency remains a common hurdle. Startups often deploy oversized compute servers, leading to substantial wasted expenses. At TwinsCloud, we help organizations streamline their resource utilization to ensure high availability at minimum expense.</p>
<h2>1. Right-Sizing Compute Instances</h2>
<p>Analyze your active workloads over a 14-day window. If average CPU utilization is below 15%, you are running oversized instances. Transitioning from standard <code>t3.large</code> instances to <code>t3.medium</code> or modern <code>t4g.medium</code> (powered by AWS Graviton ARM processors) can immediately reduce server compute costs by over 30%.</p>
<pre><code># Example command to check EC2 instance metrics via AWS CLI
aws cloudwatch get-metric-statistics \\
  --namespace AWS/EC2 \\
  --metric-name CPUUtilization \\
  --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \\
  --statistics Average \\
  --start-time 2026-06-10T00:00:00Z \\
  --end-time 2026-06-24T00:00:00Z \\
  --period 3600
</code></pre>
<h2>2. Leveraging Spot & Savings Plans</h2>
<p>For stateless microservices or background queues, always prefer Spot Instances. Spot instances allow you to bid on spare EC2 capacity with discounts up to 90% off on-demand rates. For baseline workloads, commit to an AWS Compute Savings Plan for 1 or 3 years to receive discounts up to 72%.</p>
<h2>3. Intelligent Data Storage Tiering</h2>
<p>Move logs and older assets from standard Amazon S3 storage buckets to S3 Intelligent-Tiering. This automatically shifts your files to cheaper archives (like Glacier Instant Retrieval) when they are not accessed for 30 consecutive days, keeping access latency immediate while decreasing storage bills.</p>`
  },
  {
    slug: "why-mern-stack-apps-in-2026",
    title: "Why We Build Dynamic MERN Stack Apps in 2026",
    summary: "An in-depth look at how MongoDB, Express, React, and Node.js combined with modern serverless execution provide the ultimate development velocity.",
    category: "MERN Stack",
    date: "June 18, 2026",
    author: "Ansh Singh",
    readTime: "6 min read",
    content: `<p>The MERN Stack (MongoDB, Express, React, Node.js) remains the gold standard for full-stack engineering in 2026. The unified language barrier—using JavaScript and TypeScript from frontend components to database handlers—maximizes engineering velocity and simplifies team orchestration.</p>
<h2>1. JSON-to-JSON Pipeline Harmony</h2>
<p>Legacy software architectures suffer from database schema translations (mapping SQL records to backend logic to JSON payloads). MERN stack uses JSON documents in MongoDB, processes them natively in Express/Node.js, and serves them directly to React pages. This eliminates object-relational mapping (ORM) friction.</p>
<pre><code>// Native Node.js mongoose schema declaration
const rfqSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projectDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
</code></pre>
<h2>2. Sub-Second API Responses with Node.js</h2>
<p>Node.js uses an asynchronous, event-driven, non-blocking I/O loop. For database-intensive web applications (like booking, CRM, or SaaS tools), Node.js can handle thousands of concurrent queries without spawning separate threads, resulting in blazing-fast response cycles.</p>
<h2>3. React Hydration & Server Components</h2>
<p>In modern web stacks, React is deployed using hybrid frameworks like Next.js. Combining static server rendering (SSR) for blogs/pages and dynamic client-side hydration for forms provides the best of both worlds: robust SEO indexing and instant user interface responsiveness.</p>`
  },
  {
    slug: "devops-dockerizing-nodejs-ecs",
    title: "DevOps Pipelines: Dockerizing Node.js on AWS ECS",
    summary: "Learn how to build lightweight Docker containers, establish secure container registers, and orchestrate auto-scaling on Amazon ECS Fargate.",
    category: "DevOps",
    date: "June 12, 2026",
    author: "Akash Deep",
    readTime: "7 min read",
    content: `<p>Containerization ensures that your web application runs identically across local development setups and public cloud servers. Below is the exact checklist TwinsCloud engineers follow to dockerize and deploy high-performance Node.js REST APIs.</p>
<h2>1. Designing a Lightweight Multi-Stage Dockerfile</h2>
<p>Avoid copying dev-dependencies or node modules directly into production builds. By using a multi-stage Docker build, you compile and test inside a heavy base environment, but produce a production image containing only compiled code and production modules.</p>
<pre><code># Multi-stage Dockerfile example
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app ./
EXPOSE 5000
CMD ["node", "server.js"]
</code></pre>
<h2>2. Orchestrating with Amazon ECS Fargate</h2>
<p>AWS ECS Fargate allows you to run containers in serverless mode—meaning you do not have to manage underlying EC2 hardware. Fargate automatically scales CPU and memory resources up or down based on inbound network traffic indicators.</p>
<h2>3. Automated CI/CD Workflows</h2>
<p>Establish a Git trigger using GitHub Actions. Upon a merge to <code>main</code>, the pipeline builds the docker container, pushes it to Amazon ECR (Elastic Container Registry), and updates the ECS Task Definition to trigger a zero-downtime rolling deployment.</p>`
  },
  {
    slug: "defending-nodejs-api-ddos",
    title: "Defending Node.js API Endpoints Against DDoS",
    summary: "Protect your MERN stack backend from malicious floods using Express rate limiters, security headers, and AWS CloudFront Web Application Firewall.",
    category: "Security",
    date: "June 05, 2026",
    author: "Prem Kumar",
    readTime: "4 min read",
    content: `<p>API endpoints, especially public endpoints like RFQ forms or subscription APIs, are vulnerable to botnets attempting denial-of-service (DDoS) floods. Securing your backend requires a defense-in-depth model combining network layers and software limiters.</p>
<h2>1. Express Rate Limiting</h2>
<p>Never leave your public routes unprotected. Use the <code>express-rate-limit</code> middleware in Node.js to cap the number of requests a single IP address can make within a specified timeframe (e.g., maximum 10 requests per minute on contact routes).</p>
<pre><code>// Implementing rate limiter middleware in Express
const rateLimit = require('express-rate-limit');
const rfqLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { message: 'Too many requests. Please try again later.' }
});
app.use('/api/rfq', rfqLimiter);
</code></pre>
<h2>2. Injecting Secure Response Headers</h2>
<p>Helmet middleware helps secure headers, disabling X-Powered-By and configures CSP.</p>
<h2>3. AWS CloudFront WAF Integration</h2>
<p>Deploy cloud applications secure against SQL-injection or Cross-Site Scripting (XSS) attacks.</p>`
  }
];

const seedBlogPosts = async () => {
  try {
    const count = await BlogPost.countDocuments();
    if (count === 0) {
      await BlogPost.insertMany(defaultPosts);
      console.log('Seeded default blog posts successfully');
    }
  } catch (err) {
    console.error('Error seeding blog posts:', err);
  }
};

// Nodemailer SMTP Transporter Setup
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// RFQ Submission Route
app.post('/api/rfq', async (req, res) => {
  const { name, email, projectDescription } = req.body;

  if (!name || !email || !projectDescription) {
    return res.status(400).json({ message: 'All fields (name, email, projectDescription) are required.' });
  }

  try {
    // 1. Save to MongoDB
    const rfq = new Rfq({ name, email, projectDescription });
    await rfq.save();
    console.log('RFQ saved to database:', rfq);

    // 2. Prepare email body
    const emailTo = process.env.EMAIL_TO || 'Support@twinscloud.com';
    const mailOptions = {
      from: process.env.SMTP_FROM || `"TwinsCloud RFQ" <${process.env.SMTP_USER || 'no-reply@twinscloud.com'}>`,
      to: emailTo,
      subject: `New RFQ Submission from ${name}`,
      text: `You have received a new RFQ submission:\n\nName: ${name}\nEmail: ${email}\nProject Description:\n${projectDescription}\n\nSubmitted at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #f9841a; border-bottom: 2px solid #f9841a; padding-bottom: 10px; margin-top: 0;">New RFQ Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Project Description:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap; border-left: 4px solid #f9841a; line-height: 1.6; color: #333;">
            ${projectDescription.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
            Submitted via TwinsCloud Website on ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    // 3. Send email if SMTP credentials are set
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log(`RFQ email notification sent successfully to ${emailTo}`);
    } else {
      console.warn('SMTP credentials are not configured in backend/.env. RFQ saved to DB, but email notification skipped.');
    }

    return res.status(201).json({
      success: true,
      message: 'RFQ submitted successfully!',
      data: rfq
    });

  } catch (error) {
    console.error('Error handling RFQ submission:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Consultation Submission Route
app.post('/api/consultation', async (req, res) => {
  const { name, email, preferredDate, preferredTime } = req.body;

  if (!name || !email || !preferredDate || !preferredTime) {
    return res.status(400).json({ message: 'All fields (name, email, preferredDate, preferredTime) are required.' });
  }

  try {
    // 1. Save to MongoDB
    const consultation = new Consultation({ name, email, preferredDate, preferredTime });
    await consultation.save();
    console.log('Consultation saved to database:', consultation);

    // 2. Prepare email body
    const emailTo = process.env.EMAIL_TO || 'Support@twinscloud.com';
    const mailOptions = {
      from: process.env.SMTP_FROM || `"TwinsCloud Consultation" <${process.env.SMTP_USER || 'no-reply@twinscloud.com'}>`,
      to: emailTo,
      subject: `New Consultation Booking from ${name}`,
      text: `You have received a new consultation booking:\n\nName: ${name}\nEmail: ${email}\nPreferred Date: ${preferredDate}\nPreferred Time: ${preferredTime}\n\nSubmitted at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #0070f3; border-bottom: 2px solid #0070f3; padding-bottom: 10px; margin-top: 0;">New Consultation Booking</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p style="font-size: 12px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
            Submitted via TwinsCloud Website on ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    // 3. Send email if SMTP credentials are set
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log(`Consultation email notification sent successfully to ${emailTo}`);
    } else {
      console.warn('SMTP credentials are not configured in backend/.env. Consultation saved to DB, but email notification skipped.');
    }

    return res.status(201).json({
      success: true,
      message: 'Consultation booked successfully!',
      data: consultation
    });

  } catch (error) {
    console.error('Error handling Consultation submission:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Newsletter Subscription Route
app.post('/api/newsletter/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    // Check if email already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'You are already subscribed to our newsletter.' });
    }

    const subscription = new Newsletter({ email });
    await subscription.save();
    console.log('Newsletter subscription saved:', subscription);

    return res.status(201).json({
      success: true,
      message: 'Subscribed successfully!'
    });
  } catch (error) {
    console.error('Error in newsletter subscription:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Submit Training Application
app.post('/api/training/apply', async (req, res) => {
  const { name, email, phone, college, branch, passingYear, programType, courseOfInterest } = req.body;
  if (!name || !email || !phone || !college || !branch || !passingYear || !programType || !courseOfInterest) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const appData = new TrainingApplication({ name, email, phone, college, branch, passingYear, programType, courseOfInterest });
    await appData.save();
    console.log('Training Application saved:', appData);

    // Prepare email notification
    const emailTo = process.env.EMAIL_TO || 'Support@twinscloud.com';
    const mailOptions = {
      from: process.env.SMTP_FROM || `"TwinsCloud Training" <${process.env.SMTP_USER || 'no-reply@twinscloud.com'}>`,
      to: emailTo,
      subject: `New Training/Internship Application from ${name}`,
      text: `You have received a new training application:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCollege: ${college}\nBranch/Course: ${branch}\nPassing Year: ${passingYear}\nProgram Type: ${programType}\nCourse of Interest: ${courseOfInterest}\n\nSubmitted at: ${new Date().toLocaleString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #f9841a; border-bottom: 2px solid #f9841a; padding-bottom: 10px; margin-top: 0;">New Training/Internship Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>College:</strong> ${college}</p>
          <p><strong>Branch/Course:</strong> ${branch}</p>
          <p><strong>Passing Year:</strong> ${passingYear}</p>
          <p><strong>Program Type:</strong> ${programType}</p>
          <p><strong>Course of Interest:</strong> ${courseOfInterest}</p>
          <p style="font-size: 12px; color: #888; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
            Submitted via TwinsCloud Website on ${new Date().toLocaleString()}
          </p>
        </div>
      `
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      console.log(`Training application email sent to ${emailTo}`);
    }

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
      data: appData
    });
  } catch (error) {
    console.error('Error handling training application:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// --- ADMIN DASHBOARD API ROUTES ---
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'twins_cloud_super_secret_jwt_token_key_9988';

// JWT Auth Middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized. No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden. Invalid token.' });
  }
};

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || 'TwinsCloudAdminSecurePass2026';

  if (username === expectedUser && password === expectedPass) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ success: true, token });
  }

  return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
});

// Get All RFQs
app.get('/api/admin/rfqs', authMiddleware, async (req, res) => {
  try {
    const rfqs = await Rfq.find().sort({ createdAt: -1 });
    res.json({ success: true, data: rfqs });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch RFQs', error: err.message });
  }
});

// Update RFQ Status
app.put('/api/admin/rfqs/:id', authMiddleware, async (req, res) => {
  const { status } = req.body;
  try {
    const rfq = await Rfq.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!rfq) return res.status(404).json({ message: 'RFQ not found' });
    res.json({ success: true, data: rfq });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update RFQ status', error: err.message });
  }
});

// Get All Consultations
app.get('/api/admin/consultations', authMiddleware, async (req, res) => {
  try {
    const bookings = await Consultation.find().sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch consultations', error: err.message });
  }
});

// Update Consultation Status
app.put('/api/admin/consultations/:id', authMiddleware, async (req, res) => {
  const { status } = req.body;
  try {
    const booking = await Consultation.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) return res.status(404).json({ message: 'Consultation booking not found' });
    res.json({ success: true, data: booking });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update booking status', error: err.message });
  }
});

// Get All Newsletter Subscribers
app.get('/api/admin/newsletters', authMiddleware, async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.json({ success: true, data: subscribers });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch newsletter subscribers', error: err.message });
  }
});

// Get All Training Applications
app.get('/api/admin/training-applications', authMiddleware, async (req, res) => {
  try {
    const apps = await TrainingApplication.find().sort({ createdAt: -1 });
    res.json({ success: true, data: apps });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch training applications', error: err.message });
  }
});

// Update Training Application Status
app.put('/api/admin/training-applications/:id', authMiddleware, async (req, res) => {
  const { status } = req.body;
  try {
    const appData = await TrainingApplication.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!appData) return res.status(404).json({ message: 'Application not found' });
    res.json({ success: true, data: appData });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update application status', error: err.message });
  }
});

// --- PUBLIC BLOG ENDPOINTS ---

// Get All Blog Posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blog posts', error: err.message });
  }
});

// Get Single Blog Post by Slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blog post', error: err.message });
  }
});

// --- PROTECTED ADMIN BLOG ENDPOINTS ---

// Create Blog Post
app.post('/api/admin/posts', authMiddleware, async (req, res) => {
  const { title, slug, summary, content, category, author, readTime } = req.body;
  if (!title || !slug || !summary || !content || !category || !author || !readTime) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });

  try {
    const existing = await BlogPost.findOne({ slug });
    if (existing) return res.status(400).json({ message: 'A blog post with this slug already exists.' });

    const post = new BlogPost({ title, slug, summary, content, category, author, readTime, date: dateStr });
    await post.save();
    res.status(201).json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create blog post', error: err.message });
  }
});

// Update Blog Post
app.put('/api/admin/posts/:id', authMiddleware, async (req, res) => {
  const { title, slug, summary, content, category, author, readTime } = req.body;
  try {
    const post = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, slug, summary, content, category, author, readTime },
      { new: true }
    );
    if (!post) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update blog post', error: err.message });
  }
});

// Delete Blog Post
app.delete('/api/admin/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete blog post', error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
