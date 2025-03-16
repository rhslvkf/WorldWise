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
 * 중국 관련 퀴즈 문항 데이터
 */
const chinaQuizzes: Quiz[] = [
  // 기본 지리 (Geography) - 12문항
  {
    id: "cn-quiz-001",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.capital",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-002",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.population",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-003",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.largest_city",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-004",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.territory_size",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-005",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.longest_river",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-006",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.border_countries",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-007",
    countryId: "CN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1680173755890-851136d362dd?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.cn.flag",
    correctOptionIndex: 2,
  } as ImageQuiz,

  {
    id: "cn-quiz-008",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.highest_mountain",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-009",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.provinces",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-010",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.tropical_climate",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-011",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.desert",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-012",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.timezone",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 역사 (History) - 12문항
  {
    id: "cn-quiz-013",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.first_emperor",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-014",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.great_wall",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-015",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.founding_year",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-016",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.silk_road",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-017",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.tang_dynasty",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-018",
    countryId: "CN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.cn.terracotta_army",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "cn-quiz-019",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.opium_war",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-020",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.cultural_revolution",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-021",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.ming_dynasty",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-022",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.hongkong_return",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-023",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.dynasty_order",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-024",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.paper_invention",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 문화 (Culture) - 12문항
  {
    id: "cn-quiz-025",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.language",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-026",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.new_year",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-027",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.calligraphy",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-028",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.zodiac",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-029",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.tea_ceremony",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-030",
    countryId: "CN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1602629339830-b7848e2ff629?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.cn.traditional_dress",
    correctOptionIndex: 2,
  } as ImageQuiz,

  {
    id: "cn-quiz-031",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.religion",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-032",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.writing_direction",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-033",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.opera",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-035",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.characters_simplified",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-036",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.classical_literature",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 음식 (Food) - 10문항
  {
    id: "cn-quiz-037",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.staple_food",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-038",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.famous_dish",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-039",
    countryId: "CN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1518983546435-91f8b87fe561?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.cn.dimsum",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "cn-quiz-040",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.tea_types",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-041",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.hotpot_origin",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-042",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.cooking_styles",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-043",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.regional_cuisine",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-044",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.mooncake",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-045",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.fortune_cookie",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-046",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.eating_customs",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 유명 인물 (People) - 12문항
  {
    id: "cn-quiz-047",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.mao_zedong",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-048",
    countryId: "CN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    image: "https://images.pexels.com/photos/13113713/pexels-photo-13113713.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    translationKey: "quiz.cn.confucius",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "cn-quiz-049",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.bruce_lee",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-050",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.deng_xiaoping",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-051",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.yao_ming",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-052",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.four_inventions",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-053",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.jack_ma",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-054",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.philosopher",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-055",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.zhang_yimou",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-056",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.sun_yat_sen",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-057",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.nobel_prize",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-058",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.empress_cixi",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 자연 및 환경 (Nature) - 10문항
  {
    id: "cn-quiz-059",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.national_animal",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-060",
    countryId: "CN",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1710985634171-63844794973f?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.cn.panda_habitat",
    correctOptionIndex: 3,
  } as ImageQuiz,

  {
    id: "cn-quiz-061",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.yangtze_river",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-062",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.three_gorges_dam",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-063",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.pollution",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-064",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.national_parks",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-065",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.karst_landscape",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-066",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.himalayan_range",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-067",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.gobi_desert",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-068",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.endangered_species",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 경제 및 정치 (Economy) - 12문항
  {
    id: "cn-quiz-069",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.currency",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-070",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.economy_rank",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-071",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.political_system",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-072",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.export_product",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-073",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.belt_road",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-074",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.un_security_council",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-075",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.special_economic_zones",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-076",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.tech_companies",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-077",
    countryId: "CN",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.cn.economic_reform",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "cn-quiz-079",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.cn.stock_exchanges",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "cn-quiz-080",
    countryId: "CN",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.cn.population_policy",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,
];

export default chinaQuizzes;
