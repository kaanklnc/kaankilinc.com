import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-10 leading-[1.3] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            Kaan Kılınç
          </h1>
          <div className="text-xl md:text-2xl text-gray-300  mb-6 ">
            <span className="inline-block">Frontend Developer</span>
            <span className="mx-2 text-cyan-400">•</span>
            <span className="inline-block">React Native Deneyimlisi</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Modern teknolojilerle yenilikçi dijital deneyimler yaratıyorum.
            React, React Native ve modern web geliştirme konularında uzmanım.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/kaanklnc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110"
          >
            <Github size={24} className="text-cyan-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaan-k%C4%B1l%C4%B1n%C3%A7-539b21290/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110"
          >
            <Linkedin size={24} className="text-cyan-400" />
          </a>
          <a
            href="mailto:kaanklncdevelopment@gmail.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-110"
          >
            <Mail size={24} className="text-cyan-400" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:scale-105"
          >
            Projelerimi Gör
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-cyan-500 rounded-full text-cyan-400 font-medium hover:bg-cyan-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            İletişime Geç
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;