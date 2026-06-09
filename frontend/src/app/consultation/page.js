"use client";

import React from 'react';

export default function ConsultationPage() {
  return (
    <div style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
        Book a <span style={{ color: '#f9841a' }}>Consultation</span>
      </h1>
      <p style={{ color: '#666', fontSize: '18px', marginBottom: '30px' }}>
        Schedule a 30-minute discovery call with our cloud architects and technology advisors to discuss your plans and challenges.
      </p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
            <input type="text" placeholder="Sarah Jenkins" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
            <input type="email" placeholder="sarah@example.com" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Preferred Date</label>
            <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Preferred Time</label>
            <input type="time" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <button style={{ backgroundColor: '#f9841a', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', width: 'fit-content' }}>
          Book Call
        </button>
      </form>
    </div>
  );
}
