import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center py-12">
          <h1 className="text-5xl font-bold mb-4">FIONAMIAO CONSULTING</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Independent strategy and operations consulting, supporting organizations with
            decision-making, execution, and organizational clarity.
          </p>
        </section>

        {/* Services Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How We Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Workshop & Strategy</h3>
              <p className="text-gray-700">
                We work closely with founders and leadership teams to address complex strategic
                and operational challenges.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Operations & Execution</h3>
              <p className="text-gray-700">
                Focus on business strategy, operations optimization, market analysis, and
                decision support with practical outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/insights" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Learn More
            </Link>
            <Link href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50">
              Contact Us
            </Link>
            <Link href="/pricing" className="border border-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-50">
              View Pricing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
