import Profile from '../../../Images/desktop.jpg';

export default function AboutSection() {
  const stats = [
    { number: '1', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' }
  ];

  const skillCategories = [
    {
      title: 'Web Development',
      icon: 'ri-global-line',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      skills: ['HTML5' , 'CSS3', 'JavaScript (ES6+)', 'React.js']
    },
    {
      title: 'Programming Languages',
      icon: 'ri-code-line',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700',
      skills: ['C', 'C++', 'Java', 'Python']
    },
    {
      title: 'Tools & Platforms',
      icon: 'ri-tools-line',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700',
      skills: ['Git', 'GitHub', 'VS Code', 'ServiceNow','Automation']
    },
    {
      title: 'Computer Science Fundamentals',
      icon: 'ri-brain-line',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Operating Systems Basics', 'Networking Fundamentals','SQL'] //, 'DBMS Concepts'
    }
  ];

  const workExperience = [
    {
      position: 'Frontend Developer',
      company: 'Micro Information Technology Services',
      period: 'May 2025  - June 2025',
      description: 'Built responsive websites using HTML, CSS, JS, and React for the diverse client needs. Focused on performance and modern UI.'
    },
    {
      position: 'Java Developer',
      company: 'Technical Hub',
      period: 'Aug 2024 - Dec 2024',
      description: 'Built Java applications using OOP, control structures, arrays, inheritance, and interfaces. Developed reusable modules and handled strings and exceptions.'
    },
    {
      position: 'Frontend Developer',
      company: 'Edunet Foundation',
      period: 'June 2024 - July 2024',
      description: 'Designed responsive web interfaces using HTML, CSS, and JavaScript. Collaborated via Git & GitHub to deploy user-friendly projects.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Aditya Engineering College',
      period: '2022 – 2026',
      details: 'Pursuing B.Tech with a strong foundation in Web Development, Data Structures, Algorithms, and Software Engineering. Actively involved in tech clubs and hands-on projects.'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'NRI Junior College',
      period: '2020 – 2022',
      details: 'Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC stream). Built strong analytical and problem-solving skills.'
    },
    {
      degree: 'Secondary Education (Class 10)',
      institution: 'Scholars School',
      period: '2019 - 2020',
      details: 'Completed Class 10 with strong academic performance, focusing on core subjects like Science, Mathematics, and English.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Web & ServiceNow Dev building clean, user-first solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src = {Profile}
              alt="Developer Workspace"
              className="w-full rounded-2xl shadow-2xl object-cover object-top"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Creating Digital Solutions That Matter
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a dedicated Frontend Developer with practical experience gained through internships, where I crafted responsive, user-centric websites using HTML, CSS, JavaScript, and React. I thrive on turning ideas into clean, efficient, and visually engaging web solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Outside of coding, I enjoy exploring emerging technologies, contributing to open-source, and sharing insights with the developer community. I believe in writing maintainable code and keeping pace with modern trends.
           <br /><br />
            I'm also diving into ServiceNow development, aiming to build smart automation and workflow solutions for enterprises. I value teamwork, continuous learning, and pushing the boundaries of what web technologies can do.
            </p>

          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            🛠️ Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 flex items-center justify-center ${category.color} mr-4`}>
                    <i className={`${category.icon} text-2xl`}></i>
                  </div>
                  <h4 className={`text-xl font-bold ${category.color}`}>
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm"
                    >
                      <div className={`w-2 h-2 ${category.color.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Experience and Education Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <i className="ri-briefcase-line text-blue-600 mr-3"></i>
              Work Experience
            </h3>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.position}</h4>
                    <div className="flex items-center text-blue-600 font-medium mb-2">
                      <i className="ri-building-line mr-2"></i>
                      {job.company}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <i className="ri-calendar-line mr-2"></i>
                      {job.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <i className="ri-graduation-cap-line text-purple-600 mr-3"></i>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <div className="flex items-center text-purple-600 font-medium mb-2">
                      <i className="ri-school-line mr-2"></i>
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                      <i className="ri-calendar-line mr-2"></i>
                      {edu.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
