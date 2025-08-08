import JavaCertificate from '../../../Certificates/IT_Specialist_JAVA.pdf';
import PythonCertificate from '../../../Certificates/IT_Specialist_Python.pdf';
import CSACertificate from '../../../Certificates/ServiceNow_Certified_System_Administrator.pdf';
import CADCertificate from '../../../Certificates/ServiceNow_Certified_Application_Developer.pdf';
import HTMLCSSCertificate from '../../../Certificates/IT_Specialist_HTML_CSS.pdf';
import RHCSACertificate from '../../../Certificates/Red_Hat_Certified_System_Administrator.pdf';
import csaimg from '../../../Certificates/csa.png';
import cadimg from '../../../Certificates/cad.png';
import rhcsaimg from '../../../Certificates/rhcsa.png';

export default function CertificationsSection() {
  const certifications = [
    {
      name: 'ServiceNow Certified System Administrator',
      issuer: 'ServiceNow',
      date: '2025',
      credentialId: '27132584',
      image: csaimg,
      skills: ['User & Role Management' , 'Platform Configuration' , 'Process Automation' , 'ITSM Modules'],
      verifyLink : CSACertificate
    },
    {
      name: 'ServiceNow Certified Application Developer',
      issuer: 'ServiceNow',
      date: '2025',
      credentialId: '27159946',
      image: cadimg,
      skills: ['App Development', 'Scripted Automation', 'Custom UI Design', 'Data Modeling'],
      verifyLink : CADCertificate
    },
    {
      name: 'IT Specialist: HTML & CSS',
      issuer: 'Pearson VUE',
      date: '2023',
      credentialId: 'wXLHV-48eR',
      image: 'https://images.credly.com/size/680x680/images/e2dc688d-de61-44a5-81af-ee96f117a211/ITS-Badges_HTML-and-CSS_1200px.png',
      skills: ['Semantic HTML5', 'Advanced CSS Styling & Layouts' , 'Responsive Web Design', 'Cross-Browser Compatibility'],
      verifyLink : HTMLCSSCertificate
    },
    {
      name: 'IT Specialist: Java',
      issuer: 'Pearson VUE',
      date: '2025',
      credentialId: 'wLm4B-H9sk',
      //image: 'https://readdy.ai/api/search-image?query=MongoDB%20database%20developer%20certification%20badge%2C%20official%20MongoDB%20certification%20logo%2C%20NoSQL%20database%20credential%2C%20green%20and%20black%20colors%2C%20professional%20tech%20certificate&width=200&height=200&seq=mongo-cert&orientation=squarish',
      image: 'https://images.credly.com/size/680x680/images/2210b6fe-0eda-415a-8aba-6c1400566728/ITS-Badges_Java_1200px.png',
      skills: ['Core Syntax & Control', 'OOP: Classes & Interfaces', 'Exception Handling Basics', 'Strings & Array Manipulation'],
       verifyLink: JavaCertificate
    },
    {
      name: 'IT Specialist: Python',
      issuer: 'Pearson VUE',
      date: '2023',
      credentialId: '6uXE-DwV5',
      image: 'https://images.credly.com/images/3c4602d8-832e-4a24-b42d-00359ce746f7/ITS-Badges_Python_1200px.png',
      skills: ['Programming & Control' , 'Object Oriented Programming', 'Modules & Function', 'Exception Handling'],
      verifyLink : PythonCertificate
    },
    {
      name: 'RedHat Certified System Administrator',
      issuer: 'RedHat',
      date: '2024',
      credentialId: 'CKA-2023-890',
      image: rhcsaimg,
      skills: ['Linux Administration', 'Storage Management', 'Network Configuration', 'Red Hat Enterprise Linux'],
      verifyLink: RHCSACertificate
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in modern technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-2">
                  <i className="ri-building-line mr-2"></i>
                  <span className="font-medium">{cert.issuer}</span>
                </div>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <i className="ri-calendar-line mr-2"></i>
                  <span>{cert.date}</span>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded">
                  ID: {cert.credentialId}
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
              >
                <i className="ri-external-link-line mr-2"></i>
                Verify Credential
              </a>
            </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-full">
            <i className="ri-shield-check-line text-green-600 mr-3 text-xl"></i>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              All certifications are verified and up-to-date
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
