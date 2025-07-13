import React from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Abu App',
      description: 'React Native ile geliştirilmiş kapsamlı bir mobil uygulama. Modern tasarım, kullanıcı dostu arayüz ve gelişmiş özelliklerle donatılmış.',
      tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      type: 'mobile',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Abu Assistant',
      description: 'Yapay zeka destekli asistan uygulaması. Kullanıcıların günlük işlerini kolaylaştıran akıllı özellikler ve sezgisel tasarım.',
      tech: ['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
      type: 'mobile',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern ve etkileşimli kişisel portföy websitesi. Gelişmiş animasyonlar, duyarlı tasarım ve çağdaş UI/UX prensipleri.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      type: 'web',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/kaanklnc',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Öne Çıkan Projeler
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            React ve React Native geliştirme alanındaki son çalışmalarımın sergilenmesi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  {project.type === 'mobile' ? (
                    <Smartphone size={24} className="text-cyan-400" />
                  ) : (
                    <Globe size={24} className="text-cyan-400" />
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;