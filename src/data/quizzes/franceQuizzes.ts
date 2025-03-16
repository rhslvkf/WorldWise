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
 * 프랑스 관련 퀴즈 문항 데이터
 */
const franceQuizzes: Quiz[] = [
  // 기본 지리 (Geography) - 12문항
  {
    id: "fr-quiz-001",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-002",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.river",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-003",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.largest_city",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-004",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.borders_italy",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-005",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.highest_mountain",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-006",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1557767537-2eb93757757e?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.flag",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "fr-quiz-007",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.regions",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-008",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.mediterranean",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-009",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.overseas_territory",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-010",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.second_city",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-011",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.land_size",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-012",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    image: "https://images.unsplash.com/photo-1596436831831-87dd84a69101?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.mont_saint_michel",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 역사 (History) - 12문항
  {
    id: "fr-quiz-013",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.revolution_year",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-014",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.napoleon",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-015",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.louis_xiv",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-016",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.joan_of_arc",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-017",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.bastille_day",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-018",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.hundred_years_war",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-019",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.fifth_republic",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-020",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1591828353335-197466da2a4e?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.versailles",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "fr-quiz-021",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.vichy_regime",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-022",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.french_indochina",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-023",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.treaty_versailles",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-024",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.storming_bastille",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 문화 (Culture) - 12문항
  {
    id: "fr-quiz-025",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.official_language",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-026",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.french_kiss",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-027",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.national_motto",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-028",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1567942585146-33d62b775db0?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.louvre",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "fr-quiz-029",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.cannes_festival",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-030",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.notre_dame",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-031",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.secularism",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-032",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.pexels.com/photos/1775393/pexels-photo-1775393.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    translationKey: "quiz.fr.beret",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "fr-quiz-033",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.academie_francaise",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-034",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.tour_de_france",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-035",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.cultural_exception",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-036",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.cheek_kiss",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 음식 (Food) - 10문항
  {
    id: "fr-quiz-037",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.cheese",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-038",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.croissant",
    correctOptionIndex: 0,
  } as ImageQuiz,

  {
    id: "fr-quiz-039",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.wine",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-040",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.baguette",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-041",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.escargot",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-042",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.champagne",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-043",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.ratatouille",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-044",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.michelin_stars",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-045",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.truffle",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-046",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.foie_gras",
    correctAnswer: false,
  } as TrueFalseQuiz,

  // 유명 인물 (People) - 12문항
  {
    id: "fr-quiz-047",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.marie_curie",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-049",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.coco_chanel",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-050",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.voltaire",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-051",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.charles_de_gaulle",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-052",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.edith_piaf",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-053",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.victor_hugo",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-055",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.louis_pasteur",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-056",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.simone_de_beauvoir",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-057",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.alexandre_dumas",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-058",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.claude_debussy",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 자연 및 환경 (Nature) - 10문항
  {
    id: "fr-quiz-059",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.alps",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-060",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.lavender",
    correctOptionIndex: 2,
  } as ImageQuiz,

  {
    id: "fr-quiz-061",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.mediterranean_climate",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-062",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.loire_valley",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-063",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.camargue",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-064",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.verdon_gorge",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-065",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.corsica",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-066",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.national_parks",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-067",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.endangered_species",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-068",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.dune_pilat",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 경제 및 정치 (Economy) - 12문항
  {
    id: "fr-quiz-069",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.currency_before_euro",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-070",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.eu_founding",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-071",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.government_type",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-072",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.fr.luxury_brands",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-073",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.tgv",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-074",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.nuclear_energy",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-075",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.fr.yellow_vests",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-076",
    countryId: "FR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1543903905-cee4ab46985c?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.fr.airbus",
    correctOptionIndex: 1,
  } as ImageQuiz,

  {
    id: "fr-quiz-077",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.economic_rank",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-078",
    countryId: "FR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.un_security_council",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "fr-quiz-079",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.35_hour_week",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "fr-quiz-080",
    countryId: "FR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.fr.agricultural_production",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,
];

export default franceQuizzes;
