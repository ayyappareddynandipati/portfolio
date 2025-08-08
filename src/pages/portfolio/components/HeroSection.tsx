
import Button from '../../../components/base/Button';
import Profile from '../../../Images/Profile.jpg';
import resume from '../../portfolio/components/Ayyappareddynandipati_Resume.pdf';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-20"
    >
      {/* Subtle pattern overlay for visual interest */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Updated heading with emojis */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;👋 Hi, I'm{'     '}&nbsp;
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               &nbsp;Ayyappa Reddy

              </span>{' '}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-semibold">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Stack Web Developer
            </h2>
            {/* Creative subtitle with emojis */}
            <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-4 font-medium">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Building clean UIs | Turning ideas into code
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I create beautiful, responsive websites and web applications that deliver 
              exceptional user experiences and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href = {resume}
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button variant="outline" size="lg">
              <i className="ri-download-line mr-2"></i>Resume
            </Button>
            </a>
            <Button onClick={() => scrollToSection('projects')} variant="outline" size="lg">
              <i className="ri-eye-line mr-2"></i>
              View My Work
            </Button>

              
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img 
                    src={Profile}
                    alt="Alex Johnson - Web Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-code-s-slash-line text-3xl text-blue-600"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce cursor-pointer"
          >
            <i className="ri-arrow-down-line text-2xl text-gray-600 dark:text-gray-400"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
