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
    <div className="min-h-screen" style={{
      backgroundImage: 'linear-gradient(rgba(128, 0, 128, 0.3), rgba(128, 0, 128, 0.3)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
            <span data-en="FIONACONSULT" data-de="FIONACONSULT">FIONACONSULT</span>
          </h1>
          <p className="text-2xl text-white drop-shadow-md mb-8 max-w-3xl mx-auto px-4">
            <span data-en="Independent strategy and operations consulting, supporting organizations with decision-making, execution, and organizational clarity." data-de="Unabhängige Strategie- und Betriebsberatung, die Organisationen bei der Entscheidungsfindung, Umsetzung und organisatorischen Klarheit unterstützt.">
              Independent strategy and operations consulting, supporting organizations with decision-making, execution, and organizational clarity.
            </span>
          </p>
        </section>

        {/* Content Container with Semi-transparent Background */}
        <div className="bg-white bg-opacity-90 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Services Section */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
                <span data-en="How We Help" data-de="Wie wir helfen">How We Help</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-purple-50 rounded-lg border-2 border-purple-200 shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-700">
                    <span data-en="Workshop & Strategy" data-de="Workshop & Strategie">Workshop & Strategy</span>
                  </h3>
                  <p className="text-gray-700 text-lg">
                    <span data-en="We work closely with founders and leadership teams to address complex strategic and operational challenges." data-de="Wir arbeiten eng mit Gründern und Führungsteams zusammen, um komplexe strategische und operative Herausforderungen zu bewältigen.">
                      We work closely with founders and leadership teams to address complex strategic and operational challenges.
                    </span>
                  </p>
                </div>
                <div className="p-8 bg-purple-50 rounded-lg border-2 border-purple-200 shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-700">
                    <span data-en="Operations & Execution" data-de="Betrieb & Umsetzung">Operations & Execution</span>
                  </h3>
                  <p className="text-gray-700 text-lg">
                    <span data-en="Focus on business strategy, operations optimization, market analysis, and decision support with practical outcomes." data-de="Konzentration auf Geschäftsstrategie, Betriebsoptimierung, Marktanalyse und Entscheidungsunterstützung mit praktischen Ergebnissen.">
                      Focus on business strategy, operations optimization, market analysis, and decision support with practical outcomes.
                    </span>
                  </p>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
                <span data-en="Pricing" data-de="Preisgestaltung">Pricing</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 border-3 border-purple-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                    <span data-en="Basic" data-de="Basis">Basic</span>
                  </h3>
                  <p className="text-4xl font-bold mb-6 text-purple-600">
                    <span data-en="€5/month" data-de="€5/Monat">€5/month</span>
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Basic consultation" data-de="Grundlegende Beratung">Basic consultation</span></li>
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Strategy insights" data-de="Strategische Einblicke">Strategy insights</span></li>
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Email support" data-de="E-Mail-Unterstützung">Email support</span></li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold transition-colors">
                    <span data-en="Get Started" data-de="Jetzt starten">Get Started</span>
                  </button>
                </div>
                <div className="p-8 border-3 border-purple-600 rounded-lg bg-purple-50 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                    <span data-en="Professional" data-de="Professionell">Professional</span>
                  </h3>
                  <p className="text-4xl font-bold mb-6 text-purple-600">
                    <span data-en="€8/month" data-de="€8/Monat">€8/month</span>
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Professional support" data-de="Professionelle Unterstützung">Professional support</span></li>
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Strategy & planning" data-de="Strategie & Planung">Strategy & planning</span></li>
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Priority response" data-de="Prioritätsantwort">Priority response</span></li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold transition-colors">
                    <span data-en="Get Started" data-de="Jetzt starten">Get Started</span>
                  </button>
                </div>
                <div className="p-8 border-3 border-purple-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                    <span data-en="Enterprise" data-de="Unternehmen">Enterprise</span>
                  </h3>
                  <p className="text-4xl font-bold mb-6 text-purple-600">
                    <span data-en="€12/month" data-de="€12/Monat">€12/month</span>
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8">
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Full access support" data-de="Vollständiger Zugriff">Full access support</span></li>
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Custom solutions" data-de="Maßgeschneiderte Lösungen">Custom solutions</span></li>
                    <li className="flex items-center"><span className="text-purple-600 font-bold mr-2">✓</span><span data-en="Dedicated expert" data-de="Dedizierter Experte">Dedicated expert</span></li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold transition-colors">
                    <span data-en="Contact Us" data-de="Kontaktieren Sie uns">Contact Us</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Submit an Inquiry Section */}
            <section className="mb-20 bg-white rounded-lg p-10 shadow-lg">
              <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
                <span data-en="Submit an Inquiry" data-de="Anfrage senden">Submit an Inquiry</span>
              </h2>
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name"
                    data-en="Name"
                    data-de="Name"
                    className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    data-en="Email"
                    data-de="E-Mail"
                    className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  />
                </div>
                <textarea 
                  placeholder="Tell us about your challenge..."
                  data-en="Tell us about your challenge..."
                  data-de="Erzählen Sie uns von Ihrer Herausforderung..."
                  rows={5}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                ></textarea>
                <div className="flex justify-center">
                  <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 font-semibold transition-colors text-lg">
                    <span data-en="Send Inquiry" data-de="Anfrage senden">Send Inquiry</span>
                  </button>
                </div>
              </form>
            </section>

            {/* Join Our Team Section */}
            <section className="mb-16 bg-white rounded-lg p-10 shadow-lg">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  <span data-en="Join Our Team" data-de="Treten Sie unserem Team bei">Join Our Team</span>
                </h2>
                <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                  <span data-en="We are looking for talented consultants to join our team and help organizations achieve their goals." data-de="Wir suchen nach talentierten Beratern, die unserem Team beitreten und Organisationen bei der Erreichung ihrer Ziele unterstützen.">
                    We are looking for talented consultants to join our team and help organizations achieve their goals.
                  </span>
                </p>
                <button className="bg-purple-600 text-white px-10 py-4 rounded-lg hover:bg-purple-700 font-semibold transition-colors text-lg">
                  <span data-en="Apply Now" data-de="Jetzt bewerben">Apply Now</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
