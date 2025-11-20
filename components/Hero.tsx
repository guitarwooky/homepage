import React from 'react';

const Hero: React.FC = () => {
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/acousticguitar/1920/1080"
          alt="Guitar Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 mb-6 border border-brand-gold/50 rounded-full animate-fade-in-up">
           <span className="text-brand-gold text-sm tracking-widest uppercase font-semibold">
             YouTube @wookiguitar
           </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl animate-fade-in-up delay-100">
          손끝에서 피어나는 <br />
          <span className="italic text-brand-gold/90">감성 핑거스타일</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          안녕하세요, <strong>기타치는욱이</strong>입니다. <br className="hidden md:block" />
          좋아하는 노래를 기타 한 대로 표현하는 즐거움을 나눕니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#videos"
            onClick={(e) => handleScrollTo(e, 'videos')}
            className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-brand-gold/50 cursor-pointer"
          >
            최신 영상 보기
          </a>
          <a
            href="#textbook"
            onClick={(e) => handleScrollTo(e, 'textbook')}
            className="px-8 py-4 border border-white text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            교재 구매하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;