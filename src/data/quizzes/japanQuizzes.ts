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
 * 일본 관련 퀴즈 문항 데이터
 */
const japanQuizzes: Quiz[] = [
  // 1. 기본 지리 (Basic Geography) - 12문항
  // 쉬움 (5)
  {
    id: "jp-quiz-001",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-002",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.islands",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-003",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.archipelago",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-004",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1570462395760-8d708c39e7f3?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.fuji",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "jp-quiz-005",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.largest_city",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 중간 (5)
  {
    id: "jp-quiz-006",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.sea_japan",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-007",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.hokkaido",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-008",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.region_kansai",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-009",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1514337224818-9787cf717f2a?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.shinkansen",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "jp-quiz-010",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.inland_sea",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 어려움 (2)
  {
    id: "jp-quiz-011",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.prefecture_number",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 2. 역사 (History) - 12문항
  // 쉬움 (4)
  {
    id: "jp-quiz-013",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.emperor_system",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-014",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.shogun",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-015",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.samurai",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 중간 (5)
  {
    id: "jp-quiz-017",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.edo_period",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-018",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.perry",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-019",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.sengoku",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-020",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.constitution",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-021",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1571754763292-91f1e413c08b?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.osaka_castle",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 어려움 (3)
  {
    id: "jp-quiz-022",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.kamikaze",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-023",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.jomon_period",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 3. 문화 (Culture) - 12문항
  // 쉬움 (4)
  {
    id: "jp-quiz-025",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.kimono",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-026",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.sumo",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-027",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.anime",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-028",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1563260797-cb5cd70254c8?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.origami",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 중간 (5)
  {
    id: "jp-quiz-029",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.kabuki",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-030",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.hanami",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-031",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.tea_ceremony",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-032",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.ikebana",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 어려움 (3)
  {
    id: "jp-quiz-034",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.wabi_sabi",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-035",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.ukiyo_e",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 4. 음식 (Food) - 10문항
  // 쉬움 (4)
  {
    id: "jp-quiz-037",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.sushi",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-038",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.rice_staple",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-039",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.ramen",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-040",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.tempura",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 중간 (4)
  {
    id: "jp-quiz-041",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.wagyu",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-042",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.sake",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-043",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.wasabi",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 어려움 (2)
  {
    id: "jp-quiz-045",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.fugu",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 5. 유명 인물 (Famous People) - 12문항
  // 쉬움 (4)
  {
    id: "jp-quiz-047",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.miyazaki",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-048",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.abe",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-049",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.kurosawa",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 중간 (5)
  {
    id: "jp-quiz-051",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.oda_nobunaga",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-052",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.yoko_ono",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-053",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.mishima",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-054",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.natsume_soseki",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 어려움 (3)
  {
    id: "jp-quiz-056",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.basho",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-057",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.yukio_mishima",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 6. 자연 및 환경 (Nature and Environment) - 10문항
  // 쉬움 (4)
  {
    id: "jp-quiz-059",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.cherry_blossom",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-060",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.earthquakes",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-061",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.seasons",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-062",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1705578730164-6e91a6fecdf1?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.bamboo",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 중간 (4)
  {
    id: "jp-quiz-063",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.japan_alps",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-064",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.tsushima_cat",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-065",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.volcanic_activity",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-066",
    countryId: "JP",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1504850759690-1c3beb59be7c?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.jp.snow_monkeys",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 어려움 (2)
  {
    id: "jp-quiz-067",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.ogasawara",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 7. 경제 및 정치 (Economy and Politics) - 12문항
  // 쉬움 (3)
  {
    id: "jp-quiz-069",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.currency",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-070",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.toyota",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-071",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.jp.government",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 중간 (6)
  {
    id: "jp-quiz-072",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.economy_rank",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-073",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.diet",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-074",
    countryId: "JP",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.article_9",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "jp-quiz-075",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.zaibatsu",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-077",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.jp.lost_decade",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 어려움 (3)
  {
    id: "jp-quiz-078",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.abenomics",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "jp-quiz-079",
    countryId: "JP",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.jp.keiretsu",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,
];

export default japanQuizzes;
