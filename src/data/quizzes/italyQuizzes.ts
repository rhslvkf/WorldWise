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
 * 이탈리아 관련 퀴즈 문항 데이터
 */
const italyQuizzes: Quiz[] = [
  // 기본 지리 (Geography) - 13 문항
  {
    id: "it-quiz-001",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.capital",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-002",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.shape",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-003",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.largest_city",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-004",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.regions",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-005",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.mountains",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-006",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.mediterranean",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-007",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.sardinia",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-008",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1596440243128-cf71a4c60065?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.flag",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "it-quiz-009",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.rivers",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-010",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.borders",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-012",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.etna",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-013",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.cities_population",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 역사 (History) - 12 문항
  {
    id: "it-quiz-014",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.roman_empire",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-015",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.unification",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-016",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.renaissance",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-017",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.garibaldi",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-018",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.mussolini",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-019",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.colosseum",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "it-quiz-020",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.republic",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-021",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.julius_caesar",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-022",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.medici",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-023",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.pompeii",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-024",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.eu_founding",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-025",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.reunification",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 문화 (Culture) - 12 문항
  {
    id: "it-quiz-026",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.language",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-027",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.carnival",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-028",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.opera",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-029",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.leaning_tower",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "it-quiz-030",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.palio",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-031",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.vatican",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-032",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.cinema",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-033",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.soccer",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-034",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.fashion",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-036",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.dialects",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-037",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.traditions",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 음식 (Food) - 11 문항
  {
    id: "it-quiz-038",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.pasta",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-039",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.pizza",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-040",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1586040456399-50595fb77ecd?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.tiramisu",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "it-quiz-041",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.cheese",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-042",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.espresso",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-043",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.wine",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-044",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.regional_food",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-045",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.gelato",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-046",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.truffle",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-047",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.olive_oil",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-048",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.carbonara",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 유명 인물 (People) - 12 문항
  {
    id: "it-quiz-049",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.da_vinci",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-051",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.galileo",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-052",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.marco_polo",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-053",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.columbus",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-054",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.verdi",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-055",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.dante",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-056",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.fellini",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-057",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.montessori",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-059",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.fermi",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-060",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.sophia_loren",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 자연 및 환경 (Nature) - 10 문항
  {
    id: "it-quiz-061",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.volcanoes",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-062",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.lakes",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-063",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1533656338503-b22f63e96cd8?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.amalfi",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "it-quiz-064",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.gran_paradiso",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-065",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.climate",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-066",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.dolomites",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-067",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.wildlife",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-068",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.coastline",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-069",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1551801319-ca06060f3fcc?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.cinque_terre",
    correctOptionIndex: 2,
  } as ImageQuiz,

  {
    id: "it-quiz-070",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.islands",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 경제 및 정치 (Economy) - 10 문항
  {
    id: "it-quiz-071",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.currency",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-072",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.industry",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-073",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.it.g7",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-074",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.exports",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-075",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.political_system",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-076",
    countryId: "IT",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.it.car_industry",
    correctOptionIndex: 2,
  } as ImageQuiz,

  {
    id: "it-quiz-077",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.agriculture",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "it-quiz-078",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.north_south",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-079",
    countryId: "IT",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.it.tourism",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "it-quiz-080",
    countryId: "IT",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.it.eu_economy",
    correctAnswer: false,
  } as TrueFalseQuiz,
];

export default italyQuizzes;
