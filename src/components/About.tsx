import React from 'react';
import { Code, Smartphone, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Web Geliştirme',
      description: 'Modern framework\'lerle duyarlı ve etkileşimli web uygulamaları geliştiriyorum',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobil Geliştirme',
      description: 'React Native ile çapraz platform mobil uygulamalar geliştiriyorum',
    },
    {
      icon: <Globe size={32} />,
      title: 'Frontend Uzmanı',
      description: 'Modern frontend teknolojileri ile kullanıcı dostu arayüzler tasarlıyorum',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Üniversite 2. sınıf öğrencisi olarak React ve React Native geliştirme konularında deneyimli, tutkulu bir frontend geliştiricisiyim. 
              Tasarıma olan ilgim ve temiz, verimli kod yazma sevgimle hem güzel hem de işlevsel dijital 
              deneyimler yaratıyorum.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Eğitim hayatımla birlikte yazılım geliştirme yolculuğumda mobil uygulamalardan 
              web platformlarına kadar çeşitli projelerde çalıştım. Sürekli öğreniyor ve yeni 
              teknolojilere adapte olarak modern çözümler geliştiriyorum.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'React Native', 'TypeScript', 'Node.js', 'Firebase'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;