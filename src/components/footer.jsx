import { footerContent } from "../../public/footer-content"



export default function Footer({ language = "en" }) {
  const content = footerContent[language] || footerContent.en

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-semibold">Logoipsum</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">{content.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{content.quickLinks}</h3>
            <nav className="space-y-3">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {content.links.home}
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {content.links.aboutUs}
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {content.links.services}
              </a>
              <a href="/team" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {content.links.team}
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {content.links.contactUs}
              </a>
              <a href="/privacy" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {content.links.privacyPolicy}
              </a>
            </nav>
          </div>

          {/* Stay Updated */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{content.stayUpdated}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{content.stayUpdatedDesc}</p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={content.emailPlaceholder}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-sm whitespace-nowrap">
                  {content.subscribe}
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">{content.followUs}</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-bold">ig</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-bold">tw</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
