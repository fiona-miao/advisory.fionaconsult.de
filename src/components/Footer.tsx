export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700">
          <p>© {currentYear} FIONACONSULT</p>
          <p>
            <span data-en="Email:" data-de="E-Mail:">Email:</span>{' '}
            <a href="mailto:service@fionaconsult.de" className="text-purple-600 hover:underline font-semibold">
              service@fionaconsult.de
            </a>
          </p>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          <p data-en="© FionaConsult. All rights reserved." data-de="© FionaConsult. Alle Rechte vorbehalten.">
            © FionaConsult. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
