
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGrid from './components/VideoGrid';
import TabStore from './components/TabStore';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import { SOCIAL_LINKS } from './constants';

// Global style overrides for keyframes usually go in CSS, but since we are Tailwind only:
// We rely on Tailwind configuration or arbitrary values. 
// A fade-in animation is useful, so we'll assume standard tailwind utility or add a tiny style tag for custom animations if strictly needed,
// but here we will just use standard classes and a simple style tag for the specific keyframes to keep it contained.

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-light bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <VideoGrid />
        
        {/* About Section - Simple Layout */}
        <section id="about" className="py-24 bg-brand-charcoal border-y border-white/5 scroll-mt-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 w-full">
              {/* High quality Unsplash image for About section */}
              <img 
                src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?q=80&w=800&auto=format&fit=crop" 
                alt="Guitar Playing" 
                className="rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 hover:scale-[1.02] object-cover w-full h-auto aspect-[4/3] md:aspect-square"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                아티스트 <span className="text-brand-gold">기타치는욱이</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                반갑습니다. 유튜브 채널 <strong>@wookiguitar</strong>를 운영하고 있는 핑거스타일 기타리스트 <strong>기타치는욱이</strong>입니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                화려한 테크닉보다는 듣는 이의 마음에 닿는 편안한 연주를 지향합니다. 
                K-Pop, 드라마 OST, 그리고 숨겨진 명곡들을 기타 한 대로 재해석하여
                여러분께 들려드리고 있습니다.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                <strong>네이버 밴드</strong>를 통해 구독자 여러분과 더 가까이 소통하고 있습니다.
                악보 요청이나 기타 연주에 대한 궁금한 점이 있다면 언제든 밴드에 남겨주세요.
                음악으로 함께 이야기 나누기를 기대합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-brand-gold">Channel</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">Wooki Guitar</span>
                </div>
                <div className="w-px bg-white/20 h-12 mx-4 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-brand-gold">Community</span>
                  <a href={SOCIAL_LINKS.band} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 uppercase tracking-wider hover:text-brand-gold transition-colors">Naver Band &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Textbook Purchase Section (Formerly TabStore) */}
        <TabStore />
      </main>

      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default App;
