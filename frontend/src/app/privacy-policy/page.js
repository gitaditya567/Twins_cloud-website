"use client";

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#fafbfc',
      color: '#1e293b',
      padding: '140px 24px 100px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            background: 'rgba(249, 132, 26, 0.1)',
            color: '#f9841a',
            padding: '6px 18px',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '0.5px',
            border: '1px solid rgba(249, 132, 26, 0.25)',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '16px'
          }}>
            Privacy &amp; Security
          </span>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-1px' }}>
            Privacy <span style={{ color: '#f9841a' }}>Policy</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            At TwinsCloud Private Limited, we prioritize the confidentiality, integrity, and security of your personal data and enterprise cloud assets.
          </p>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          lineHeight: '1.7'
        }}>
          
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              1. Information We Collect
            </h2>
            <p style={{ color: '#475569', fontSize: '15px' }}>
              We collect information you provide directly to us when filling out RFQ forms, booking discovery calls, subscribing to newsletters, or applying for training programs. This includes your name, corporate email address, contact numbers, and project specifications.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              2. How We Use Your Information
            </h2>
            <ul style={{ color: '#475569', paddingLeft: '24px', fontSize: '15px' }}>
              <li style={{ marginBottom: '6px' }}>To deliver cloud engineering services, custom software development, and technical support.</li>
              <li style={{ marginBottom: '6px' }}>To process quotes, issue invoices, and manage service level agreements.</li>
              <li style={{ marginBottom: '6px' }}>To send critical security updates, maintenance alerts, and administrative notifications.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              3. Data Security &amp; Encryption
            </h2>
            <p style={{ color: '#475569', fontSize: '15px' }}>
              All communications and stored databases are secured using industry-standard TLS encryption, strict IAM role policies, and AWS CloudFront Web Application Firewalls (WAF) to prevent unauthorized access.
            </p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              4. Contact Us
            </h2>
            <p style={{ color: '#475569', fontSize: '15px' }}>
              For any privacy inquiries or data rights requests, please contact our support team at <a href="mailto:support@twinscloud.com" style={{ color: '#f9841a', fontWeight: '600' }}>support@twinscloud.com</a>.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link 
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#f9841a',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(249, 132, 26, 0.3)'
              }}
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
