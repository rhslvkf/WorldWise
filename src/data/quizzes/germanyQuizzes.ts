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
 * 독일 관련 퀴즈 문항 데이터
 */
const germanyQuizzes: Quiz[] = [
  // 1. 객관식 - 기본 지리 (수도)
  {
    id: "de-quiz-001",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 2. 객관식 - 기본 지리 (인구)
  {
    id: "de-quiz-002",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.population",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 3. 객관식 - 기본 지리 (국경)
  {
    id: "de-quiz-003",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.borders",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 4. 객관식 - 기본 지리 (연방주)
  {
    id: "de-quiz-004",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.states",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 5. 객관식 - 기본 지리 (최대 도시)
  {
    id: "de-quiz-005",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.largest_city",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 6. 객관식 - 기본 지리 (라인강)
  {
    id: "de-quiz-006",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.rhine_river",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 7. 객관식 - 기본 지리 (알프스)
  {
    id: "de-quiz-007",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.alps",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 8. 객관식 - 기본 지리 (최고봉)
  {
    id: "de-quiz-008",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.highest_peak",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 9. 객관식 - 기본 지리 (섬)
  {
    id: "de-quiz-009",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.islands",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 10. 객관식 - 기본 지리 (기후)
  {
    id: "de-quiz-010",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.climate",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 11. 객관식 - 기본 지리 (흑림)
  {
    id: "de-quiz-011",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.black_forest",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 12. 객관식 - 역사 (통일)
  {
    id: "de-quiz-012",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.reunification",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 13. 객관식 - 역사 (제2차 세계대전 종료)
  {
    id: "de-quiz-013",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.ww2_end",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 14. 객관식 - 역사 (비스마르크)
  {
    id: "de-quiz-014",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.bismarck",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 15. 객관식 - 역사 (바이마르 공화국)
  {
    id: "de-quiz-015",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.weimar_republic",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 16. 객관식 - 역사 (베를린 장벽)
  {
    id: "de-quiz-016",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.berlin_wall",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 17. 객관식 - 역사 (마틴 루터)
  {
    id: "de-quiz-017",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.martin_luther",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 18. 객관식 - 역사 (독일 제국)
  {
    id: "de-quiz-018",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.german_empire",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 19. 객관식 - 역사 (동독)
  {
    id: "de-quiz-019",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.east_germany",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 20. 객관식 - 역사 (나치)
  {
    id: "de-quiz-020",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.nazi_rise",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 21. 객관식 - 역사 (뉘른베르크 재판)
  {
    id: "de-quiz-021",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.nuremberg_trials",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 22. 객관식 - 문화 (공식 언어)
  {
    id: "de-quiz-022",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.official_language",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 23. 객관식 - 문화 (술 축제)
  {
    id: "de-quiz-023",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.beer_festival",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 24. 객관식 - 문화 (크리스마스 전통)
  {
    id: "de-quiz-024",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.christmas_tradition",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 25. 객관식 - 문화 (동화작가)
  {
    id: "de-quiz-025",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.fairy_tale_authors",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 26. 객관식 - 문화 (바우하우스)
  {
    id: "de-quiz-026",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.bauhaus",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 27. 객관식 - 문화 (베토벤)
  {
    id: "de-quiz-027",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.beethoven",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 28. 객관식 - 문화 (세계문화유산)
  {
    id: "de-quiz-028",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.unesco_sites",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 29. 객관식 - 문화 (종교)
  {
    id: "de-quiz-029",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.religion",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 30. 객관식 - 문화 (축구팀)
  {
    id: "de-quiz-030",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.football_team",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 31. 객관식 - 문화 (카니발)
  {
    id: "de-quiz-031",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.carnival",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 32. 객관식 - 음식 (식사습관)
  {
    id: "de-quiz-032",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.main_meal",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 33. 객관식 - 음식 (소시지)
  {
    id: "de-quiz-033",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.sausage",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 34. 객관식 - 음식 (맥주법)
  {
    id: "de-quiz-034",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.beer_purity_law",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 35. 객관식 - 음식 (빵)
  {
    id: "de-quiz-035",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.bread",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 36. 객관식 - 음식 (흑림 케이크)
  {
    id: "de-quiz-036",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.black_forest_cake",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 37. 객관식 - 음식 (크리스마스 과자)
  {
    id: "de-quiz-037",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.christmas_cookies",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 38. 객관식 - 음식 (감자 요리)
  {
    id: "de-quiz-038",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.potato_dish",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 39. 객관식 - 음식 (프레첼)
  {
    id: "de-quiz-039",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.pretzel",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 40. 객관식 - 음식 (슈니첼)
  {
    id: "de-quiz-040",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.schnitzel",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 41. 객관식 - 유명 인물 (앙겔라 메르켈)
  {
    id: "de-quiz-041",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.angela_merkel",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 42. 객관식 - 유명 인물 (괴테)
  {
    id: "de-quiz-042",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.goethe",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 43. 객관식 - 유명 인물 (아인슈타인)
  {
    id: "de-quiz-043",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.einstein",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 44. 객관식 - 유명 인물 (바흐)
  {
    id: "de-quiz-044",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.bach",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 45. 객관식 - 유명 인물 (카를 마르크스)
  {
    id: "de-quiz-045",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.marx",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 46. 객관식 - 유명 인물 (디터 람)
  {
    id: "de-quiz-046",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.dieter_rams",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 47. 객관식 - 유명 인물 (헤르만 헤세)
  {
    id: "de-quiz-047",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.hermann_hesse",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 48. 객관식 - 유명 인물 (프리드리히 니체)
  {
    id: "de-quiz-048",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.nietzsche",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 49. 객관식 - 유명 인물 (로베르트 코흐)
  {
    id: "de-quiz-049",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.robert_koch",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 50. 객관식 - 유명 인물 (빌리 브란트)
  {
    id: "de-quiz-050",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.willy_brandt",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 51. 객관식 - 자연 및 환경 (보호구역)
  {
    id: "de-quiz-051",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.national_parks",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 52. 객관식 - 자연 및 환경 (재생에너지)
  {
    id: "de-quiz-052",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.renewable_energy",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 53. 객관식 - 자연 및 환경 (숲)
  {
    id: "de-quiz-053",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.forests",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 54. 객관식 - 자연 및 환경 (환경보호 정책)
  {
    id: "de-quiz-054",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.environmental_policy",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 55. 객관식 - 자연 및 환경 (자전거 문화)
  {
    id: "de-quiz-055",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.bicycle_culture",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 56. 객관식 - 자연 및 환경 (독일의 강)
  {
    id: "de-quiz-056",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.rivers",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 57. 객관식 - 자연 및 환경 (야생동물)
  {
    id: "de-quiz-057",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.wildlife",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 58. 객관식 - 경제 및 정치 (정치 체제)
  {
    id: "de-quiz-058",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.political_system",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 59. 객관식 - 경제 및 정치 (자동차 산업)
  {
    id: "de-quiz-059",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.car_industry",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 60. 객관식 - 경제 및 정치 (EU 역할)
  {
    id: "de-quiz-060",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.eu_role",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 61. 객관식 - 경제 및 정치 (통화)
  {
    id: "de-quiz-061",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.currency",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 62. 객관식 - 경제 및 정치 (사회 복지)
  {
    id: "de-quiz-062",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.social_welfare",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 63. 객관식 - 경제 및 정치 (교육 시스템)
  {
    id: "de-quiz-063",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.education_system",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 64. 객관식 - 경제 및 정치 (공공 방송)
  {
    id: "de-quiz-064",
    countryId: "DE",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.de.public_broadcasting",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 65. O/X - 기본 지리 (면적)
  {
    id: "de-quiz-065",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.area",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 66. O/X - 역사 (베를린 장벽)
  {
    id: "de-quiz-066",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.berlin_wall_year",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 67. O/X - 문화 (크리스마스 마켓)
  {
    id: "de-quiz-067",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.christmas_markets",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 68. O/X - 음식 (맥주 소비)
  {
    id: "de-quiz-068",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.beer_consumption",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 69. O/X - 유명 인물 (베토벤 출생지)
  {
    id: "de-quiz-069",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.beethoven_birthplace",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 70. O/X - 자연 및 환경 (재생에너지)
  {
    id: "de-quiz-070",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.de.renewable_energy_leadership",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 71. O/X - 경제 및 정치 (자동차 산업)
  {
    id: "de-quiz-071",
    countryId: "DE",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.de.car_export",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 72. 이미지 퀴즈 - 기본 지리 (국기)
  {
    id: "de-quiz-072",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.flag",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 73. 이미지 퀴즈 - 기본 지리 (브란덴부르크 문)
  {
    id: "de-quiz-073",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.brandenburg_gate",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 74. 이미지 퀴즈 - 문화 (노이슈반슈타인 성)
  {
    id: "de-quiz-074",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1557067175-db3159d938ac?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.neuschwanstein_castle",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 76. 이미지 퀴즈 - 음식 (프레첼)
  {
    id: "de-quiz-076",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1509957879660-dd8846a0b43d?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.pretzel_image",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 77. 이미지 퀴즈 - 음식 (슈바르츠발트 키르쉬토르테)
  {
    id: "de-quiz-077",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1604776101125-077efea95abd?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.black_forest_cake_image",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 78. 이미지 퀴즈 - 유명 인물 (아인슈타인)
  {
    id: "de-quiz-078",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1630635280270-00799dd04da6?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.einstein_image",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 79. 이미지 퀴즈 - 자연 및 환경 (흑림)
  {
    id: "de-quiz-079",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1607544481388-00ac90758923?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.black_forest_image",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 80. 이미지 퀴즈 - 경제 및 정치 (자동차 브랜드)
  {
    id: "de-quiz-080",
    countryId: "DE",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1591230740238-e9a71182b67c?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.de.car_brands",
    correctOptionIndex: 2,
  } as ImageQuiz,
];

export default germanyQuizzes;
