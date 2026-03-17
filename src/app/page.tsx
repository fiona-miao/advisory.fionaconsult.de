'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentLang, setCurrentLang] = useState('EN');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Initialize language from localStorage
    const savedLang = localStorage.getItem('currentLang') || 'EN';
    setCurrentLang(savedLang);
    applyLanguage(savedLang);
  }, []);

  const applyLanguage = (lang: string) => {
    const elements = document.querySelectorAll('[data-en][data-de]');
    elements.forEach(el => {
      const enText = el.getAttribute('data-en');
      const deText = el.getAttribute('data-de');
      if (lang === 'EN') {
        el.textContent = enText;
      } else {
        el.textContent = deText;
      }
    });
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="mb-16 text-center py-16 bg-gradient-to-r from-purple-100 to-pink-100">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            <span data-en="FIONACONSULT" data-de="FIONACONSULT">FIONACONSULT</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            <span data-en="Independent strategy and operations consulting, supporting organizations with decision-making, execution, and organizational clarity." data-de="Unabhängige Strategie- und Betriebsberatung, die Organisationen bei der Entscheidungsfindung, Umsetzung und organisatorischen Klarheit unterstützt.">
              Independent strategy and operations consulting, supporting organizations with decision-making, execution, and organizational clarity.
            </span>
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Preview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              <span data-en="How We Help" data-de="Wie wir helfen">How We Help</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  <span data-en="Workshop & Strategy" data-de="Workshop & Strategie">Workshop & Strategy</span>
                </h3>
                <p className="text-gray-700">
                  <span data-en="We work closely with founders and leadership teams to address complex strategic and operational challenges." data-de="Wir arbeiten eng mit Gründern und Führungsteams zusammen, um komplexe strategische und operative Herausforderungen zu bewältigen.">
                    We work closely with founders and leadership teams to address complex strategic and operational challenges.
                  </span>
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  <span data-en="Operations & Execution" data-de="Betrieb & Umsetzung">Operations & Execution</span>
                </h3>
                <p className="text-gray-700">
                  <span data-en="Focus on business strategy, operations optimization, market analysis, and decision support with practical outcomes." data-de="Konzentration auf Geschäftsstrategie, Betriebsoptimierung, Marktanalyse und Entscheidungsunterstützung mit praktischen Ergebnissen.">
                    Focus on business strategy, operations optimization, market analysis, and decision support with practical outcomes.
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              <span data-en="Pricing" data-de="Preisgestaltung">Pricing</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border-2 border-purple-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  <span data-en="Basic" data-de="Basis">Basic</span>
                </h3>
                <p className="text-3xl font-bold mb-4 text-purple-600">$2,000</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li><span data-en="✓ 5 hours consultation" data-de="✓ 5 Stunden Beratung">✓ 5 hours consultation</span></li>
                  <li><span data-en="✓ Strategy session" data-de="✓ Strategiesitzung">✓ Strategy session</span></li>
                  <li><span data-en="✓ Email support" data-de="✓ E-Mail-Unterstützung">✓ Email support</span></li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                  <span data-en="Get Started" data-de="Jetzt starten">Get Started</span>
                </button>
              </div>
              <div className="p-6 border-2 border-purple-600 rounded-lg bg-purple-50">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  <span data-en="Professional" data-de="Professionell">Professional</span>
                </h3>
                <p className="text-3xl font-bold mb-4 text-purple-600">$5,000</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li><span data-en="✓ 15 hours consultation" data-de="✓ 15 Stunden Beratung">✓ 15 hours consultation</span></li>
                  <li><span data-en="✓ Full strategy & execution" data-de="✓ Vollständige Strategie & Umsetzung">✓ Full strategy & execution</span></li>
                  <li><span data-en="✓ Monthly check-ins" data-de="✓ Monatliche Kontrollen">✓ Monthly check-ins</span></li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                  <span data-en="Get Started" data-de="Jetzt starten">Get Started</span>
                </button>
              </div>
              <div className="p-6 border-2 border-purple-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  <span data-en="Enterprise" data-de="Unternehmen">Enterprise</span>
                </h3>
                <p className="text-3xl font-bold mb-4 text-purple-600"><span data-en="Custom" data-de="Benutzerdefiniert">Custom</span></p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li><span data-en="✓ Unlimited consultation" data-de="✓ Unbegrenzte Beratung">✓ Unlimited consultation</span></li>
                  <li><span data-en="✓ Custom solutions" data-de="✓ Maßgeschneiderte Lösungen">✓ Custom solutions</span></li>
                  <li><span data-en="✓ Dedicated support" data-de="✓ Dedizierte Unterstützung">✓ Dedicated support</span></li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                  <span data-en="Contact Us" data-de="Kontaktieren Sie uns">Contact Us</span>
                </button>
              </div>
            </div>
          </section>

          {/* Inquiry Section */}
          <section className="mb-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              <span data-en="Get Your Free Consultation" data-de="Holen Sie sich Ihre kostenlose Beratung">Get Your Free Consultation</span>
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="p-3 border border-gray-300 rounded"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="p-3 border border-gray-300 rounded"
                />
              </div>
              <textarea 
                placeholder="Tell us about your challenge..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
              <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 font-semibold">
                <span data-en="Send Inquiry" data-de="Anfrage senden">Send Inquiry</span>
              </button>
            </form>
          </section>

          {/* Join Section */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              <span data-en="Join Our Team" data-de="Treten Sie unserem Team bei">Join Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              <span data-en="We are looking for talented consultants to join our team and help organizations achieve their goals." data-de="Wir suchen nach talentierten Beratern, die unserem Team beitreten und Organisationen bei der Erreichung ihrer Ziele unterstützen.">
                We are looking for talented consultants to join our team and help organizations achieve their goals.
              </span>
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 font-semibold">
              <span data-en="Apply Now" data-de="Jetzt bewerben">Apply Now</span>
            </button>
          </section>

          {/* CTA Buttons */}
          <section className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              <span data-en="Ready to Get Started?" data-de="Bereit zum Starten?">Ready to Get Started?</span>
            </h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 font-semibold">
                <span data-en="Learn More" data-de="Mehr erfahren">Learn More</span>
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded hover:bg-purple-50 font-semibold">
                <span data-en="Contact Us" data-de="Kontaktieren Sie uns">Contact Us</span>
              </button>
              <button className="border-2 border-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-50 font-semibold">
                <span data-en="View Pricing" data-de="Preise ansehen">View Pricing</span>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
