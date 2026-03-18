'use client';

import { useState, useEffect } from 'react';
import './advisory.css';

export default function ConsultingPage() {  const [currentLang, setCurrentLang] = useState('EN');  const [inquiryForm, setInquiryForm] = useState({
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

  useEffect(() => {
    const savedLang = localStorage.getItem('currentLang') || 'EN';
    setCurrentLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = currentLang === 'EN' ? 'DE' : 'EN';
    setCurrentLang(newLang);
    localStorage.setItem('currentLang', newLang);
  };

  const getText = (en: string, de: string) => currentLang === 'EN' ? en : de;

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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryForm.subject,
          email: inquiryForm.email,
          message: inquiryForm.message
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        setInquiryStatus('success');
        setInquiryForm({ subject: '', email: '', message: '' });
        setTimeout(() => setInquiryStatus(''), 3000);
      } else {
        setInquiryStatus('error');
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setInquiryStatus('error');
      } else {
        setInquiryStatus('error');
      }
    }
  };

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJoinStatus('sending');
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: joinForm.name,
          email: joinForm.email,
          company: joinForm.company,
          message: `New signup: ${joinForm.company}`
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        setJoinStatus('success');
        setJoinForm({ name: '', email: '', company: '', password: '' });
        setTimeout(() => setJoinStatus(''), 3000);
      } else {
        setJoinStatus('error');
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setJoinStatus('error');
      } else {
        setJoinStatus('error');
      }
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <div data-lang={currentLang}>
      
      <header>
        <div>
          <img src="/fionaconsult-logo.png" alt="FionaConsult Logo" className="header-logo" />
          <a href="#join">{getText('Join', 'Beitreten')}</a>
        </div>
        <div>
          <a href="#services">{getText('Insights', 'Einblicke')}</a>
          <a href="#pricing">{getText('Pricing', 'Preise')}</a>
          <a href="#inquiry">{getText('Feedback', 'Feedback')}</a>
          <button onClick={toggleLang} style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}>
            {currentLang === 'EN' ? 'DE' : 'EN'}
          </button>
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
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{getText('Independent strategy and operations consulting, supporting organizations with decision-making, execution, and organizational clarity.', 'Unabhängige Strategie- und Betriebsberatung, die Organisationen bei Entscheidungsfindung, Umsetzung und organisatorischer Klarheit unterstützt.')}</p>
        </div>
      </section>

      <section className="section services" id="services" data-animate>
        <div className={`services-content ${isVisible('services') ? 'animate-fade-up' : ''}`}>
          <div data-animate id="services-left">
            <h2 className={`${isVisible('services-left') ? 'animate-fade-left' : ''}`}>{getText('Insights', 'Einblicke')}</h2>
            <p className={`delay-1 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>{getText('We work closely with founders and leadership teams to address complex strategic and operational challenges.', 'Wir arbeiten eng mit Gründern und Führungsteams zusammen, um komplexe strategische und betriebliche Herausforderungen zu bewältigen.')}</p>
            <ul>
              <li className={`delay-2 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ {getText('Business strategy and planning', 'Geschäftsstrategie und Planung')}</li>
              <li className={`delay-3 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ {getText('Operations and process optimization', 'Betrieb und Prozessoptimierung')}</li>
              <li className={`delay-4 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ {getText('Market and competitive analysis', 'Markt- und Wettbewerbsanalyse')}</li>
              <li className={`delay-4 ${isVisible('services-left') ? 'animate-fade-left' : ''}`}>✓ {getText('Execution and decision support', 'Umsetzung und Entscheidungsunterstützung')}</li>
            </ul>
          </div>
          <div data-animate id="services-right">
            <p className={`${isVisible('services-right') ? 'animate-fade-right' : ''}`}>{getText('Our advisory approach emphasizes clarity, independence, and practical execution.', 'Unser Beratungsansatz betont Klarheit, Unabhängigkeit und praktische Umsetzung.')}</p>
          </div>
        </div>
      </section>

      <section className="section work" id="work" data-animate>
        <h2 className={`${isVisible('work') ? 'animate-fade-left' : ''}`}>{getText('How We Work', 'Wie wir arbeiten')}</h2>
        <p className={`delay-1 ${isVisible('work') ? 'animate-fade-left' : ''}`}>{getText('Engagements are independent, confidential, and tailored to each client\'s specific context.', 'Engagements sind unabhängig, vertraulich und auf den spezifischen Kontext jedes Kunden zugeschnitten.')}</p>
        <ul>
          <li className={`delay-2 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ {getText('Clearly scoped advisory engagements', 'Klar definierte Beratungsengagements')}</li>
          <li className={`delay-3 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ {getText('Direct collaboration with decision-makers', 'Direkte Zusammenarbeit mit Entscheidungsträgern')}</li>
          <li className={`delay-4 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ {getText('Actionable, structured outputs', 'Umsetzbare, strukturierte Ergebnisse')}</li>
          <li className={`delay-4 ${isVisible('work') ? 'animate-fade-left' : ''}`}>✓ {getText('Strict confidentiality', 'Strikte Vertraulichkeit')}</li>
        </ul>
      </section>

      <section className="section pricing-section" id="pricing" data-animate>
        <h2 style={{ color: '#f8fafc' }} className={`${isVisible('pricing') ? 'animate-fade-up' : ''}`}>{getText('Pricing', 'Preise')}</h2>
        <div className="pricing">
          <div className={`plan delay-1 ${isVisible('pricing') ? 'animate-scale' : ''}`} data-animate>
            <strong>{getText('Basic', 'Basis')}</strong><br/>
            €5 / month<br/>
            {getText('General advisory access.', 'Allgemeiner Beratungszugriff.')}
          </div>
          <div className={`plan delay-2 ${isVisible('pricing') ? 'animate-scale' : ''}`} data-animate>
            <strong>{getText('Standard', 'Standard')}</strong><br/>
            €8 / month<br/>
            {getText('Structured ongoing support.', 'Strukturierte Unterstützung laufend.')}
          </div>
          <div className={`plan delay-3 ${isVisible('pricing') ? 'animate-scale' : ''}`} data-animate>
            <strong>{getText('Premium', 'Premium')}</strong><br/>
            €12 / month<br/>
            {getText('Priority advisory engagement.', 'Prioritäres Beratungsengagement.')}
          </div>
        </div>
      </section>

      <section className="inquiry" id="inquiry" data-animate>
        <div data-animate id="inquiry-left">
          <h2 className={`${isVisible('inquiry-left') ? 'animate-fade-left' : ''}`}>{getText('Submit an inquiry', 'Eine Anfrage einreichen')}</h2>
          <p className={`delay-1 ${isVisible('inquiry-left') ? 'animate-fade-left' : ''}`}>{getText('We will get back to you within 24–48 hours.', 'Wir melden uns innerhalb von 24–48 Stunden bei Ihnen.')}</p>
          <p className={`delay-2 ${isVisible('inquiry-left') ? 'animate-fade-left' : ''}`}>Email: <strong>service@fionaconsult.de</strong></p>
        </div>
        <form onSubmit={handleInquirySubmit} data-animate id="inquiry-form">
          <input
            type="text"
            placeholder={getText('Subject', 'Betreff')}
            value={inquiryForm.subject}
            onChange={(e) => setInquiryForm({...inquiryForm, subject: e.target.value})}
            required
            className={`${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}
          />
          <input
            type="email"
            placeholder={getText('Your email', 'Ihre E-Mail')}
            value={inquiryForm.email}
            onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
            required
            className={`delay-1 ${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}
          />
          <textarea
            placeholder={getText('Your message', 'Ihre Nachricht')}
            value={inquiryForm.message}
            onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
            required
            className={`delay-2 ${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}
          ></textarea>
          <button type="submit" disabled={inquiryStatus === 'sending'} className={`delay-3 ${isVisible('inquiry-form') ? 'animate-fade-right' : ''}`}>
            {inquiryStatus === 'sending' ? getText('Sending...', 'Wird gesendet...') : inquiryStatus === 'success' ? getText('✓ Sent', '✓ Versendet') : getText('Submit', 'Senden')}
          </button>
        </form>
      </section>

      <section className="section" id="join" data-animate>
        <div className={`join-box ${isVisible('join') ? 'animate-scale' : ''}`} data-animate id="join">
          <h2>{getText('Join', 'Beitreten')}</h2>
          <form onSubmit={handleJoinSubmit}>
            <input
              type="text"
              placeholder={getText('Full name', 'Vollständiger Name')}
              value={joinForm.name}
              onChange={(e) => setJoinForm({...joinForm, name: e.target.value})}
              required
              className={`${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <input
              type="email"
              placeholder={getText('Email', 'E-Mail')}
              value={joinForm.email}
              onChange={(e) => setJoinForm({...joinForm, email: e.target.value})}
              required
              className={`delay-1 ${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <input
              type="text"
              placeholder={getText('Company', 'Unternehmen')}
              value={joinForm.company}
              onChange={(e) => setJoinForm({...joinForm, company: e.target.value})}
              required
              className={`delay-2 ${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <input
              type="password"
              placeholder={getText('Password', 'Passwort')}
              value={joinForm.password}
              onChange={(e) => setJoinForm({...joinForm, password: e.target.value})}
              required
              className={`delay-3 ${isVisible('join') ? 'animate-fade-up' : ''}`}
            />
            <button type="submit" disabled={joinStatus === 'sending'} className={`delay-4 ${isVisible('join') ? 'animate-fade-up' : ''}`}>
              {joinStatus === 'sending' ? getText('Creating...', 'Wird erstellt...') : joinStatus === 'success' ? getText('✓ Created', '✓ Erstellt') : getText('Create account', 'Konto erstellen')}
            </button>
          </form>
        </div>
      </section>

      <footer>
        © 2026 <strong>FIONACONSULT</strong><br/>
        email: service@fionaconsult.de
      </footer>
    </div>
  );
}
