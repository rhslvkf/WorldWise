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
 * 미국 관련 퀴즈 문항 데이터
 */
const usaQuizzes: Quiz[] = [
  // ===== 기본 지리 (GEOGRAPHY) - 12문항 =====
  // 1. 객관식 - 기본 지리 (수도)
  {
    id: "us-quiz-001",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.capital",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 2. 객관식 - 기본 지리 (최대 인구 도시)
  {
    id: "us-quiz-002",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.largest_city",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 3. 객관식 - 기본 지리 (주 개수)
  {
    id: "us-quiz-003",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.states_count",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 4. 객관식 - 기본 지리 (국경국)
  {
    id: "us-quiz-004",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.border_countries",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 5. 객관식 - 기본 지리 (가장 큰 주)
  {
    id: "us-quiz-005",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.largest_state",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 6. 객관식 - 기본 지리 (방문객 많은 랜드마크)
  {
    id: "us-quiz-006",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.most_visited_landmark",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 7. O/X - 기본 지리 (뉴욕 수도)
  {
    id: "us-quiz-007",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.new_york_capital",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 8. O/X - 기본 지리 (하와이)
  {
    id: "us-quiz-008",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.hawaii_islands",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 9. 이미지 퀴즈 - 기본 지리 (미국 국기)
  {
    id: "us-quiz-009",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1581024013650-28295fd60327?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.flag",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 10. 이미지 퀴즈 - 기본 지리 (자유의 여신상)
  {
    id: "us-quiz-010",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1611596825222-dba035a86416?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.statue_of_liberty",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 11. 객관식 - 기본 지리 (미국 면적)
  {
    id: "us-quiz-011",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.area_rank",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // ===== 역사 (HISTORY) - 12문항 =====
  // 13. 객관식 - 역사 (독립 연도)
  {
    id: "us-quiz-013",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.independence_year",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 14. 객관식 - 역사 (첫 번째 대통령)
  {
    id: "us-quiz-014",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.first_president",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 15. 객관식 - 역사 (남북전쟁)
  {
    id: "us-quiz-015",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.civil_war",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 16. 객관식 - 역사 (금주법)
  {
    id: "us-quiz-016",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.prohibition",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 17. 객관식 - 역사 (루이지애나 매입)
  {
    id: "us-quiz-017",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.louisiana_purchase",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 18. 객관식 - 역사 (매니페스트 데스티니)
  {
    id: "us-quiz-018",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.manifest_destiny",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 19. O/X - 역사 (독립선언문)
  {
    id: "us-quiz-019",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.declaration_of_independence",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 20. O/X - 역사 (남북전쟁 승리)
  {
    id: "us-quiz-020",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.civil_war_winner",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 21. 이미지 퀴즈 - 역사 (링컨 기념관)
  {
    id: "us-quiz-021",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1588565267250-236955d3f8d7?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.lincoln_memorial",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 22. 객관식 - 역사 (헌법 수정조항)
  {
    id: "us-quiz-022",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.bill_of_rights",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 23. 이미지 퀴즈 - 역사 (독립 종)
  {
    id: "us-quiz-023",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1615040653245-2d18d2861719?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.liberty_bell",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // ===== 문화 (CULTURE) - 12문항 =====
  // 25. 객관식 - 문화 (공용어)
  {
    id: "us-quiz-025",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.official_language",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 26. 객관식 - 문화 (슈퍼볼)
  {
    id: "us-quiz-026",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.superbowl",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 27. 객관식 - 문화 (할리우드)
  {
    id: "us-quiz-027",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.hollywood",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 28. 객관식 - 문화 (미국 대학)
  {
    id: "us-quiz-028",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.ivy_league",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 29. 객관식 - 문화 (메이저 리그)
  {
    id: "us-quiz-029",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.mlb_teams",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 30. 객관식 - 문화 (미국 음악)
  {
    id: "us-quiz-030",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.music_genre",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 31. O/X - 문화 (국가)
  {
    id: "us-quiz-031",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.national_anthem",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 32. O/X - 문화 (감사절)
  {
    id: "us-quiz-032",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.thanksgiving_date",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 33. 이미지 퀴즈 - 문화 (할리우드)
  {
    id: "us-quiz-033",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1589053739346-ed32227546a4?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.hollywood_sign",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 34. 이미지 퀴즈 - 문화 (러시모어 산)
  {
    id: "us-quiz-034",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1613895860303-3ded4d68ebfe?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.mount_rushmore",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 35. O/X - 문화 (미국 국조)
  {
    id: "us-quiz-035",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.national_bird",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // ===== 음식 (FOOD) - 10문항 =====
  // 37. 객관식 - 음식 (전통 음식)
  {
    id: "us-quiz-037",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.traditional_food",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 38. 객관식 - 음식 (추수감사절 음식)
  {
    id: "us-quiz-038",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.thanksgiving_food",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 39. 객관식 - 음식 (미국 소다)
  {
    id: "us-quiz-039",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.soda_origin",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 40. 객관식 - 음식 (미국 패스트푸드)
  {
    id: "us-quiz-040",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.fast_food",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 41. 객관식 - 음식 (BBQ 스타일)
  {
    id: "us-quiz-041",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.bbq_styles",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 42. O/X - 음식 (애플파이)
  {
    id: "us-quiz-042",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.apple_pie",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 43. 이미지 퀴즈 - 음식 (햄버거)
  {
    id: "us-quiz-043",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.hamburger",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 44. 이미지 퀴즈 - 음식 (핫도그)
  {
    id: "us-quiz-044",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.hot_dog",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 45. O/X - 음식 (포츈 쿠키)
  {
    id: "us-quiz-045",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.fortune_cookie",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // ===== 유명 인물 (PEOPLE) - 12문항 =====
  // 47. 객관식 - 유명 인물 (신대륙 발견)
  {
    id: "us-quiz-047",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.columbus",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 48. 객관식 - 유명 인물 (링컨)
  {
    id: "us-quiz-048",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.lincoln",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 49. 객관식 - 유명 인물 (발명가)
  {
    id: "us-quiz-049",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.edison",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 50. 객관식 - 유명 인물 (마틴 루터 킹)
  {
    id: "us-quiz-050",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.mlk",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 51. 객관식 - 유명 인물 (천문학자)
  {
    id: "us-quiz-051",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.astronomers",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 52. 객관식 - 유명 인물 (NASA)
  {
    id: "us-quiz-052",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.nasa",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 53. O/X - 유명 인물 (마크 트웨인)
  {
    id: "us-quiz-053",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.mark_twain",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 54. O/X - 유명 인물 (아인슈타인)
  {
    id: "us-quiz-054",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.einstein",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 57. O/X - 유명 인물 (라이트 형제)
  {
    id: "us-quiz-057",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.wright_brothers",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // ===== 자연 및 환경 (NATURE) - 10문항 =====
  // 59. 객관식 - 자연 및 환경 (그랜드 캐니언)
  {
    id: "us-quiz-059",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.grand_canyon",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 60. 객관식 - 자연 및 환경 (나이아가라 폭포)
  {
    id: "us-quiz-060",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.niagara_falls",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 61. 객관식 - 자연 및 환경 (국립공원)
  {
    id: "us-quiz-061",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.first_national_park",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 62. 객관식 - 자연 및 환경 (미국 강)
  {
    id: "us-quiz-062",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.longest_river",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 63. O/X - 자연 및 환경 (가장 높은 산)
  {
    id: "us-quiz-063",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.highest_mountain",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 64. O/X - 자연 및 환경 (미국 사막)
  {
    id: "us-quiz-064",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.mojave_desert",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 65. 이미지 퀴즈 - 자연 및 환경 (그랜드 캐니언)
  {
    id: "us-quiz-065",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.grand_canyon_image",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 66. 이미지 퀴즈 - 자연 및 환경 (옐로스톤)
  {
    id: "us-quiz-066",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1607550295261-851fa60d8ed2?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.yellowstone_geyser",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 67. 객관식 - 자연 및 환경 (미국 기후)
  {
    id: "us-quiz-067",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.climate_zones",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // ===== 경제 및 정치 (ECONOMY) - 12문항 =====
  // 69. 객관식 - 경제 및 정치 (정부 형태)
  {
    id: "us-quiz-069",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.government_system",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 70. 객관식 - 경제 및 정치 (주요 정당)
  {
    id: "us-quiz-070",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.political_parties",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 71. 객관식 - 경제 및 정치 (대통령 임기)
  {
    id: "us-quiz-071",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.presidential_term",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 72. 객관식 - 경제 및 정치 (미국 연방정부)
  {
    id: "us-quiz-072",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.branches_of_government",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 73. 객관식 - 경제 및 정치 (경제 규모)
  {
    id: "us-quiz-073",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.economy_rank",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 74. 객관식 - 경제 및 정치 (국회)
  {
    id: "us-quiz-074",
    countryId: "US",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.congress",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 75. O/X - 경제 및 정치 (주요 산업)
  {
    id: "us-quiz-075",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.us.leading_industry",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 76. O/X - 경제 및 정치 (연방준비제도)
  {
    id: "us-quiz-076",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.us.federal_reserve",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 77. 이미지 퀴즈 - 경제 및 정치 (백악관)
  {
    id: "us-quiz-077",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1593047614267-378b863c98c5?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.white_house",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 78. 이미지 퀴즈 - 경제 및 정치 (국회의사당)
  {
    id: "us-quiz-078",
    countryId: "US",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1595379166499-39d5e7763d7e?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.us.capitol",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 79. O/X - 경제 및 정치 (달러)
  {
    id: "us-quiz-079",
    countryId: "US",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.us.dollar",
    correctAnswer: true,
  } as TrueFalseQuiz,
];

export default usaQuizzes;
