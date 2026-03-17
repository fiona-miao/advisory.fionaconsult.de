import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';

export default function Pricing() {
  const plans = [
    { title: 'Basic', price: 15 },
    { title: 'Standard', price: 25 },
    { title: 'Premium', price: 30 },
  ];

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <h1 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include access to our
            advisory services and support.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <PricingCard key={plan.title} title={plan.title} price={plan.price} />
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Solutions</h2>
            <p className="text-gray-700 mb-6">
              For larger projects or custom requirements, we offer tailored solutions.
              Contact us to discuss your specific needs.
            </p>
            <a
              href="mailto:service@fionaconsult.de"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Request Custom Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
