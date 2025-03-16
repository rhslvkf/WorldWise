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
 * 인도 관련 퀴즈 문항 데이터
 */
const indiaQuizzes: Quiz[] = [
  // 기본 지리 (Geography) - 13 문항
  // 1. 객관식 - 기본 지리 (수도)
  {
    id: "in-quiz-001",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 2. 객관식 - 기본 지리 (인구)
  {
    id: "in-quiz-002",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.population",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 3. 객관식 - 기본 지리 (국경)
  {
    id: "in-quiz-003",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.border",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 4. 객관식 - 기본 지리 (가장 긴 강)
  {
    id: "in-quiz-004",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.longest_river",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 5. 객관식 - 기본 지리 (가장 큰 도시)
  {
    id: "in-quiz-005",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.largest_city",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 6. 이미지 퀴즈 - 기본 지리 (국기)
  {
    id: "in-quiz-006",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.flag",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 7. 이미지 퀴즈 - 기본 지리 (타지마할)
  {
    id: "in-quiz-007",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.taj_mahal",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 8. O/X - 기본 지리 (위치)
  {
    id: "in-quiz-008",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.location",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 9. 객관식 - 기본 지리 (국가 면적)
  {
    id: "in-quiz-009",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.area_rank",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 10. 객관식 - 기본 지리 (지형)
  {
    id: "in-quiz-010",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.terrain",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 12. 객관식 - 기본 지리 (수도 위치)
  {
    id: "in-quiz-012",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.capital_location",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 13. O/X - 기본 지리 (히말라야)
  {
    id: "in-quiz-013",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.himalaya",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 역사 (History) - 13 문항
  // 14. 객관식 - 역사 (독립)
  {
    id: "in-quiz-014",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.independence",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 15. 객관식 - 역사 (간디)
  {
    id: "in-quiz-015",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.gandhi",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 16. 객관식 - 역사 (무굴 제국)
  {
    id: "in-quiz-016",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.mughal",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 17. 이미지 퀴즈 - 역사 (간디)
  {
    id: "in-quiz-017",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1617464071161-3b770974b926?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.gandhi_image",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 18. 객관식 - 역사 (아쇼카 대왕)
  {
    id: "in-quiz-018",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.ashoka",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 19. O/X - 역사 (영국 식민지)
  {
    id: "in-quiz-019",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.british_rule",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 20. 객관식 - 역사 (파키스탄 분리)
  {
    id: "in-quiz-020",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.partition",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 21. 객관식 - 역사 (인더스 문명)
  {
    id: "in-quiz-021",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.indus_valley",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 22. 이미지 퀴즈 - 역사 (타지마할 건축)
  {
    id: "in-quiz-022",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.taj_mahal_history",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 23. 객관식 - 역사 (자와할랄 네루)
  {
    id: "in-quiz-023",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.nehru",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 24. 객관식 - 역사 (마우리아 왕조)
  {
    id: "in-quiz-024",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.maurya",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 25. O/X - 역사 (비폭력 운동)
  {
    id: "in-quiz-025",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.nonviolence",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 26. 객관식 - 역사 (동인도 회사)
  {
    id: "in-quiz-026",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.east_india_company",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 문화 (Culture) - 11 문항
  // 27. 객관식 - 문화 (공식 언어)
  {
    id: "in-quiz-027",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.official_languages",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 28. 객관식 - 문화 (볼리우드)
  {
    id: "in-quiz-028",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.bollywood",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 29. 이미지 퀴즈 - 문화 (전통 의상)
  {
    id: "in-quiz-029",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.traditional_clothing",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 30. 객관식 - 문화 (힌두교)
  {
    id: "in-quiz-030",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.hinduism",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 31. O/X - 문화 (요가 기원)
  {
    id: "in-quiz-031",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.yoga_origin",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 32. 객관식 - 문화 (디왈리)
  {
    id: "in-quiz-032",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.diwali",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 33. 이미지 퀴즈 - 문화 (헤나)
  {
    id: "in-quiz-033",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.henna",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 34. 객관식 - 문화 (언어 다양성)
  {
    id: "in-quiz-034",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.language_diversity",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 35. 객관식 - 문화 (카스트 제도)
  {
    id: "in-quiz-035",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.caste_system",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 36. O/X - 문화 (홀리 축제)
  {
    id: "in-quiz-036",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.holi",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 37. 객관식 - 문화 (고전 음악)
  {
    id: "in-quiz-037",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.classical_music",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 음식 (Food) - 10 문항
  // 38. 객관식 - 음식 (카레)
  {
    id: "in-quiz-038",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.curry",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 39. 객관식 - 음식 (향신료)
  {
    id: "in-quiz-039",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.spices",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 40. 이미지 퀴즈 - 음식 (난)
  {
    id: "in-quiz-040",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1611107415406-1c12f8cda424?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.naan",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 41. 객관식 - 음식 (인도 식사 방법)
  {
    id: "in-quiz-041",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.eating_custom",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 42. O/X - 음식 (채식주의)
  {
    id: "in-quiz-042",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.vegetarianism",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 43. 객관식 - 음식 (달)
  {
    id: "in-quiz-043",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.dal",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 44. 이미지 퀴즈 - 음식 (사모사)
  {
    id: "in-quiz-044",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1601050690294-397f3c324515?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.samosa",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 45. 객관식 - 음식 (차이)
  {
    id: "in-quiz-045",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.chai",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 46. 객관식 - 음식 (남부 요리)
  {
    id: "in-quiz-046",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.south_indian_food",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 47. O/X - 음식 (마살라 차이)
  {
    id: "in-quiz-047",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.masala_chai",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 유명 인물 (People) - 11 문항
  // 48. 객관식 - 유명 인물 (마하트마 간디)
  {
    id: "in-quiz-048",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.mahatma_gandhi",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 49. 객관식 - 유명 인물 (라빈드라나트 타고르)
  {
    id: "in-quiz-049",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.tagore",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 51. 객관식 - 유명 인물 (사친 텐둘카)
  {
    id: "in-quiz-051",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.tendulkar",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 52. O/X - 유명 인물 (테레사 수녀)
  {
    id: "in-quiz-052",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.mother_teresa",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 53. 객관식 - 유명 인물 (인디라 간디)
  {
    id: "in-quiz-053",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.indira_gandhi",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 55. 객관식 - 유명 인물 (A.P.J. 압둘 칼람)
  {
    id: "in-quiz-055",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.kalam",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 56. 객관식 - 유명 인물 (스리니바사 라마누잔)
  {
    id: "in-quiz-056",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.ramanujan",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 57. O/X - 유명 인물 (아이슈와랴 라이)
  {
    id: "in-quiz-057",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.aishwarya",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 58. 객관식 - 유명 인물 (아미르 칸)
  {
    id: "in-quiz-058",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.aamir_khan",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 자연 및 환경 (Nature) - 11 문항
  // 59. 객관식 - 자연 (강)
  {
    id: "in-quiz-059",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.rivers",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 60. 객관식 - 자연 (국립공원)
  {
    id: "in-quiz-060",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.national_parks",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 61. 이미지 퀴즈 - 자연 (벵골호랑이)
  {
    id: "in-quiz-061",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.bengal_tiger",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 62. 객관식 - 자연 (기후)
  {
    id: "in-quiz-062",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.climate",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 63. O/X - 자연 (에베레스트)
  {
    id: "in-quiz-063",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.everest",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 64. 객관식 - 자연 (몬순)
  {
    id: "in-quiz-064",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.monsoon",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 65. 이미지 퀴즈 - 자연 (인도 코끼리)
  {
    id: "in-quiz-065",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1461603950871-cd64bcf7acf0?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.in.elephant",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 66. 객관식 - 자연 (갠지스강)
  {
    id: "in-quiz-066",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.ganges",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 67. 객관식 - 자연 (산맥)
  {
    id: "in-quiz-067",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.mountain_ranges",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 68. O/X - 자연 (야생 동물)
  {
    id: "in-quiz-068",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.wildlife",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 69. 객관식 - 자연 (타르 사막)
  {
    id: "in-quiz-069",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.thar_desert",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 경제 및 정치 (Economy) - 11 문항
  // 70. 객관식 - 경제 (통화)
  {
    id: "in-quiz-070",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.currency",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 71. 객관식 - 경제 (IT 산업)
  {
    id: "in-quiz-071",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.it_industry",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 73. 객관식 - 정치 (정부 형태)
  {
    id: "in-quiz-073",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.government",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 74. O/X - 경제 (경제 규모)
  {
    id: "in-quiz-074",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.in.economy_size",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 75. 객관식 - 정치 (주)
  {
    id: "in-quiz-075",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.states",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 76. 이미지 퀴즈 - 정치 (의회)
  {
    id: "in-quiz-076",
    countryId: "IN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.pexels.com/photos/3881113/pexels-photo-3881113.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    translationKey: "quiz.in.parliament",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 77. 객관식 - 경제 (농업)
  {
    id: "in-quiz-077",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.agriculture",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 78. 객관식 - 정치 (독립 이후 정당)
  {
    id: "in-quiz-078",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.political_party",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 79. O/X - 정치 (국제 관계)
  {
    id: "in-quiz-079",
    countryId: "IN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.in.international_relations",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 80. 객관식 - 경제 (봄베이 증권거래소)
  {
    id: "in-quiz-080",
    countryId: "IN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.in.stock_exchange",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,
];

export default indiaQuizzes;
