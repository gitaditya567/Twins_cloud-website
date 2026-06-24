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

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.preferredDate || !formData.preferredTime) {
      setStatus({ loading: false, success: '', error: 'All fields are required.' });
      return;
    }

    setStatus({ loading: true, success: '', error: '' });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/consultation`, {
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
          success: 'Your consultation call has been requested successfully!',
          error: ''
        });
        setFormData({ name: '', email: '', preferredDate: '', preferredTime: '' });
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

        {status.success && (
          <div style={{ padding: '15px', backgroundColor: '#e6f4ea', color: '#137333', borderRadius: '12px', marginBottom: '24px', fontWeight: '600' }}>
            {status.success}
          </div>
        )}

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
                placeholder="Sarah Jenkins" 
                required
                style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', outline: 'none', background: '#fff', fontSize: '15px' }} 
              />
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0b0f19', fontSize: '14px' }}>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@example.com" 
                required
                style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', outline: 'none', background: '#fff', fontSize: '15px' }} 
              />
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
