'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          FIONAMIAO CONSULTING
        </Link>
        <ul className="flex gap-6 items-center text-sm">
          <li><Link href="/insights" className="hover:text-blue-600">Insights</Link></li>
          <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Feedback</Link></li>
          <li><Link href="/join" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Join</Link></li>
        </ul>
      </nav>
    </header>
  );
}
