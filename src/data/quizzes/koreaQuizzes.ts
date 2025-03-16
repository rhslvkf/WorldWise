import {
  Quiz,
  QuizType,
  QuizCategory,
  Difficulty,
  MultipleChoiceQuiz,
  TrueFalseQuiz,
  ImageQuiz,
  MatchingQuiz,
} from "../../types/quiz";

/**
 * 한국 관련 퀴즈 문항 데이터
 */
const koreaQuizzes: Quiz[] = [
  // 1. 객관식 - 기본 지리 (수도)
  {
    id: "kr-quiz-001",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.capital",
    correctOptionIndex: 0,
  } as MultipleChoiceQuiz,

  // 2. 객관식 - 문화 (전통 의상)
  {
    id: "kr-quiz-002",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.hanbok",
    correctOptionIndex: 1,
  } as MultipleChoiceQuiz,

  // 3. 객관식 - 음식 (대표 음식)
  {
    id: "kr-quiz-003",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.FOOD,
    difficulty: Difficulty.EASY,
    translationKey: "quiz.kr.food",
    correctOptionIndex: 2,
  } as MultipleChoiceQuiz,

  // 4. 객관식 - 역사 (조선 왕조)
  {
    id: "kr-quiz-004",
    countryId: "KR",
    type: QuizType.MULTIPLE_CHOICE,
    category: QuizCategory.HISTORY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.joseon",
    correctOptionIndex: 3,
  } as MultipleChoiceQuiz,

  // 5. O/X - 경제 (삼성 본사)
  {
    id: "kr-quiz-005",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.ECONOMY,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.samsung",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 6. O/X - 자연 환경 (한라산)
  {
    id: "kr-quiz-006",
    countryId: "KR",
    type: QuizType.TRUE_FALSE,
    category: QuizCategory.NATURE,
    difficulty: Difficulty.MEDIUM,
    translationKey: "quiz.kr.hallasan",
    correctAnswer: true,
  } as TrueFalseQuiz,

  // 7. 이미지 퀴즈 - 문화 (태권도)
  {
    id: "kr-quiz-007",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.EASY,
    image: "images/taekwondo.jpg",
    translationKey: "quiz.kr.taekwondo",
    correctOptionIndex: 0,
  } as ImageQuiz,

  // 8. 이미지 퀴즈 - 유명 인물 (세종대왕)
  {
    id: "kr-quiz-008",
    countryId: "KR",
    type: QuizType.IMAGE_QUIZ,
    category: QuizCategory.PEOPLE,
    difficulty: Difficulty.MEDIUM,
    image: "images/sejong.jpg",
    translationKey: "quiz.kr.sejong",
    correctOptionIndex: 1,
  } as ImageQuiz,

  // 9. 매칭 퀴즈 - 문화 (한국 명절과 특징)
  {
    id: "kr-quiz-009",
    countryId: "KR",
    type: QuizType.MATCHING,
    category: QuizCategory.CULTURE,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.festivals",
    correctPairs: [
      [0, 2],
      [1, 0],
      [2, 1],
      [3, 3],
    ],
  } as MatchingQuiz,

  // 10. 매칭 퀴즈 - 지리 (한국 도시와 특징)
  {
    id: "kr-quiz-010",
    countryId: "KR",
    type: QuizType.MATCHING,
    category: QuizCategory.GEOGRAPHY,
    difficulty: Difficulty.HARD,
    translationKey: "quiz.kr.cities",
    correctPairs: [
      [0, 1],
      [1, 3],
      [2, 0],
      [3, 2],
    ],
  } as MatchingQuiz,
];

export default koreaQuizzes;
