import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ChevronDown, HelpCircle, MapPin, Phone, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiryType: 'Student Educational Project',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is the best time of the year to visit Punjab?',
      a: 'The ideal window is between October and March. Temperatures range from a pleasant 10°C to 25°C, making sightseeing delightful. In December and January, you can witness the blooming yellow mustard (sarson) fields and enjoy piping hot Sarson da Saag and Makki di Roti.'
    },
    {
      q: 'What is the etiquette and dress code when visiting Sri Harmandir Sahib and Gurdwaras?',
      a: 'All visitors must cover their heads (scarves are provided free at entrances), remove shoes and socks (safely deposited at complimentary shoe counters), and wash their hands and feet in the running water channel before stepping onto the marble parikrama. Modest clothing covering shoulders and knees is strictly requested, and alcohol/tobacco are strictly prohibited.'
    },
    {
      q: 'How far is Amritsar from Delhi, and what are the best travel options?',
      a: 'Amritsar is approximately 450 km northwest of New Delhi. It is well connected via fast express trains like the Vande Bharat Express and Shatabdi Express (approx. 5.5 to 6 hours), direct 1-hour flights from Delhi (DEL to ATQ), and the 8-lane Delhi-Amritsar-Katra Expressway.'
    },
    {
      q: 'What is the essential distinction between historical Punjab and modern Indian Punjab?',
      a: 'Historical Punjab was the expansive basin of the five rivers between the Indus and Yamuna (covering ~350,000 km²), incorporating Pakistani Punjab, Haryana, Himachal Pradesh, and Chandigarh. The modern Indian state of Punjab was formed on 1 November 1966 through the Punjab Reorganization Act, spanning 50,362 km².'
    },
    {
      q: 'Are visitors permitted to attend the Attari-Wagah border ceremony every evening?',
      a: 'Yes, the daily Beating Retreat ceremony conducted by the Border Security Force (BSF) and Pakistan Rangers is free and open to the public. Arrive by 3:00 PM to secure seating in the stadium. Bags, luggage, and large electronic equipment are not permitted inside for security reasons.'
    },
    {
      q: 'Where can researchers find verified archival resources on Punjab?',
      a: 'Key repositories include the Punjab State Archives in Chandigarh and Patiala, the Central Sikh Museum at Sri Harmandir Sahib Amritsar, Punjab Agricultural University (PAU) Library in Ludhiana, and the National Archives of India.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} />
            <span>Connect & Inquire</span>
          </span>
          <h2 className="section-title">
            Contact & Visitor FAQs
          </h2>
          <p className="section-subtitle">
            Have questions about educational research, cultural visits, or traveling through Punjab? Reach out to our heritage desk.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {/* FAQ Accordion Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <HelpCircle size={24} style={{ color: 'var(--color-crimson)' }} />
              <h3 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-primary)' }}>
                Frequently Asked Traveler Questions
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="card"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-medium)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      gap: '0.75rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      style={{
                        transform: openFaq === i ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0,
                        color: 'var(--color-mustard)'
                      }} 
                    />
                  </button>

                  {openFaq === i && (
                    <div style={{
                      padding: '0 1.25rem 1.25rem 1.25rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      borderTop: '1px solid var(--border-light)'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry / Feedback Form Column */}
          <div className="card" style={{ padding: '2.25rem', backgroundColor: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem', color: 'var(--color-emerald)' }}>
              Send an Inquiry or Feedback
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Whether you are preparing a school report, planning a trip to Amritsar, or sharing a cultural reflection, we welcome your thoughts.
            </p>

            {isSubmitted ? (
              <div style={{
                padding: '2rem',
                backgroundColor: 'var(--color-emerald-subtle)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                border: '1px solid var(--color-emerald)'
              }}>
                <CheckCircle2 size={42} style={{ color: 'var(--color-emerald)', margin: '0 auto 0.75rem auto' }} />
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-emerald)', marginBottom: '0.35rem' }}>
                  Dhanvaad! Your message has been received.
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
                  Thank you for connecting with the Discover Punjab educational initiative. Ji Aayan Nu!
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', inquiryType: 'Student Educational Project', message: '' });
                  }}
                  style={{ marginTop: '1.25rem', fontSize: '0.85rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jasleen Kaur / Amit Sharma"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. name@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    Inquiry Topic
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      outline: 'none'
                    }}
                  >
                    <option value="Student Educational Project">Student Educational Project / College Research</option>
                    <option value="Tourism & Travel Guidance">Tourism & Travel Circuit Guidance</option>
                    <option value="History & Archives">Historical & Archival Inquiries</option>
                    <option value="Cultural Heritage & Cuisine">Cultural Heritage & Traditional Cuisine</option>
                    <option value="General Feedback">General Feedback & Appreciation</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share your inquiry or comments..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
