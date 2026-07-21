"use client";

import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#fafbfc',
      color: '#1e293b',
      padding: '140px 24px 100px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Top Header Badge */}
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
            Legal Agreement & Policies
          </span>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-1px' }}>
            Terms of <span style={{ color: '#f9841a' }}>Service</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Service Level Agreement (SLA), Non-Payment Suspension, and Server Data Deletion Policy for TwinsCloud Private Limited.
          </p>
        </div>

        {/* Main Content Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          lineHeight: '1.7'
        }}>
          
          {/* Important Notice Callout */}
          <div style={{
            backgroundColor: '#fff7ed',
            borderLeft: '5px solid #f9841a',
            borderRadius: '12px',
            padding: '20px 24px',
            marginBottom: '36px'
          }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#c2410c', fontSize: '18px', fontWeight: '700' }}>
              ⚖️ Right to Suspend and Terminate for Non-Payment
            </h3>
            <p style={{ margin: 0, color: '#9a3412', fontSize: '15px' }}>
              To ensure legal safety and smooth cloud infrastructure operational continuity, all client accounts, hosting services, and custom software solutions provided by TwinsCloud Private Limited are governed by the following Terms and Conditions (T&amp;C) and Service Level Agreement (SLA) clauses.
            </p>
          </div>

          {/* Section 1 */}
          <div style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ background: '#f9841a', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px' }}>1</span>
              Data Hold (Suspension) Clause — Day 1 to 30/45
            </h2>
            <p style={{ color: '#334155', fontSize: '16px', marginBottom: '12px' }}>
              TwinsCloud reserves the right to lock client dashboard access, restrict software features, and suspend hosting servers immediately following invoice due date expiration.
            </p>
            <ul style={{ color: '#475569', paddingLeft: '24px', margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>T&amp;C Rule:</strong> If an invoice remains unpaid past the due date (e.g., 7-14 days), temporary service suspension will be initiated.
              </li>
              <li>
                <strong>Impact:</strong> The client’s live software, web application, or cloud hosting will be temporarily deactivated, but all hosted files and databases will remain safely stored on our servers pending payment settlement.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ background: '#ef4444', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px' }}>2</span>
              Data Deletion (Termination) Clause — Day 45 to 60+
            </h2>
            <p style={{ color: '#334155', fontSize: '16px', marginBottom: '12px' }}>
              Maintaining unmaintained server infrastructure and backup storage incurs ongoing infrastructure costs. Therefore, permanent data purge rights apply after 45 to 60 days of non-payment.
            </p>
            <ul style={{ color: '#475569', paddingLeft: '24px', margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>T&amp;C Rule:</strong> If non-payment continues for 45 to 60+ days, the Company reserves the absolute right to permanently terminate the service agreement and purge all client data, backups, and configurations from our servers.
              </li>
              <li>
                <strong>Company Protection:</strong> Data delete hone ke baad kisi bhi loss ya nuksan ke liye company zimmedar nahi hogi (The Company shall bear no liability for any data loss, financial damage, or business disruption resulting from permanent account deletion).
              </li>
            </ul>
          </div>

          {/* Standard Legal Drafting Box */}
          <div style={{
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#f9841a', marginBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px' }}>
              📜 Standard Legal Drafting (Sample Contract Text)
            </h3>
            
            <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#cbd5e1' }}>
              <p style={{ fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                Non-Payment, Suspension, and Data Deletion:
              </p>

              <div style={{ marginBottom: '14px', paddingLeft: '14px', borderLeft: '3px solid #f9841a' }}>
                <strong style={{ color: '#ffffff' }}>Suspension:</strong> If any invoice remains unpaid for 15 days after the due date, the Company reserves the right to immediately suspend the Client’s access to the Software and Hosting services without prior notice.
              </div>

              <div style={{ marginBottom: '14px', paddingLeft: '14px', borderLeft: '3px solid #ef4444' }}>
                <strong style={{ color: '#ffffff' }}>Termination &amp; Deletion:</strong> If the payment is delayed for 40 to 60 days, the Company reserves the right to permanently terminate the service agreement. Upon termination, all customer data, backups, and hosted files will be permanently deleted from our servers.
              </div>

              <div style={{ paddingLeft: '14px', borderLeft: '3px solid #64748b' }}>
                <strong style={{ color: '#ffffff' }}>No Liability:</strong> The Company shall not be liable to the Client or any third party for any damages, loss of data, or loss of business resulting from such suspension or permanent deletion due to non-payment.
              </div>
            </div>
          </div>

          {/* Best Practices Section */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🛡️ Best Practices &amp; Legal Safety
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#ffffff', padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#f9841a', fontWeight: '700' }}>
                  📧 Advance Warnings (Email Alerts)
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                  At least 3 automated email warnings are dispatched before permanent data deletion (e.g. Day 30, Day 45, and 5 days prior to final server purge) to ensure full transparency and legal compliance.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#0284c7', fontWeight: '700' }}>
                  🔄 Data Recovery &amp; Reactivation Fee
                </h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                  If a client requests account reactivation during the temporary suspension window, a standard &quot;Reactivation Fee&quot; applies to unfreeze server infrastructure and restore active services.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
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
