
import { useState } from 'react';
import Button from '../../../components/base/Button';
import universityITIssues from '../../../Images/projects/trackmyissue.png';
import resuimyimage from '../../../Images/projects/resumifyimg.png';
import img2048 from '../../../Images/projects/2048.png';
import imgtrendora from '../../../Images/projects/Trendora.png';
import imgbikekart from '../../../Images/projects/bikekart-banner.webp';
import imgportfolio from '../../../Images/projects/portfolioimage.png';


export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full Stack', 'ServiceNow'];

  const projects = [
    {
      id: 1,
      title: 'Resumify ( Under Development )',
      description: 'AI-powered resume analyzer with ATS-based scoring, skill match, improvement tips, and JD-specific question generation using OpenAI.',
      image: resuimyimage,
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'Express.js' , 'MongoDB'],
      liveUrl: '',
      githubUrl: ''
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern React portfolio with Home, About, Projects, Experience, Certifications, and Skills designed for performance and clean UI.',
      image: imgportfolio,
      category: 'Frontend',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ayyappareddy.netlify.app/',
      githubUrl: 'https://github.com/ayyappareddynandipati/Portfolio'
    },
    {
      id: 3,
      title: 'Trendora',
      description: 'Responsive fashion store built with HTML, CSS, and JavaScript — combining modern UI with smooth shopping experience.',
      image: imgtrendora,
      category: 'Frontend',
      technologies: ['HTML','CSS','Javascript','Vercel'],
      liveUrl: 'https://trendorafs.vercel.app/',
      githubUrl: 'https://github.com/ayyappareddynandipati/Trendora-frontend'
    },
    {
      id: 4,
      title: 'Bikekart',
      description: 'A stylish bike showroom web app featuring dynamic sections, responsive design, and an engaging user experience.',
      image: imgbikekart,
      category: 'Frontend',
      technologies: ['HTML','CSS','Javascript','Vercel'],
      liveUrl: 'https://bikekart.vercel.app/',
      githubUrl: 'https://github.com/ayyappareddynandipati/BikeKart'
    },
    {
      id: 5,
      title: 'Game 2048',
      description: 'Merge numbers, strategize moves, and reach the legendary 2048 tile. Simple to play, hard to master – a perfect blend of logic and fun!',
      image: img2048,
      category: 'Frontend',
      technologies: ['HTML','CSS','Javascript','Vercel'],
      liveUrl: 'https://2048-sage-sigma.vercel.app/',
      githubUrl: 'https://github.com/ayyappareddynandipati/2048-game'
    },
    {
      id: 6,
      title: 'Track My Issue',
      description: 'Simulated a real-time campus IT helpdesk using ServiceNow, showcasing core ITSM workflows, automation, and visual dashboards',
      image: universityITIssues,
      category: 'ServiceNow',
      technologies: ['ITSM', 'Visual Task Boards', 'Virtual Agent'],
      liveUrl: '',
      githubUrl: 'https://github.com/ayyappareddynandipati/track-my-issue-servicenow'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    disabled={!project.liveUrl}
                    className={`flex-1 flex items-center justify-center px-4 py-2 ${
                      project.liveUrl ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
                    } text-white rounded-lg transition-colors whitespace-nowrap`}
                    onClick={() => {
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Live Demo
                  </button>
                  <button
                    disabled={!project.githubUrl}
                    onClick={() => {
                      if (project.githubUrl) {
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className={`flex items-center justify-center px-4 py-2 border-2 rounded-lg transition-colors whitespace-nowrap ${
                      project.githubUrl
                        ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 cursor-pointer'
                        : 'border-gray-300 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <i className="ri-github-line text-lg"></i>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/ayyappareddynandipati', '_blank', 'noopener,noreferrer')}
          >
            <i className="ri-github-line mr-2"></i>
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
