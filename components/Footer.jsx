export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">PRISM</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pancreatic Mixed Reality Innovation for Surgical Management. 
              Advancing surgical precision through AI and mixed reality.
            </p>
            <p className="text-sm text-gray-500">
              Conrad Challenge 2025 Innovation Stage
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="/prism" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Inside PRISM
                </a>
              </li>
              <li>
                <a href="/support" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <p className="text-gray-600 mb-3 text-sm">
              Questions or partnership inquiries?
            </p>
            <a 
              href="mailto:diyaramakrishnan009@gmail.com" 
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors text-sm break-all"
            >
              diyaramakrishnan009@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PRISM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}