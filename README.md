# WorldWise (나라 퀴즈) 앱

WorldWise는 사용자들이 전 세계 국가에 대한 지식을 재미있고 몰입감 있는 방식으로 학습할 수 있도록 설계된 퀴즈 앱입니다. 단순한 지리적 정보를 넘어 각 국가의 역사, 문화, 음식, 유명 인물 등 다양한 측면을 다루어 깊이 있는 학습 경험을 제공합니다.

## 기능 개요

- **다양한 퀴즈 카테고리**: 기본 지리, 역사, 문화, 음식, 유명 인물, 자연 및 환경, 경제 및 정치
- **스토리 모드**: 가상 세계 여행을 통한 국가별 학습
- **일일 챌린지**: 매일 새로운 국가 관련 퀴즈
- **게임화 요소**: 포인트, 레벨, 배지, 업적 시스템
- **다국어 지원**: 영어, 한국어 지원
- **다크모드**: 시스템 설정 연동 및 앱 내 수동 전환 지원

## 기술 스택

- React Native & Expo
- TypeScript
- React Navigation (네비게이션)
- Styled Components (스타일링)
- Context API (상태 관리)
- Firebase (예정: 백엔드 및 데이터베이스)

## 개발 환경 설정

### 필수 조건

- Node.js 16.x 이상
- npm 8.x 이상
- Expo CLI

### 설치 및 실행

1. 저장소 클론

```bash
git clone https://github.com/yourusername/worldwise.git
cd worldwise
```

2. 의존성 패키지 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm start
# 또는
npx expo start
```

4. iOS 시뮬레이터, Android 에뮬레이터 또는 실제 기기에서 실행

## 프로젝트 구조

```
WorldWise/
├─ src/
│  ├─ assets/         # 이미지, 폰트 등의 에셋
│  ├─ components/     # 재사용 가능한 컴포넌트
│  │  ├─ common/      # 공통 UI 컴포넌트
│  │  ├─ home/        # 홈 화면 관련 컴포넌트
│  │  ├─ explore/     # 탐험 화면 관련 컴포넌트
│  │  ├─ quiz/        # 퀴즈 화면 관련 컴포넌트
│  │  └─ profile/     # 프로필 화면 관련 컴포넌트
│  ├─ contexts/       # Context API 관련 파일
│  ├─ hooks/          # 커스텀 훅
│  ├─ navigation/     # 네비게이션 관련 파일
│  ├─ screens/        # 화면 컴포넌트
│  ├─ services/       # API 통신 등의 서비스
│  ├─ styles/         # 스타일 관련 파일
│  ├─ types/          # TypeScript 타입 정의
│  └─ utils/          # 유틸리티 함수
├─ App.tsx            # 앱 진입점
└─ index.ts           # 앱 등록
```

## 디자인 시스템

WorldWise 앱은 일관된 디자인을 위한 디자인 시스템을 갖추고 있습니다:

- **색상**: 브랜드 컬러, 대륙별 컬러, 기능적 컬러 등
- **타이포그래피**: 제목, 본문, 레이블 등의 일관된 스타일
- **간격 및 레이아웃**: 일관된 여백과 패딩
- **컴포넌트**: 버튼, 카드, 입력 필드 등의 재사용 가능한 UI 요소

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.
