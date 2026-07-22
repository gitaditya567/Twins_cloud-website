"use client";

import React, { useState } from 'react';

export default function ConsultationPage() {
  const [btnHover, setBtnHover] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    preferredTime: ''
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

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setUserCaptcha('');
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

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
    if (!formData.name || !formData.email || !formData.preferredDate || !formData.preferredTime) {
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/consultation`, {
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
          success: 'Your consultation call has been requested successfully! Our team will reach out to you shortly.',
          error: ''
        });
        setFormData({ name: '', email: '', preferredDate: '', preferredTime: '' });
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
    <div 
      className="animateFadeInUp"
      style={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        color: '#1a202c',
        backgroundColor: '#fafbfc',
        backgroundImage: 'radial-gradient(rgba(249, 132, 26, 0.12) 2.5px, transparent 0), radial-gradient(rgba(0, 112, 243, 0.12) 2.5px, transparent 0)',
        backgroundSize: '32px 32px',
        backgroundPosition: '0 0, 16px 16px',
        padding: '140px 24px 100px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
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
            {/* Top Accent Bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #f9841a, #ffb03a)'
            }} />

            {/* Checkmark Icon */}
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              backgroundColor: '#fff7ed',
              color: '#f9841a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px',
              fontWeight: 'bold',
              boxShadow: '0 0 0 10px rgba(249, 132, 26, 0.15)',
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
              Consultation Booked!
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
                backgroundColor: '#f9841a',
                color: '#ffffff',
                border: 'none',
                padding: '13px 28px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 4px 12px rgba(249, 132, 26, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2700f'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f9841a'}
            >
              Awesome, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* Background spotlights */}
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(120px)',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.15,
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, #f9841a 0%, rgba(249, 132, 26, 0) 70%)',
        top: '-100px',
        right: '-100px'
      }} />
      <div style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(120px)',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.15,
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, #0070f3 0%, rgba(0, 112, 243, 0) 70%)',
        bottom: '-100px',
        left: '-100px'
      }} />

      <div style={{ 
        maxWidth: '800px', 
        width: '100%',
        margin: '0 auto', 
        position: 'relative',
        zIndex: 2,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(249, 132, 26, 0.15)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.02)'
      }}>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px', color: '#0b0f19', letterSpacing: '-1.5px' }}>
          Book a <span style={{ background: 'linear-gradient(135deg, #f9841a 0%, #ffb03a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Consultation</span>
        </h1>
        <p style={{ color: '#4a5568', fontSize: '17px', marginBottom: '32px', lineHeight: '1.6' }}>
          Schedule a 30-minute discovery call with our cloud architects and technology advisors to discuss your plans and challenges.
        </p>

        {status.error && (
          <div style={{ padding: '15px', backgroundColor: '#fce8e6', color: '#c5221f', borderRadius: '12px', marginBottom: '24px', fontWeight: '600' }}>
            {status.error}
          </div>
        )}
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0b0f19', fontSize: '14px' }}>Name</label>
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
                  padding: '14px 18px', 
                  borderRadius: '12px', 
                  border: nameError ? '2px solid #ef4444' : '1px solid rgba(0,0,0,0.08)', 
                  outline: 'none', 
                  background: '#fff', 
                  fontSize: '15px',
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
                <label style={{ fontWeight: '700', color: '#0b0f19', fontSize: '14px' }}>Email</label>
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
                  padding: '14px 18px', 
                  borderRadius: '12px', 
                  border: emailStatus.isValid === false 
                    ? '2px solid #ef4444' 
                    : emailStatus.isValid === true 
                    ? '2px solid #22c55e' 
                    : '1px solid rgba(0,0,0,0.08)', 
                  outline: 'none', 
                  background: '#fff', 
                  fontSize: '15px',
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
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0b0f19', fontSize: '14px' }}>Preferred Date</label>
              <input 
                type="date" 
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', outline: 'none', background: '#fff', fontSize: '15px' }} 
              />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0b0f19', fontSize: '14px' }}>Preferred Time</label>
              <input 
                type="time" 
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', outline: 'none', background: '#fff', fontSize: '15px' }} 
              />
            </div>
          </div>

          {/* Security Captcha Challenge */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(249, 132, 26, 0.2)',
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ fontWeight: '700', fontSize: '14px', color: '#0b0f19', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                background: '#fff7ed',
                border: '1px solid #ffedd5',
                padding: '10px 18px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '18px',
                color: '#c2410c',
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
                  borderRadius: '10px', 
                  border: '1px solid rgba(0,0,0,0.1)',
                  fontSize: '15px',
                  outline: 'none'
                }} 
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={status.loading}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{ 
              backgroundColor: status.loading ? '#ccc' : (btnHover ? '#e2700f' : '#f9841a'), 
              color: '#fff', 
              border: 'none', 
              padding: '14px 36px', 
              borderRadius: '30px', 
              fontWeight: '600', 
              cursor: status.loading ? 'not-allowed' : 'pointer', 
              width: 'fit-content',
              fontSize: '15px',
              boxShadow: status.loading ? 'none' : (btnHover ? '0 10px 25px rgba(249, 132, 26, 0.5)' : '0 6px 20px rgba(249, 132, 26, 0.35)'),
              transform: status.loading ? 'none' : (btnHover ? 'translateY(-2px)' : 'translateY(0)'),
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {status.loading ? 'Booking...' : 'Book Call'}
          </button>
        </form>
      </div>
    </div>
  );
}
