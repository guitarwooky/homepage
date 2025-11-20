# 기타치는욱이 (Wooki Guitar) 공식 홈페이지

유튜브 채널 [기타치는욱이 (@wookiguitar)](https://www.youtube.com/@wookiguitar)의 공식 홈페이지 소스코드입니다.

## 프로젝트 소개
이 웹사이트는 React와 Tailwind CSS를 기반으로 제작되었으며, 다음과 같은 기능을 제공합니다:

- **홈 (Hero Section):** 브랜드 소개 및 바로가기
- **영상 (Video Grid):** 유튜브 최신/인기 연주 영상 큐레이션 (모달 플레이어 지원)
- **교재 구매 (Textbook):** '초보자를 위한 청음기타 독학법' 커리큘럼 소개 및 비밀 주문서 작성 기능
- **AI 비서 (Chat Assistant):** Google Gemini API를 활용한 가상 비서 'Wooki AI' 탑재

## 기술 스택 (Tech Stack)
- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **AI Integration:** Google Gemini API (`@google/genai`)
- **Icons:** SVG Icons

## 설치 및 실행 방법

1. 패키지 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npm start
```

## 환경 변수 설정
AI 챗봇 기능을 사용하기 위해서는 Google Gemini API Key가 필요합니다.
`.env` 파일에 다음과 같이 설정하세요.

```
API_KEY=your_google_gemini_api_key
```

## 저작권
&copy; 기타치는욱이. All rights reserved.
