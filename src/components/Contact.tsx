import React, { useState } from 'react';
import { Send, Terminal, User, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate terminal typing effect
    const commands = [
      '> Bağlantı başlatılıyor...',
      '> Giriş verileri doğrulanıyor...',
      '> Mesaj şifreleniyor...',
      '> Kaan Kılınç\'a gönderiliyor...',
      '> Mesaj başarıyla gönderildi!',
      '> İletişime geçtiğiniz için teşekkürler.',
    ];
    
    for (let i = 0; i < commands.length; i++) {
      setTimeout(() => {
        setTerminalText(prev => prev + commands[i] + '\n');
      }, i * 800);
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      setTerminalText('');
      setFormData({ name: '', email: '', message: '' });
    }, commands.length * 800 + 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            İletişime Geçin
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Bir sonraki projenizi başlatmaya hazır mısınız? Bağlantı kuralım ve fikirlerinizi nasıl hayata geçirebileceğimizi konuşalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Terminal className="mr-3 text-cyan-400" size={24} />
                İşbirliği Yapalım
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Üniversite öğrencisi olarak her zaman yeni fırsatlar ve heyecan verici projelerle ilgileniyorum. 
                Mobil uygulama, web uygulaması veya teknik danışmanlığa ihtiyacınız olsun, 
                sizden haber almayı çok isterim.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-gray-300">kaanklncdevelopment@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Proje işbirlikleri için uygun</span>
                </div>
              </div>
            </div>

            {terminalText && (
              <div className="p-6 bg-black border border-green-500/30 rounded-xl font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-400 ml-2">Terminal</span>
                </div>
                <pre className="text-green-400 whitespace-pre-wrap">{terminalText}</pre>
                <div className="flex items-center mt-2">
                  <span className="text-green-400">$</span>
                  <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <User size={16} className="inline mr-2" />
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Adınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="eposta@ornek.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                  placeholder="Projeniz hakkında bana anlatın..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    İşleniyor...
                  </div>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;