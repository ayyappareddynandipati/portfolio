
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const socialLinks = [
    { icon: 'ri-github-line', href: 'https://github.com/ayyappareddynandipati', label: 'GitHub' },
    { icon: 'ri-linkedin-line', href: 'https://www.linkedin.com/in/ayyappareddynandipati/', label: 'LinkedIn' },
    { icon: 'ri-mail-line', href: 'mailto:ayyappareddynandipati@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              DevPortfolio
            </div>
            <p className="text-gray-300 mb-6">
              Creating digital experiences that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                      target="_blank" // 👈 open in new tab
    rel="noopener noreferrer" // 👈 secure external link
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  title={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <i className="ri-mail-line mr-3 text-blue-400"></i>
                <span>ayyappareddynandipati@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-phone-line mr-3 text-blue-400"></i>
                <span>+91 76720 53063</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="ri-map-pin-line mr-3 text-blue-400"></i>
                <span>Piduguralla , Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
<p className="text-gray-400 font-bold">
  © {currentYear} Ayyappa Reddy. All rights reserved.
</p>

        </div>
      </div>
    </footer>
  );
}
