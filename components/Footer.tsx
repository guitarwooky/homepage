
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="text-2xl font-serif font-bold text-brand-gold tracking-wider">
            기타치는욱이
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8">
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            YouTube
          </a>
          <a href={SOCIAL_LINKS.band} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
            <span className="font-bold bg-gray-400 text-brand-dark rounded w-5 h-5 flex items-center justify-center text-xs hover:bg-brand-gold transition-colors">B</span>
            Naver Band
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 hover:text-brand-gold transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {SOCIAL_LINKS.email}
          </a>
        </div>
        
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} 기타치는욱이. All rights reserved. <br/>
          음악은 인류의 보편적인 언어입니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;