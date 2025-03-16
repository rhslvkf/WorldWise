import koreaQuizzes from "./koreaQuizzes";
import { Quiz } from "../../types/quiz";

/**
 * 모든 퀴즈 문항 데이터
 */
const allQuizzes: Quiz[] = [
  ...koreaQuizzes,
  // 다른 국가의 퀴즈 데이터를 추가할 수 있습니다.
];

export default allQuizzes;
