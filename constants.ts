
import { TabDifficulty, VideoItem, TabItem } from './types';

export const NAV_LINKS = [
  { name: '홈', href: '#home' },
  { name: '영상', href: '#videos' },
  { name: '교재 구매', href: '#textbook' },
  { name: '소개', href: '#about' },
];

// 데모용 영상 데이터: 제시된 최신 URL 반영
// ID 추출: IvlN_ZXW91c, iNlnn_KUPsI, VE-UdSaaWzM, Ggv6prLEsM0
export const FEATURED_VIDEOS: VideoItem[] = [
  {
    id: 'IvlN_ZXW91c',
    title: '기타치는욱이 - 감성 핑거스타일 최신 연주 01',
    thumbnail: 'https://i.ytimg.com/vi/IvlN_ZXW91c/maxresdefault.jpg',
    views: '최신 업로드',
    date: 'New',
    category: 'Latest'
  },
  {
    id: 'iNlnn_KUPsI',
    title: '기타치는욱이 - 감성 핑거스타일 최신 연주 02',
    thumbnail: 'https://i.ytimg.com/vi/iNlnn_KUPsI/maxresdefault.jpg',
    views: '최신 업로드',
    date: 'New',
    category: 'Latest'
  },
  {
    id: 'VE-UdSaaWzM',
    title: '기타치는욱이 - 감성 핑거스타일 최신 연주 03',
    thumbnail: 'https://i.ytimg.com/vi/VE-UdSaaWzM/maxresdefault.jpg',
    views: '최신 업로드',
    date: 'New',
    category: 'Latest'
  },
  {
    id: 'Ggv6prLEsM0',
    title: '기타치는욱이 - 감성 핑거스타일 최신 연주 04',
    thumbnail: 'https://i.ytimg.com/vi/Ggv6prLEsM0/maxresdefault.jpg',
    views: '최신 업로드',
    date: 'New',
    category: 'Latest'
  }
];

export const TEXTBOOK_INFO = {
  title: "초보자를 위한 청음기타 독학법",
  subtitle: "쉽고 간단하지만 평생기타를 즐길 수 있는 확실한 방법",
  author: "기타치는욱이",
  price: 25000,
  shipping: 3000,
  bankName: "농협",
  accountNumber: "605-12-264046",
  accountHolder: "정원욱"
};

export const TEXTBOOK_CURRICULUM = [
  "1. 청음기타에 필요한 이론",
  "2. 약식 하이코드 (메이저 C F G / 마이너 Am Dm Em)",
  "3. 코드별 근음",
  "4. 주요 3화음 코드 (메이저 / 마이너)",
  "5. 가족 코드 (메이저 / 마이너)",
  "6. 스케일 (스케일폼 / 연결)",
  "7. 펜타토닉",
  "8. 스케일폼과 코드치기"
];

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@wookiguitar',
  band: 'https://band.us/band/87541793',
  email: 'jww1088@gmail.com'
};
