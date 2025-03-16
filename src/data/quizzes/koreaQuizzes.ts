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
 * 한국 관련 퀴즈 문항 데이터
 */
const koreaQuizzes: Quiz[] = [
  // 기본 지리 (Geography) - 쉬움 (5)
  {
    id: "kr-geo-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.largest.city",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-003",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.peninsula",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-004",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.island",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "kr-geo-005",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1676899127445-b5aa21feafda?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.kr.flag",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 기본 지리 (Geography) - 중간 (5)
  {
    id: "kr-geo-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.provinces",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-007",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.river",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-008",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.border",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-009",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.climate",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "kr-geo-010",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1638591751482-1a7d27fcea15?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.kr.port.city",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 기본 지리 (Geography) - 어려움 (2)
  {
    id: "kr-geo-011",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.mountain",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-geo-012",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.cities.multiple",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 역사 (History) - 쉬움 (4)
  {
    id: "kr-his-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.dynasty",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.independence",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-003",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.three.kingdoms",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-004",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.japanese.occupation",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 역사 (History) - 중간 (5)
  {
    id: "kr-his-005",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.joseon",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.korean.war",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-007",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.constitutional",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-008",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.hangul",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "kr-his-009",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1506809060920-edbd698dabb8?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.kr.admiral.yi",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 역사 (History) - 어려움 (3)
  {
    id: "kr-his-010",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.democratization",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-his-011",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.goryeo",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 문화 (Culture) - 쉬움 (4)
  {
    id: "kr-cul-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.hanbok",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.holiday",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-003",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.alphabet",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "kr-cul-004",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.kr.taekwondo",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 문화 (Culture) - 중간 (5)
  {
    id: "kr-cul-005",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.fan.dance",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.kpop",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-007",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.confucianism",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-008",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.age",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "kr-cul-009",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1611477623565-aa88aeca8153?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.kr.palace",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 문화 (Culture) - 어려움 (3)
  {
    id: "kr-cul-010",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.mask.dance",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-011",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.pansori",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-cul-012",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.festivals.tf",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 음식 (Food) - 쉬움 (4)
  {
    id: "kr-food-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.food",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-food-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.kimchi",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-food-003",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.bibimbap",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "kr-food-004",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    image:
      "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
    translationKey: "quiz.kr.bulgogi",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 음식 (Food) - 중간 (4)
  {
    id: "kr-food-005",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.tteokbokki",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-food-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.side.dishes",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-food-007",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.soju",
    correctAnswer: false,
  } as TrueFalseQuiz,

  {
    id: "kr-food-008",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.pexels.com/photos/8896216/pexels-photo-8896216.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    translationKey: "quiz.kr.korean.bbq",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 음식 (Food) - 어려움 (2)
  {
    id: "kr-food-009",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.fermentation",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-food-010",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.regional.foods.multiple",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 유명 인물 (People) - 쉬움 (4)
  {
    id: "kr-ppl-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.king.sejong",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-ppl-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.kpop.group",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-ppl-003",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.ban.ki.moon",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 유명 인물 (People) - 중간 (5)
  {
    id: "kr-ppl-005",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.director",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-ppl-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.kim.yuna",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-ppl-007",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.korean.inventor",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-ppl-008",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.son.heung.min",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 유명 인물 (People) - 어려움 (3)
  {
    id: "kr-ppl-010",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.independence.activist",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-ppl-011",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.poet",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 자연 및 환경 (Nature) - 쉬움 (4)
  {
    id: "kr-nat-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.national.flower",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-nat-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.seasons",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-nat-003",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.hallasan",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "kr-nat-004",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.EASY,
    image:
      "https://img.freepik.com/free-photo/amazing-view-green-cliff-near-sea-azores-archipelago-portugal_181624-48407.jpg?t=st=1742124985~exp=1742128585~hmac=0466d40accdb9354d3e5e4db4456f6974039c8087859f8f1f43fdf938b9da52b&w=600&h=400",
    translationKey: "quiz.kr.jeju",
    correctOptionIndex: 2,
  } as ImageQuiz,

  // 자연 및 환경 (Nature) - 중간 (4)
  {
    id: "kr-nat-005",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.dmz",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-nat-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.national.parks",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-nat-007",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.endangered",
    correctAnswer: true,
  } as TrueFalseQuiz,

  {
    id: "kr-nat-008",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    image: "https://images.unsplash.com/photo-1478071735433-5d8f19ad0fca?q=80&w=600&h=400&auto=format&fit=crop",
    translationKey: "quiz.kr.seoraksan",
    correctOptionIndex: 3,
  } as ImageQuiz,

  // 자연 및 환경 (Nature) - 어려움 (2)
  {
    id: "kr-nat-009",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.tidal.range",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-nat-010",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.natural.features.multiple",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 경제 및 정치 (Economy) - 쉬움 (3)
  {
    id: "kr-eco-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.currency",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.companies",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-003",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.samsung",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 경제 및 정치 (Economy) - 중간 (6)
  {
    id: "kr-eco-004",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.government",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-005",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.chaebol",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-006",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.export",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-007",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.economic.growth",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-008",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.g20",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 경제 및 정치 (Economy) - 어려움 (3)
  {
    id: "kr-eco-010",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.trade.agreements",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-011",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.political.system",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  {
    id: "kr-eco-012",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.economic.sectors.tf",
    correctAnswer: true,
  } as TrueFalseQuiz,
];

export default koreaQuizzes;
