import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Insights() {
  const services = [
    'Business strategy and planning',
    'Operations and process optimization',
    'Market and competitive analysis',
    'Execution and decision support',
  ];

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Insights & Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            We work closely with founders and leadership teams to address complex strategic
            and operational challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <p className="text-lg text-gray-700 mt-1">{service}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed">
              Our advisory approach emphasizes clarity, independence, and practical execution.
              Engagements are independent, confidential, and tailored to each client's specific
              context. We focus on delivering actionable insights and sustainable solutions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
