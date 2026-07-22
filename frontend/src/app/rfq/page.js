"use client";

import React, { useState } from 'react';

export default function RFQPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: ''
  });

  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [emailStatus, setEmailStatus] = useState({ isValid: null, error: '', suggestion: '' });
  const [nameError, setNameError] = useState('');

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: ''
  });

  const validateEmail = (emailVal) => {
    if (!emailVal || emailVal.trim() === '') {
      setEmailStatus({ isValid: null, error: '', suggestion: '' });
      return false;
    }

    const email = emailVal.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!regex.test(email)) {
      setEmailStatus({
        isValid: false,
        error: 'Please enter a valid email address (e.g. name@company.com).',
        suggestion: ''
      });
      return false;
    }

    const parts = email.split('@');
    const domain = parts[1]?.toLowerCase();

    const disposableDomains = [
      'mailinator.com', 'tempmail.com', '10minutemail.com', 'yopmail.com',
      'guerrillamail.com', 'trashmail.com', 'dispostable.com', 'sharklasers.com',
      'getnada.com', 'temp-mail.org', 'bupmail.com', 'dropmail.me'
    ];

    if (disposableDomains.includes(domain)) {
      setEmailStatus({
        isValid: false,
        error: 'Temporary/disposable email addresses are not accepted.',
        suggestion: ''
      });
      return false;
    }

    const typos = {
      'gmial.com': 'gmail.com',
      'gamil.com': 'gmail.com',
      'gmal.com': 'gmail.com',
      'gmail.co': 'gmail.com',
      'hotmai.com': 'hotmail.com',
      'hotmial.com': 'hotmail.com',
      'yaho.com': 'yahoo.com',
      'outlok.com': 'outlook.com'
    };

    if (typos[domain]) {
      const suggestedEmail = `${parts[0]}@${typos[domain]}`;
      setEmailStatus({
        isValid: true,
        error: '',
        suggestion: `Did you mean ${suggestedEmail}?`
      });
      return true;
    }

    setEmailStatus({ isValid: true, error: '', suggestion: '' });
    return true;
  };

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setUserCaptcha('');
  };

  React.useEffect(() => {
    generateCaptcha();
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

    if (name === 'name') {
      if (/[^a-zA-Z\s]/.test(value)) {
        setNameError('Only alphabetic letters and spaces are allowed.');
      } else {
        setNameError('');
      }
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, name: filteredValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDescription) {
      setStatus({ loading: false, success: '', error: 'All fields are required.' });
      return;
    }

    const isEmailValid = validateEmail(formData.email);
    if (!isEmailValid) {
      setStatus({ loading: false, success: '', error: 'Please provide a valid email address.' });
      return;
    }

    if (parseInt(userCaptcha, 10) !== captchaQuestion.answer) {
      setStatus({ loading: false, success: '', error: 'Incorrect Security CAPTCHA answer. Please try again.' });
      generateCaptcha();
      return;
    }

    setStatus({ loading: true, success: '', error: '' });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/rfq`, {
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
        setEmailStatus({ isValid: null, error: '', suggestion: '' });
        setNameError('');
        generateCaptcha();
      } else {
        setStatus({
          loading: false,
          success: '',
          error: data.message || 'Something went wrong. Please try again.'
        });
        generateCaptcha();
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: '',
        error: 'Failed to submit. Please ensure the backend server is running.'
      });
      generateCaptcha();
    }
  };

  return (
    <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <style jsx global>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popInModal {
          0% { opacity: 0; transform: scale(0.7) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounceCheck {
          0% { transform: scale(0); }
          50% { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Animated Center Success Modal Overlay */}
      {status.success && (
        <div 
          onClick={() => setStatus(prev => ({ ...prev, success: '' }))}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            animation: 'fadeInOverlay 0.3s ease forwards'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '460px',
              width: '100%',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              animation: 'popInModal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Green Accent Bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #10b981, #059669)'
            }} />

            {/* Checkmark Circle Icon */}
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              backgroundColor: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px',
              fontWeight: 'bold',
              boxShadow: '0 0 0 10px rgba(34, 197, 94, 0.15)',
              animation: 'bounceCheck 0.5s ease'
            }}>
              ✓
            </div>

            <h2 style={{
              fontSize: '22px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '12px',
              lineHeight: '1.3'
            }}>
              Submitted Successfully!
            </h2>

            <p style={{
              fontSize: '15px',
              color: '#475569',
              lineHeight: '1.6',
              marginBottom: '26px'
            }}>
              {status.success}
            </p>

            <button
              onClick={() => setStatus(prev => ({ ...prev, success: '' }))}
              style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                padding: '13px 28px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#059669'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
            >
              Great, Thanks!
            </button>
          </div>
        </div>
      )}

      <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
        Request <span style={{ color: '#f9841a' }}>a Quote</span> (RFQ)
      </h1>
      <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>
        Tell us about your project requirements, and we will get back to you with a detailed quote proposal.
      </p>

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
              placeholder="Enter your full name" 
              pattern="[A-Za-z\s]+"
              title="Only alphabetic letters and spaces are allowed"
              required
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '6px', 
                border: nameError ? '2px solid #ef4444' : '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }} 
            />
            {nameError && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', marginBottom: '0', fontWeight: '500' }}>
                ⚠️ {nameError}
              </p>
            )}
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontWeight: '600' }}>Email</label>
              {emailStatus.isValid === true && (
                <span style={{ color: '#16a34a', fontSize: '13px', fontWeight: '600' }}>✓ Valid Email</span>
              )}
            </div>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={(e) => validateEmail(e.target.value)}
              placeholder="name@company.com" 
              required
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '6px', 
                border: emailStatus.isValid === false 
                  ? '2px solid #ef4444' 
                  : emailStatus.isValid === true 
                  ? '2px solid #22c55e' 
                  : '1px solid #ccc',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }} 
            />
            {emailStatus.error && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', marginBottom: '0', fontWeight: '500' }}>
                ⚠️ {emailStatus.error}
              </p>
            )}
            {emailStatus.suggestion && (
              <p 
                onClick={() => {
                  const suggested = emailStatus.suggestion.replace('Did you mean ', '').replace('?', '');
                  setFormData(prev => ({ ...prev, email: suggested }));
                  validateEmail(suggested);
                }}
                style={{ color: '#d97706', fontSize: '13px', marginTop: '6px', marginBottom: '0', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}
              >
                💡 {emailStatus.suggestion}
              </p>
            )}
          </div>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Project Description</label>
          <textarea 
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            rows={5} 
            placeholder="Describe your project goals, features, and timeline..." 
            required
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }}
          ></textarea>
        </div>

        {/* Security Captcha Challenge */}
        <div style={{
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ fontWeight: '600', fontSize: '15px', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🛡️ Human Verification</span>
              <span style={{ fontSize: '12px', fontWeight: '400', color: '#64748b' }}>(Anti-Spam CAPTCHA)</span>
            </label>
            <button 
              type="button" 
              onClick={generateCaptcha}
              title="Refresh Captcha"
              style={{
                background: 'none',
                border: 'none',
                color: '#f9841a',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              🔄 Refresh
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <div style={{
              background: '#e2e8f0',
              padding: '10px 18px',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '18px',
              color: '#1e293b',
              letterSpacing: '2px',
              userSelect: 'none'
            }}>
              {captchaQuestion.num1} + {captchaQuestion.num2} = ?
            </div>
            <input 
              type="number" 
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              placeholder="Enter answer"
              required
              style={{ 
                width: '140px', 
                padding: '10px 14px', 
                borderRadius: '6px', 
                border: '1px solid #cbd5e1',
                fontSize: '16px'
              }} 
            />
          </div>
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
