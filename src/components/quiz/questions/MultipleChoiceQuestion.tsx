import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import { MultipleChoiceQuiz } from "../../../types/quiz";
import { Ionicons } from "@expo/vector-icons";

interface MultipleChoiceQuestionProps {
  quiz: MultipleChoiceQuiz;
  options: string[];
  onAnswer: (selectedIndex: number) => void;
  isAnswered: boolean;
  selectedIndex?: number;
  correctIndex: number;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  quiz,
  options,
  onAnswer,
  isAnswered,
  selectedIndex,
  correctIndex,
}) => {
  const { theme } = useTheme();

  const renderOption = (option: string, index: number) => {
    // 선택된 옵션인지 확인
    const isSelected = selectedIndex === index;

    // 정답 여부 확인 (문제 답변 후)
    const isCorrect = isAnswered && index === correctIndex;
    const isWrong = isAnswered && isSelected && index !== correctIndex;

    // 옵션 스타일 결정
    let optionStyle = [
      styles.option,
      { backgroundColor: theme.colors.surface, borderColor: theme.colors.backgroundSecondary },
    ];

    if (isSelected) {
      optionStyle.push({
        borderColor: theme.colors.brandMain,
        backgroundColor: theme.colors.brandMain + "10",
      });
    }

    if (isCorrect) {
      optionStyle.push({
        borderColor: theme.colors.success,
        backgroundColor: theme.colors.success + "20",
      });
    }

    if (isWrong) {
      optionStyle.push({
        borderColor: theme.colors.error,
        backgroundColor: theme.colors.error + "20",
      });
    }

    return (
      <TouchableOpacity
        key={index}
        style={optionStyle}
        onPress={() => !isAnswered && onAnswer(index)}
        disabled={isAnswered}
      >
        <View style={styles.optionContent}>
          <View
            style={[
              styles.optionIndex,
              {
                backgroundColor: isSelected ? theme.colors.brandMain : theme.colors.backgroundSecondary,
                borderColor: isSelected ? theme.colors.brandMain : theme.colors.backgroundSecondary,
              },
            ]}
          >
            <Text style={[styles.optionIndexText, { color: isSelected ? "#FFFFFF" : theme.colors.textSecondary }]}>
              {String.fromCharCode(65 + index)}
            </Text>
          </View>
          <Text style={[styles.optionText, { color: theme.colors.text }]}>{option}</Text>
        </View>

        {isAnswered && (
          <View style={styles.resultIcon}>
            {isCorrect && <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />}
            {isWrong && <Ionicons name="close-circle" size={24} color={theme.colors.error} />}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{options.map((option, index) => renderOption(option, index))}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  option: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  optionContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  optionIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  optionIndexText: {
    fontSize: 14,
    fontWeight: "600",
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  resultIcon: {
    marginLeft: 8,
  },
});

export default MultipleChoiceQuestion;
