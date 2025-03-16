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
 * 캐나다 관련 퀴즈 문항 데이터
 */
const canadaQuizzes: Quiz[] = [
  // 1. 객관식 - 기본 지리 (수도)
  {
    id: "ca-quiz-001",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.capital",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 2. 객관식 - 기본 지리 (최대 도시)
  {
    id: "ca-quiz-002",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.largest_city",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 3. 객관식 - 기본 지리 (국경)
  {
    id: "ca-quiz-003",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.border",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 4. 객관식 - 기본 지리 (면적)
  {
    id: "ca-quiz-004",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.area",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 5. 객관식 - 기본 지리 (주)
  {
    id: "ca-quiz-005",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.provinces",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 6. 객관식 - 기본 지리 (대도시)
  {
    id: "ca-quiz-006",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.major_cities",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 7. 객관식 - 기본 지리 (나이아가라)
  {
    id: "ca-quiz-007",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.niagara",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 8. 객관식 - 기본 지리 (그레이트 레이크스)
  {
    id: "ca-quiz-008",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.great_lakes",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 9. 객관식 - 기본 지리 (기후)
  {
    id: "ca-quiz-009",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.climate",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 10. 객관식 - 기본 지리 (로키산맥)
  {
    id: "ca-quiz-010",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.rockies",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 11. 객관식 - 기본 지리 (프레리)
  {
    id: "ca-quiz-011",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.prairies",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 12. 객관식 - 기본 지리 (북부 영토)
  {
    id: "ca-quiz-012",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.territories",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 13. 객관식 - 역사 (정착)
  {
    id: "ca-quiz-013",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.first_settlers",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 14. 객관식 - 역사 (독립)
  {
    id: "ca-quiz-014",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.confederation",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 15. 객관식 - 역사 (원주민)
  {
    id: "ca-quiz-015",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.indigenous",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 16. 객관식 - 역사 (식민지)
  {
    id: "ca-quiz-016",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.colonies",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 17. 객관식 - 역사 (정부 제도)
  {
    id: "ca-quiz-017",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.government",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 18. 객관식 - 역사 (국가 원수)
  {
    id: "ca-quiz-018",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.head_of_state",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 19. 객관식 - 역사 (세계대전)
  {
    id: "ca-quiz-019",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.world_wars",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 20. 객관식 - 역사 (전후 이민)
  {
    id: "ca-quiz-020",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.postwar_immigration",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 21. 객관식 - 역사 (퀘벡)
  {
    id: "ca-quiz-021",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.quebec_history",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 22. 객관식 - 역사 (헌법)
  {
    id: "ca-quiz-022",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.constitution",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 23. 객관식 - 문화 (공식 언어)
  {
    id: "ca-quiz-023",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.official_languages",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 24. 객관식 - 문화 (다양성)
  {
    id: "ca-quiz-024",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.multiculturalism",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 25. 객관식 - 문화 (프랑스어권)
  {
    id: "ca-quiz-025",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.francophone",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 26. 객관식 - 문화 (스포츠)
  {
    id: "ca-quiz-026",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.national_sport",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 27. 객관식 - 문화 (음악)
  {
    id: "ca-quiz-027",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.musicians",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 28. 객관식 - 문화 (예술)
  {
    id: "ca-quiz-028",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.art",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 29. 객관식 - 문화 (문학)
  {
    id: "ca-quiz-029",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.literature",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 30. 객관식 - 문화 (영화)
  {
    id: "ca-quiz-030",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.cinema",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 31. 객관식 - 문화 (원주민 문화)
  {
    id: "ca-quiz-031",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.indigenous_culture",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 32. 객관식 - 문화 (명절)
  {
    id: "ca-quiz-032",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.holidays",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 33. 객관식 - 음식 (메이플 시럽)
  {
    id: "ca-quiz-033",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.maple_syrup",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 34. 객관식 - 음식 (푸틴)
  {
    id: "ca-quiz-034",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.poutine",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 35. 객관식 - 음식 (토론토 음식)
  {
    id: "ca-quiz-035",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.toronto_food",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 36. 객관식 - 음식 (농산물)
  {
    id: "ca-quiz-036",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.agriculture",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 37. 객관식 - 음식 (해산물)
  {
    id: "ca-quiz-037",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.seafood",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 38. 객관식 - 음식 (티팅스)
  {
    id: "ca-quiz-038",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.timbits",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 39. 객관식 - 음식 (몬트리올 음식)
  {
    id: "ca-quiz-039",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.montreal_food",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 40. 객관식 - 음식 (나나이모 바)
  {
    id: "ca-quiz-040",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.nanaimo_bars",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 41. 객관식 - 유명 인물 (정치인)
  {
    id: "ca-quiz-041",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.first_prime_minister",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 42. 객관식 - 유명 인물 (현대 정치인)
  {
    id: "ca-quiz-042",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.trudeau",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 43. 객관식 - 유명 인물 (과학자)
  {
    id: "ca-quiz-043",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.scientists",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 44. 객관식 - 유명 인물 (가수)
  {
    id: "ca-quiz-044",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.singers",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 45. 객관식 - 유명 인물 (배우)
  {
    id: "ca-quiz-045",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.actors",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 46. 객관식 - 유명 인물 (스포츠)
  {
    id: "ca-quiz-046",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.athletes",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 47. 객관식 - 유명 인물 (역사 인물)
  {
    id: "ca-quiz-047",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.historical_figures",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 48. 객관식 - 유명 인물 (여성 인물)
  {
    id: "ca-quiz-048",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.women",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 49. 객관식 - 유명 인물 (코미디언)
  {
    id: "ca-quiz-049",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.comedians",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 50. 객관식 - 유명 인물 (발명가)
  {
    id: "ca-quiz-050",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.inventors",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 51. 객관식 - 자연 및 환경 (국립공원)
  {
    id: "ca-quiz-051",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.national_parks",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 52. 객관식 - 자연 및 환경 (동물 상징)
  {
    id: "ca-quiz-052",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.national_animal",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 53. 객관식 - 자연 및 환경 (식물 상징)
  {
    id: "ca-quiz-053",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.national_tree",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 54. 객관식 - 자연 및 환경 (북극곰)
  {
    id: "ca-quiz-054",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.polar_bears",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 55. 객관식 - 자연 및 환경 (북부 자연)
  {
    id: "ca-quiz-055",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.northern_lights",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 56. 객관식 - 자연 및 환경 (환경 보호)
  {
    id: "ca-quiz-056",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.environmental_policy",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 57. 객관식 - 자연 및 환경 (목재 산업)
  {
    id: "ca-quiz-057",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.forestry",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 58. 객관식 - 자연 및 환경 (보호 종)
  {
    id: "ca-quiz-058",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.endangered_species",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 59. 객관식 - 자연 및 환경 (물 자원)
  {
    id: "ca-quiz-059",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.water_resources",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 60. 객관식 - 자연 및 환경 (기후 변화)
  {
    id: "ca-quiz-060",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.ca.climate_change",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 61. 객관식 - 경제 및 정치 (정치 체제)
  {
    id: "ca-quiz-061",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.political_system",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 62. 객관식 - 경제 및 정치 (통화)
  {
    id: "ca-quiz-062",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.currency",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 63. 객관식 - 경제 및 정치 (주요 산업)
  {
    id: "ca-quiz-063",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.industries",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 64. 객관식 - 경제 및 정치 (교역)
  {
    id: "ca-quiz-064",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.trade",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 65. 객관식 - 경제 및 정치 (국제 단체)
  {
    id: "ca-quiz-065",
    countryId: "CA",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.international_organizations",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 66. O/X - 기본 지리 (국경선)
  {
    id: "ca-quiz-066",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.border_length",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 67. O/X - 역사 (영연방)
  {
    id: "ca-quiz-067",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.commonwealth",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 68. O/X - 문화 (영화제)
  {
    id: "ca-quiz-068",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.film_festival",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 69. O/X - 음식 (버터 타르트)
  {
    id: "ca-quiz-069",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.butter_tarts",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 70. O/X - 유명 인물 (음악)
  {
    id: "ca-quiz-070",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.musician_fact",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 71. O/X - 자연 및 환경 (국립공원)
  {
    id: "ca-quiz-071",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.ca.first_national_park",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 72. O/X - 경제 및 정치 (나프타)
  {
    id: "ca-quiz-072",
    countryId: "CA",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.ca.nafta",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 73. 이미지 퀴즈 - 국기
  {
    id: "ca-quiz-073",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.flag",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 74. 이미지 퀴즈 - CN 타워
  {
    id: "ca-quiz-074",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1559344404-d3d24a7480e4?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.cn_tower",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 75. 이미지 퀴즈 - 로키 산맥
  {
    id: "ca-quiz-075",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1612485222394-376d81a3e829?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.rockies_image",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 76. 이미지 퀴즈 - 나이아가라 폭포
  {
    id: "ca-quiz-076",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.niagara_image",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 77. 이미지 퀴즈 - 국회 의사당
  {
    id: "ca-quiz-077",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1657988026571-1262ec793421?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.parliament",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 78. 이미지 퀴즈 - 퀘벡 시티
  {
    id: "ca-quiz-078",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1540638185826-7b1a01210c2b?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.quebec_city",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 79. 이미지 퀴즈 - 북극곰
  {
    id: "ca-quiz-079",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.polar_bear_image",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 80. 이미지 퀴즈 - 단풍잎
  {
    id: "ca-quiz-080",
    countryId: "CA",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1623039925698-1f96229b1a51?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.ca.maple_leaf",
    correctOptionIndex: 3,
  } as ImageQuiz,
];

export default canadaQuizzes;
