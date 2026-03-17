'use client';

import { useState, useEffect } from 'react';
import './advisory.css';

export default function ConsultingPage() {
  const [inquiryForm, setInquiryForm] = useState({
    subject: '',
    email: '',
    message: ''
  });
  
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    company: '',
    password: ''
  });

  const [inquiryStatus, setInquiryStatus] = useState('');
  const [joinStatus, setJoinStatus] = useState('');
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // 用 Intersection Observer 检测元素进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryForm.subject,
          email: inquiryForm.email,
          message: inquiryForm.message
        })
      });
      
      if (response.ok) {
        setInquiryStatus('success');
        setInquiryForm({ subject: '', email: '', message: '' });
        setTimeout(() => setInquiryStatus(''), 3000);
      } else {
        setInquiryStatus('error');
      }
    } catch (error) {
      setInquiryStatus('error');
    }
  };

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJoinStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: joinForm.name,
          email: joinForm.email,
          company: joinForm.company,
          message: `New signup: ${joinForm.company}`
        })
      });
      
      if (response.ok) {
        setJoinStatus('success');
        setJoinForm({ name: '', email: '', company: '', password: '' });
        setTimeout(() => setJoinStatus(''), 3000);
      } else {
        setJoinStatus('error');
      }
    } catch (error) {
      setJoinStatus('error');
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <>
      
      <header>
        <div>
          <img src="/fionaconsult-logo.png" alt="FionaConsult Logo" className="header-logo" />
          <a href="#join">Join</a>
        </div>
        <div>
          <a href="#services">Insights</a>
          <a href="#pricing">Pricing</a>
          <a href="#inquiry">Feedback</a>
        </div>
      </header>

      <section className="section hero">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>

        <div className="hero-content">
          <h1>FIONACONSULT</h1>
          <p>Independent strategy and operations consulting, supporting organizations with decision-making, execution, and organizational clarity.</p>
        </div>
      </section>

      <section className="section services" id="services" data-animate>
        <div className={`services-content ${isVisible('services') ? 'animate-fade-up' : ''}`}>
          <div data-animate id="services-left">
            <h2 className={`${isVisible('services-left') ? 'animate-fade-left' : ''}`}>Insights</h2>
            <p className={`delay-1 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>We work closely with founders and leadership teams to address complex strategic and operational challenges.</p>
            <ul>
              <li className={`delay-2 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ Business strategy and planning</li>
              <li className={`delay-3 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ Operations and process optimization</li>
              <li className={`delay-4 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ Market and competitive analysis</li>
              <li className={`delay-4 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ Execution and decision support</li>
            </ul>
          </div>
          <div data-animate id="services-right">
            <p className={`${isVisible('services-right') ? 'animate-fade-right' : ''}`}>Our advisory approach emphasizes clarity, independence, and practical execution.</p>
          </div>
        </div>
      </section>

      <section className="section work" id="work" data-animate>
        <h2 className={`${isVisible('work') ? 'animate-fade-left' : ''}`}>How We Work</h2>
        <p className={`delay-1 ${isVisible('work') ? 'animate-fade-left' : ''}`}>Engagements are independent, confidential, and tailored to each client's specific context.</p>
        <ul>
          <li className={`delay-2 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ Clearly scoped advisory engagements</li>
          <li className={`delay-3 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ Direct collaboration with decision-makers</li>
          <li className={`delay-4 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ Actionable, structured outputs</li>
          <li className={`delay-4 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ Strict confidentiality</li>
        </ul>
      </section>

      <section className="section pricing-section" id="pricing" data-animate>
        <h2 style={{ color: '#f8fafc' }} className={`${isVisible('pricing') ? 'animate-fade-up' : ''}`}>Pricing</h2>
        <div className="pricing">
          <div className={`plan delay-1 ${isVisible('pricing') ? 'animate-scale' : ''}`} data-animate>
            <strong>Basic</strong><br/>
            €5 / month<br/>
            General advisory access.
          </div>
          <div className={`plan delay-2 ${isVisible('pricing') ? 'animate-scale' : ''}`} data-animate>
            <strong>Standard</strong><br/>
            €8 / month<br/>
            Structured ongoing support.
          </div>
          <div className={`plan delay-3 ${isVisible('pricing') ? 'animate-scale' : ''}`} data-animate>
            <strong>Premium</strong><br/>
            €12 / month<br/>
            Priority advisory engagement.
          </div>
        </div>
      </section>

      <section className="inquiry" id="inquiry" data-animate>
        <div data-animate id="inquiry-left">
          <h2 className={`${isVisible('inquiry-left') ? 'animate-fade-left' : ''}`}>Submit an inquiry</h2>
          <p className={`delay-1 ${isVisible('inquiry-left') ? 'animate-fade-left' : ''}`}>We will get back to you within 24–48 hours.</p>
          <p className={`delay-2 ${isVisible('inquiry-left') ? 'animate-fade-left' : ''}`}>email: <strong>service@fionaconsult.de</strong></p>
        </div>
        <form onSubmit={handleInquirySubmit} data-animate id="inquiry-form">
          <input
            type="text"
            placeholder="Subject"
            value={inquiryForm.subject}
            onChange={(e) => setInquiryForm({...inquiryForm, subject: e.target.value})}
            required
            className={`${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}
          />
          <input
            type="email"
            placeholder="Your email"
            value={inquiryForm.email}
            onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
            required
            className={`delay-1 ${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}
          />
          <textarea
            placeholder="Your message"
            value={inquiryForm.message}
            onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
            required
            className={`delay-2 ${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}
          ></textarea>
          <button type="submit" disabled={inquiryStatus === 'sending'} className={`delay-3 ${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}>
            {inquiryStatus === 'sending' ? '发送中...' : inquiryStatus === 'success' ? '✓ 已发送' : '提交'}
          </button>
        </form>
      </section>

      <section className="section" id="join" data-animate>
        <div className={`join-box ${isVisible('join') ? 'animate-scale' : ''}`} data-animate id="join">
          <h2>Join</h2>
          <form onSubmit={handleJoinSubmit}>
            <input
              type="text"
              placeholder="Full name"
              value={joinForm.name}
              onChange={(e) => setJoinForm({...joinForm, name: e.target.value})}
              required
              className={`${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <input
              type="email"
              placeholder="Email"
              value={joinForm.email}
              onChange={(e) => setJoinForm({...joinForm, email: e.target.value})}
              required
              className={`delay-1 ${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <input
              type="text"
              placeholder="Company"
              value={joinForm.company}
              onChange={(e) => setJoinForm({...joinForm, company: e.target.value})}
              required
              className={`delay-2 ${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <input
              type="password"
              placeholder="Password"
              value={joinForm.password}
              onChange={(e) => setJoinForm({...joinForm, password: e.target.value})}
              required
              className={`delay-3 ${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <button type="submit" disabled={joinStatus === 'sending'} className={`delay-4 ${isVisible('join') ? 'animate-fade-up' : ''}`}>
              {joinStatus === 'sending' ? '创建中...' : joinStatus === 'success' ? '✓ 已创建' : '创建账户'}
            </button>
          </form>
        </div>
      </section>

      <footer>
        © 2026 <strong>FIONACONSULT</strong><br/>
        email: service@fionaconsult.de
      </footer>
    </>
  );
}
