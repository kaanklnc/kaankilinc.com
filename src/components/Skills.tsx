import React, { useEffect, useState, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React', level: 95, color: 'from-cyan-400 to-blue-500' },
    { name: 'React Native', level: 90, color: 'from-purple-400 to-pink-500' },
    { name: 'TypeScript', level: 88, color: 'from-green-400 to-emerald-500' },
    { name: 'Node.js', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'Firebase', level: 82, color: 'from-indigo-400 to-purple-500' },
    { name: 'Tailwind CSS', level: 88, color: 'from-red-400 to-pink-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Yetenekler & Deneyim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 200}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sürekli öğreniyor ve yeni teknolojilere adapte oluyorum. Web ve mobil geliştirmede mümkün olanın 
            sınırlarını zorlayan zorlu projeleri üstlenmeye her zaman hazırım.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;