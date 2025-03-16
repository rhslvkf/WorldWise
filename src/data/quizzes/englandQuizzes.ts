import {
  Quiz,
  QuizType,
  QuizCategory,
  Difficulty,
  MultipleChoiceQuiz,
  TrueFalseQuiz,
  ImageQuiz,
} from "../../types/quiz";

/**
 * 영국 관련 퀴즈 문항 데이터
 */
const englandQuizzes: Quiz[] = [
  // 기본 지리 (Geography) - 12문항
  // 1. 객관식 - 기본 지리 (수도)
  {
    id: "uk-quiz-001",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 2. 객관식 - 기본 지리 (구성 국가)
  {
    id: "uk-quiz-002",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.countries",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 3. 객관식 - 기본 지리 (면적)
  {
    id: "uk-quiz-003",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.area",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 4. 객관식 - 기본 지리 (인구)
  {
    id: "uk-quiz-004",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.population",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 5. 객관식 - 기본 지리 (강)
  {
    id: "uk-quiz-005",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.river",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 6. 객관식 - 기본 지리 (가장 높은 산)
  {
    id: "uk-quiz-006",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.uk.mountain",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 7. O/X - 기본 지리 (섬나라)
  {
    id: "uk-quiz-007",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.island",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 8. O/X - 기본 지리 (유럽 연합)
  {
    id: "uk-quiz-008",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.eu",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 9. 이미지 퀴즈 - 기본 지리 (국기)
  {
    id: "uk-quiz-009",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1598481732567-901732cd829f?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.flag",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 12. 객관식 - 기본 지리 (채널 터널)
  {
    id: "uk-quiz-012",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.channel",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 역사 (History) - 12문항
  // 13. 객관식 - 역사 (노르만 정복)
  {
    id: "uk-quiz-013",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.norman",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 14. 객관식 - 역사 (대영제국)
  {
    id: "uk-quiz-014",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.empire",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 15. 객관식 - 역사 (마그나 카르타)
  {
    id: "uk-quiz-015",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.magna_carta",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 16. 객관식 - 역사 (산업혁명)
  {
    id: "uk-quiz-016",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.industrial_revolution",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 17. 객관식 - 역사 (엘리자베스 1세)
  {
    id: "uk-quiz-017",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.elizabeth_i",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 18. 객관식 - 역사 (제2차 세계대전)
  {
    id: "uk-quiz-018",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.ww2",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 19. O/X - 역사 (헨리 8세)
  {
    id: "uk-quiz-019",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.henry_viii",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 20. O/X - 역사 (빅토리아 여왕)
  {
    id: "uk-quiz-020",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.victoria",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 21. 이미지 퀴즈 - 역사 (빅 벤)
  {
    id: "uk-quiz-021",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.big_ben",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 22. 이미지 퀴즈 - 역사 (스톤헨지)
  {
    id: "uk-quiz-022",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.stonehenge",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 24. 객관식 - 역사 (브렉시트)
  {
    id: "uk-quiz-024",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.brexit",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 문화 (Culture) - 12문항
  // 25. 객관식 - 문화 (셰익스피어)
  {
    id: "uk-quiz-025",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.shakespeare",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 26. 객관식 - 문화 (축구)
  {
    id: "uk-quiz-026",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.football",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 27. 객관식 - 문화 (비틀즈)
  {
    id: "uk-quiz-027",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.beatles",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 28. 객관식 - 문화 (언어)
  {
    id: "uk-quiz-028",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.languages",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 29. 객관식 - 문화 (의회)
  {
    id: "uk-quiz-029",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.parliament",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 30. 객관식 - 문화 (옥스포드)
  {
    id: "uk-quiz-030",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.oxford",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 31. O/X - 문화 (왼쪽 통행)
  {
    id: "uk-quiz-031",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.driving",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 32. O/X - 문화 (티 타임)
  {
    id: "uk-quiz-032",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.tea",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 33. 이미지 퀴즈 - 문화 (영국 경비병)
  {
    id: "uk-quiz-033",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1490110087711-8c4b22922935?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.royal_guard",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 34. 이미지 퀴즈 - 문화 (영국 전통)
  {
    id: "uk-quiz-034",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1594767059028-57f64cd78eb1?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.double_decker",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 36. 객관식 - 문화 (영국 방송)
  {
    id: "uk-quiz-036",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.bbc",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 음식 (Food) - 10문항
  // 37. 객관식 - 음식 (전통 아침식사)
  {
    id: "uk-quiz-037",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.breakfast",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 38. 객관식 - 음식 (피시 앤 칩스)
  {
    id: "uk-quiz-038",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.fish_and_chips",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 39. 객관식 - 음식 (애프터눈 티)
  {
    id: "uk-quiz-039",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.afternoon_tea",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 40. 객관식 - 음식 (요크셔 푸딩)
  {
    id: "uk-quiz-040",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.yorkshire_pudding",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 41. O/X - 음식 (민스 파이)
  {
    id: "uk-quiz-041",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.mince_pie",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 42. O/X - 음식 (커리)
  {
    id: "uk-quiz-042",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.curry",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 43. 이미지 퀴즈 - 음식 (영국 전통 음식)
  {
    id: "uk-quiz-043",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1545546338-74d4355c2f01?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.scones",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 44. 이미지 퀴즈 - 음식 (영국 디저트)
  {
    id: "uk-quiz-044",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    image: "https://images.unsplash.com/photo-1639948033867-7d407964ed93?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.trifle",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 46. 객관식 - 음식 (크리스마스 푸딩)
  {
    id: "uk-quiz-046",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.christmas_pudding",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 유명 인물 (People) - 12문항
  // 47. 객관식 - 유명 인물 (처칠)
  {
    id: "uk-quiz-047",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.churchill",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 48. 객관식 - 유명 인물 (아이작 뉴턴)
  {
    id: "uk-quiz-048",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.newton",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 49. 객관식 - 유명 인물 (찰스 다윈)
  {
    id: "uk-quiz-049",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.darwin",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 50. 객관식 - 유명 인물 (제인 오스틴)
  {
    id: "uk-quiz-050",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.austen",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 51. 객관식 - 유명 인물 (데이비드 베컴)
  {
    id: "uk-quiz-051",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.beckham",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 52. 객관식 - 유명 인물 (찰스 디킨스)
  {
    id: "uk-quiz-052",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.dickens",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 53. O/X - 유명 인물 (엘리자베스 2세)
  {
    id: "uk-quiz-053",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.elizabeth_ii",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 54. O/X - 유명 인물 (J.K. 롤링)
  {
    id: "uk-quiz-054",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.rowling",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 58. 객관식 - 유명 인물 (아델)
  {
    id: "uk-quiz-058",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.adele",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 자연 및 환경 (Nature) - 10문항
  // 59. 객관식 - 자연 및 환경 (영국 국립공원)
  {
    id: "uk-quiz-059",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.national_parks",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 60. 객관식 - 자연 및 환경 (기후)
  {
    id: "uk-quiz-060",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.climate",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 61. 객관식 - 자연 및 환경 (지형)
  {
    id: "uk-quiz-061",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.landscape",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 62. 객관식 - 자연 및 환경 (스코틀랜드 호수)
  {
    id: "uk-quiz-062",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.loch_ness",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 63. O/X - 자연 및 환경 (화이트 클리프스 오브 도버)
  {
    id: "uk-quiz-063",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.white_cliffs",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 64. O/X - 자연 및 환경 (습지)
  {
    id: "uk-quiz-064",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.wetlands",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 65. 이미지 퀴즈 - 자연 및 환경 (영국 자연)
  {
    id: "uk-quiz-065",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1609511394000-2a5c8927e113?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.lake_district",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 66. 이미지 퀴즈 - 자연 및 환경 (영국 해안)
  {
    id: "uk-quiz-066",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    image: "https://images.unsplash.com/photo-1499011265673-5cd564976d67?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.giants_causeway",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 68. 객관식 - 자연 및 환경 (영국 동물)
  {
    id: "uk-quiz-068",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.wildlife",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 경제 및 정치 (Economy) - 12문항
  // 69. 객관식 - 경제 및 정치 (정치 체제)
  {
    id: "uk-quiz-069",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.political_system",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 70. 객관식 - 경제 및 정치 (국제기구)
  {
    id: "uk-quiz-070",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.international_orgs",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 71. 객관식 - 경제 및 정치 (통화)
  {
    id: "uk-quiz-071",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.currency",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 72. 객관식 - 경제 및 정치 (산업)
  {
    id: "uk-quiz-072",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.industry",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 73. 객관식 - 경제 및 정치 (정당)
  {
    id: "uk-quiz-073",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.political_parties",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 74. 객관식 - 경제 및 정치 (영연방)
  {
    id: "uk-quiz-074",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.commonwealth",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 75. O/X - 경제 및 정치 (브리티시 파운드)
  {
    id: "uk-quiz-075",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.pound_sterling",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 76. O/X - 경제 및 정치 (수상)
  {
    id: "uk-quiz-076",
    countryId: "UK",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.uk.prime_minister",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 77. 이미지 퀴즈 - 경제 및 정치 (영국 정치 상징)
  {
    id: "uk-quiz-077",
    countryId: "UK",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1460738256030-715e37579fac?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.uk.parliament_building",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 80. 객관식 - 경제 및 정치 (영국 교통)
  {
    id: "uk-quiz-080",
    countryId: "UK",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.uk.transport",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,
];

export default englandQuizzes;
