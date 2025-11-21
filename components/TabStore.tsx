
import React, { useState } from 'react';
import { TEXTBOOK_INFO, TEXTBOOK_CURRICULUM, SOCIAL_LINKS } from '../constants';

const TabStore: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.address) {
      setIsSubmitted(true);
      console.log("New Order:", formState);
    }
  };

  const generateEmailContent = () => {
    const subject = `[교재 구매 신청] ${formState.name}님 주문서`;
    const body = `
[기타치는욱이 교재 구매 신청서]

1. 성함: ${formState.name}
2. 연락처: ${formState.phone}
3. 배송지 주소: ${formState.address}
4. 주문 내용: ${TEXTBOOK_INFO.title} (1권)
5. 입금 예정 금액: ${(TEXTBOOK_INFO.price + TEXTBOOK_INFO.shipping).toLocaleString()}원

--------------------------------------------------
* 위 내용은 자동으로 작성되었습니다.
* [보내기] 버튼을 눌러 메일을 전송해 주셔야 접수가 완료됩니다.
* 입금 확인 후 순차적으로 발송해 드립니다.
    `;
    return { subject, body };
  };

  const handleSendGmail = () => {
    const { subject, body } = generateEmailContent();
    // Gmail Web compose URL using specific parameters
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SOCIAL_LINKS.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleCopyAccount = () => {
     navigator.clipboard.writeText(TEXTBOOK_INFO.accountNumber).then(() => {
       alert("계좌번호가 복사되었습니다!");
     });
  };

  return (
    <section id="textbook" className="py-24 bg-brand-charcoal relative overflow-hidden scroll-mt-20">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            기타치는욱이 공식 교재
          </h2>
          <p className="text-gray-400 text-lg">
            평생 기타를 즐길 수 있는 가장 확실한 방법.<br/>
            청음기타의 기초부터 응용까지 한 권에 담았습니다.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Book Info & Curriculum */}
          <div className="space-y-8">
            {/* Book Cover Visualization (CSS based to match the provided image) */}
            <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="relative w-[300px] aspect-[1/1.4] bg-[#323a70] shadow-[10px_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center p-6 transition-transform duration-500 group-hover:scale-105 border border-white/10">
                  {/* Border Box */}
                  <div className="absolute inset-2 border border-white/30"></div>
                  
                  {/* Top Text */}
                  <div className="mt-6 text-white text-lg font-medium tracking-wide mb-2">
                    초보자를 위한
                  </div>
                  
                  {/* Main Title */}
                  <h3 className="text-4xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                    청음기타<br/>독학법
                  </h3>
                  
                  {/* Subtitle */}
                  <div className="text-white/90 text-xs font-light mt-auto mb-8 px-2 leading-relaxed">
                    쉽고 간단하지만 평생기타를<br/>즐길 수 있는 확실한 방법
                  </div>
                  
                  {/* Author Image Placeholder/Icon & Name */}
                  <div className="mb-6">
                    <div className="text-white font-bold text-sm">기타치는욱이</div>
                  </div>
               </div>
               
               <div className="mt-8 text-center">
                 <h3 className="text-2xl font-bold text-white mb-2">{TEXTBOOK_INFO.title}</h3>
                 <div className="flex justify-center items-center gap-4 mt-2">
                    <span className="px-3 py-1 bg-brand-gold text-brand-dark font-bold text-sm rounded-full">BEST SELLER</span>
                    <span className="text-2xl font-bold text-brand-gold">
                      {TEXTBOOK_INFO.price.toLocaleString()}원
                    </span>
                 </div>
               </div>
            </div>

            {/* Curriculum List */}
            <div className="bg-brand-dark/50 rounded-2xl p-8 border border-white/5">
              <h4 className="text-xl font-serif font-bold text-white mb-6 flex items-center">
                <svg className="w-5 h-5 text-brand-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                교재 순서 (Curriculum)
              </h4>
              <ul className="space-y-3">
                {TEXTBOOK_CURRICULUM.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm hover:text-brand-gold transition-colors">
                    <span className="mr-2 mt-1 w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Purchase Form */}
          <div className="bg-brand-dark rounded-2xl p-8 border border-white/5 shadow-xl sticky top-32">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 border-l-4 border-brand-gold pl-4">
                  교재 구매 신청서
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  아래 정보를 입력해주시면 입금 계좌와 결제 정보를 안내해 드립니다.<br/>
                  입력하신 정보는 <strong>비밀 댓글</strong> 형태로 처리됩니다.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">성함</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-600"
                      placeholder="입금자명과 동일하게 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">연락처</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-600"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-400 mb-2">배송지 주소</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formState.address}
                      onChange={handleInputChange}
                      className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all placeholder-gray-600"
                      placeholder="도로명 주소를 입력해주세요"
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-brand-gold/20"
                    >
                      신청하고 계좌 정보 확인하기
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="animate-fade-in-up">
                <div className="bg-brand-charcoal/50 border border-brand-gold/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🔒</span>
                    <h3 className="text-lg font-bold text-brand-gold">비밀 답글 (구매 안내)</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                    <p>
                      안녕하세요, <span className="text-white font-bold">{formState.name}</span>님! <br/>
                      <strong>&lt;{TEXTBOOK_INFO.title}&gt;</strong> 구매 신청 감사합니다.
                    </p>
                    <p>
                      아래 계좌로 입금해 주시면 확인 후<br/>
                      <span className="text-white font-bold underline decoration-brand-gold/50">{formState.address}</span> (으)로 발송해 드리겠습니다.
                    </p>
                    
                    <div className="bg-brand-dark p-5 rounded-lg border border-white/10 my-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-full -mr-10 -mt-10"></div>
                      
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-400">은행</span>
                        <span className="text-white font-medium">{TEXTBOOK_INFO.bankName}</span>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-400">계좌번호</span>
                        <div className="flex items-center gap-2">
                          <span className="text-brand-gold font-mono font-bold tracking-wide text-lg">{TEXTBOOK_INFO.accountNumber}</span>
                          <button onClick={handleCopyAccount} className="text-gray-500 hover:text-white p-1 rounded transition-colors" title="계좌번호 복사">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between mb-3">
                        <span className="text-gray-400">예금주</span>
                        <span className="text-white font-medium">{TEXTBOOK_INFO.accountHolder}</span>
                      </div>
                      <div className="h-px bg-white/10 my-3"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">총 입금금액</span>
                        <span className="text-2xl font-bold text-white">
                          {(TEXTBOOK_INFO.price + TEXTBOOK_INFO.shipping).toLocaleString()}원
                        </span>
                      </div>
                      <div className="text-right text-xs text-gray-500 mt-1">
                        (교재비 {TEXTBOOK_INFO.price.toLocaleString()} + 배송비 {TEXTBOOK_INFO.shipping.toLocaleString()})
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 p-4 rounded text-red-200 text-xs font-bold flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <span className="text-lg">⚠️</span>
                        <span>주문이 아직 완료되지 않았습니다!</span>
                      </div>
                      <p className="pl-6 font-normal text-gray-300">
                        아래 <strong>[주문서 이메일로 보내기]</strong> 버튼을 눌러 메일을 보내주셔야만<br/>
                        판매자에게 주문 정보가 전달됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-6">
                  <button
                    onClick={handleSendGmail}
                    className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-lg hover:bg-white transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 text-base"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                    주문서 이메일로 보내기 (Gmail)
                  </button>
                </div>
                
                <div className="text-center">
                   <a 
                      href={SOCIAL_LINKS.band}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 border border-brand-gold text-brand-gold rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all font-medium text-sm"
                    >
                      네이버 밴드 방문하기
                    </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabStore;
