export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {currentYear} FIONAMIAO CONSULTING</p>
          <p>
            Email:{' '}
            <a href="mailto:service@fionaconsult.de" className="text-blue-600 hover:underline">
              service@fionaconsult.de
            </a>
          </p>
        </div>
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>DE (Language)</p>
        </div>
      </div>
    </footer>
  );
}
