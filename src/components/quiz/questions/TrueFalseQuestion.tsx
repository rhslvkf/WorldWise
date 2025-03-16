import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import { TrueFalseQuiz } from "../../../types/quiz";
import { Ionicons } from "@expo/vector-icons";

interface TrueFalseQuestionProps {
  quiz: TrueFalseQuiz;
  onAnswer: (answer: boolean) => void;
  isAnswered: boolean;
  selectedAnswer?: boolean;
  correctAnswer: boolean;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({
  quiz,
  onAnswer,
  isAnswered,
  selectedAnswer,
  correctAnswer,
}) => {
  const { theme } = useTheme();

  const renderOption = (value: boolean, label: string, iconName: any) => {
    // 선택된 옵션인지 확인
    const isSelected = selectedAnswer === value;

    // 정답 여부 확인 (문제 답변 후)
    const isCorrect = isAnswered && value === correctAnswer;
    const isWrong = isAnswered && isSelected && value !== correctAnswer;

    // 배경색 결정
    let backgroundColor = theme.colors.backgroundSecondary;
    let borderColor = theme.colors.backgroundSecondary;
    let textColor = theme.colors.textSecondary;
    let iconColor = theme.colors.textSecondary;

    if (isSelected) {
      backgroundColor = theme.colors.brandMain + "10";
      borderColor = theme.colors.brandMain;
      textColor = theme.colors.brandMain;
      iconColor = theme.colors.brandMain;
    }

    if (isCorrect) {
      backgroundColor = theme.colors.success + "20";
      borderColor = theme.colors.success;
      textColor = theme.colors.success;
      iconColor = theme.colors.success;
    }

    if (isWrong) {
      backgroundColor = theme.colors.error + "20";
      borderColor = theme.colors.error;
      textColor = theme.colors.error;
      iconColor = theme.colors.error;
    }

    return (
      <TouchableOpacity
        style={[styles.option, { backgroundColor, borderColor }]}
        onPress={() => !isAnswered && onAnswer(value)}
        disabled={isAnswered}
      >
        <Ionicons name={iconName} size={28} color={iconColor} />
        <Text style={[styles.optionText, { color: textColor }]}>{label}</Text>

        {isAnswered && isCorrect && (
          <View style={styles.resultIcon}>
            <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />
          </View>
        )}

        {isAnswered && isWrong && (
          <View style={styles.resultIcon}>
            <Ionicons name="close-circle" size={24} color={theme.colors.error} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {renderOption(true, "O", "checkmark-circle-outline")}
        {renderOption(false, "X", "close-circle-outline")}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  option: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    position: "relative",
  },
  optionText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  resultIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
  },
});

export default TrueFalseQuestion;
