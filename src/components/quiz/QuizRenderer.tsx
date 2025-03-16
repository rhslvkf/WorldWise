import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Quiz, QuizType, MultipleChoiceQuiz, TrueFalseQuiz, ImageQuiz } from "../../types/quiz";
import { MultipleChoiceQuestion, TrueFalseQuestion, ImageQuestion } from "./questions";

interface QuizRendererProps {
  quiz: Quiz;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizRenderer: React.FC<QuizRendererProps> = ({ quiz, onAnswer }) => {
  const theme = useTheme();
  const [selectedAnswer, setSelectedAnswer] = useState<number | boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (answer: number | boolean) => {
    if (hasAnswered) return;

    let isCorrect = false;

    switch (quiz.type) {
      case QuizType.MULTIPLE_CHOICE:
        isCorrect = Number(answer) === (quiz as MultipleChoiceQuiz).correctOptionIndex;
        setSelectedAnswer(answer as number);
        break;
      case QuizType.TRUE_FALSE:
        isCorrect = answer === (quiz as TrueFalseQuiz).correctAnswer;
        setSelectedAnswer(answer as boolean);
        break;
      case QuizType.IMAGE_QUIZ:
        isCorrect = Number(answer) === (quiz as ImageQuiz).correctOptionIndex;
        setSelectedAnswer(answer as number);
        break;
    }

    setHasAnswered(true);
    onAnswer(isCorrect);
  };

  const renderQuestion = () => {
    // QuizItem 번역 정보를 가져오는 로직이 필요함
    // 현재 구현에서는 번역된 질문과 옵션이 이미 포함되어 있다고 가정

    switch (quiz.type) {
      case QuizType.MULTIPLE_CHOICE: {
        const typedQuiz = quiz as MultipleChoiceQuiz;
        // 실제 구현에서는 i18n에서 가져온 옵션 사용
        const options = ["옵션 1", "옵션 2", "옵션 3", "옵션 4"];
        return (
          <MultipleChoiceQuestion
            quiz={typedQuiz}
            options={options}
            onAnswer={handleAnswer}
            isAnswered={hasAnswered}
            selectedIndex={selectedAnswer as number}
            correctIndex={typedQuiz.correctOptionIndex}
          />
        );
      }
      case QuizType.TRUE_FALSE: {
        const typedQuiz = quiz as TrueFalseQuiz;
        return (
          <TrueFalseQuestion
            quiz={typedQuiz}
            onAnswer={handleAnswer}
            isAnswered={hasAnswered}
            selectedAnswer={selectedAnswer as boolean}
            correctAnswer={typedQuiz.correctAnswer}
          />
        );
      }
      case QuizType.IMAGE_QUIZ: {
        const typedQuiz = quiz as ImageQuiz;
        // 실제 구현에서는 i18n에서 가져온 옵션 사용
        const options = ["옵션 1", "옵션 2", "옵션 3", "옵션 4"];
        return (
          <ImageQuestion
            quiz={typedQuiz}
            options={options}
            onAnswer={handleAnswer}
            isAnswered={hasAnswered}
            selectedIndex={selectedAnswer as number}
            correctIndex={typedQuiz.correctOptionIndex}
          />
        );
      }
      default:
        return <Text>지원되지 않는 퀴즈 유형입니다.</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={[styles.question, { color: theme.colors.text }]}>
          {quiz.translationKey} {/* 실제 구현에서는 i18n으로 번역된 텍스트 사용 */}
        </Text>
      </View>
      {renderQuestion()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
  },
});

export default QuizRenderer;
