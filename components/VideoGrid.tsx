
import React, { useState, useEffect } from 'react';
import { FEATURED_VIDEOS } from '../constants';

const VideoGrid: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const openModal = (videoId: string) => {
    setActiveVideoId(videoId);
    document.body.style.overflow = 'hidden'; // 모달 오픈 시 배경 스크롤 방지
  };

  const closeModal = () => {
    setActiveVideoId(null);
    document.body.style.overflow = 'unset';
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="videos" className="py-24 bg-brand-dark relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              최신 연주 영상 (Latest Updates)
            </h2>
            <div className="h-1 w-20 bg-brand-gold"></div>
            <p className="mt-4 text-gray-400 text-sm">
              * <strong>기타치는욱이</strong> 채널에 업로드된 따끈따끈한 최신 연주들입니다.
            </p>
          </div>
          <a 
            href="https://www.youtube.com/@wookiguitar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-gold hover:text-white transition-colors mt-4 md:mt-0 flex items-center gap-2"
          >
            채널 방문하기 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_VIDEOS.map((video) => (
            <div 
              key={video.id}
              onClick={() => openModal(video.id)}
              className="group relative bg-brand-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-1 rounded text-white font-medium">
                  {video.date}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  {video.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  조회수 {video.views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in-up" onClick={closeModal}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&playsinline=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGrid;
