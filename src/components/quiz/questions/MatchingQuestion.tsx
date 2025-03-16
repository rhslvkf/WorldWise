import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "../../../contexts/ThemeContext";
import { MatchingQuiz } from "../../../types/quiz";
import { Ionicons } from "@expo/vector-icons";
import { useLocale } from "../../../contexts/LocaleContext";

interface MatchingQuestionProps {
  quiz: MatchingQuiz;
  pairs: string[];
  onAnswer: (selectedPairs: Array<[number, number]>) => void;
  isAnswered: boolean;
  selectedPairs?: Array<[number, number]>;
  correctPairs: Array<[number, number]>;
}

const MatchingQuestion: React.FC<MatchingQuestionProps> = ({
  quiz,
  pairs,
  onAnswer,
  isAnswered,
  selectedPairs = [],
  correctPairs,
}) => {
  const { theme } = useTheme();
  const { t } = useLocale();

  // 매칭 데이터 구성 - 왼쪽 항목과 오른쪽 항목으로 나눔
  const pairsCount = pairs.length / 2;
  const leftItems = pairs.slice(0, pairsCount);
  const rightItems = pairs.slice(pairsCount);

  // 사용자 선택 관리
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [userPairs, setUserPairs] = useState<Array<[number, number]>>(selectedPairs);

  // 정답 확인 여부
  const [showCorrect, setShowCorrect] = useState<boolean>(isAnswered);

  // 외부 상태 변경 시 반영
  useEffect(() => {
    if (selectedPairs.length > 0) {
      setUserPairs(selectedPairs);
    }
    setShowCorrect(isAnswered);
  }, [isAnswered, selectedPairs]);

  // 항목 선택 처리
  const handleItemSelect = (index: number, isLeft: boolean) => {
    if (isAnswered) return;

    if (isLeft) {
      // 왼쪽 항목 선택
      setSelectedLeft(index);
      return;
    }

    // 오른쪽 항목 선택 - 매칭 처리
    if (selectedLeft !== null) {
      // 이미 연결된 왼쪽 항목이면 해당 연결 제거
      const existingPairIndex = userPairs.findIndex((pair) => pair[0] === selectedLeft);

      // 새로운 페어 목록 생성
      let newPairs = [...userPairs];

      if (existingPairIndex >= 0) {
        // 기존 페어 제거
        newPairs.splice(existingPairIndex, 1);
      }

      // 새 페어 추가
      newPairs.push([selectedLeft, index]);
      setUserPairs(newPairs);
      onAnswer(newPairs);

      // 선택 초기화
      setSelectedLeft(null);
    }
  };

  // 연결선 정보 계산
  const getConnectionInfo = (leftIndex: number, rightIndex: number) => {
    // 사용자 선택, 정답 여부 확인
    const isUserSelected = userPairs.some((pair) => pair[0] === leftIndex && pair[1] === rightIndex);

    const isCorrect = correctPairs.some((pair) => pair[0] === leftIndex && pair[1] === rightIndex);

    const isUserCorrect = isUserSelected && isCorrect;
    const isUserWrong = isUserSelected && !isCorrect;

    // 연결선 색상 결정
    let connectionColor = "transparent";

    if (isUserSelected && !showCorrect) {
      connectionColor = theme.colors.brandMain;
    } else if (showCorrect) {
      if (isUserCorrect) {
        connectionColor = theme.colors.success;
      } else if (isUserWrong) {
        connectionColor = theme.colors.error;
      } else if (isCorrect) {
        // 정답이지만 사용자가 선택하지 않은 경우 (결과 화면에서만 표시)
        connectionColor = theme.colors.success + "80";
      }
    }

    return {
      isConnected: isUserSelected || (showCorrect && isCorrect),
      connectionColor,
    };
  };

  // 항목 렌더링
  const renderItem = (item: string, index: number, isLeft: boolean) => {
    // 해당 항목이 연결되어 있는지 확인
    const isConnected = userPairs.some((pair) => (isLeft ? pair[0] === index : pair[1] === index));

    // 현재 선택된 항목인지 확인
    const isSelected = isLeft && selectedLeft === index;

    // 스타일 결정
    let itemStyle = [
      styles.item,
      {
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.backgroundSecondary,
      },
    ];

    if (isSelected) {
      itemStyle.push({
        borderColor: theme.colors.brandMain,
        backgroundColor: theme.colors.brandMain + "10",
      });
    }

    if (isConnected) {
      itemStyle.push({
        borderColor: theme.colors.brandMain,
        backgroundColor: theme.colors.surface,
      });
    }

    return (
      <TouchableOpacity style={itemStyle} onPress={() => handleItemSelect(index, isLeft)} disabled={isAnswered}>
        <Text style={[styles.itemText, { color: theme.colors.text }]}>{item}</Text>
        {isLeft && <View style={styles.leftConnector} />}
        {!isLeft && <View style={styles.rightConnector} />}
      </TouchableOpacity>
    );
  };

  // 결과 확인 버튼
  const renderCheckButton = () => {
    // 모든 왼쪽 항목이 연결되었는지 확인
    const allConnected = leftItems.every((_, index) => userPairs.some((pair) => pair[0] === index));

    if (isAnswered || !allConnected) return null;

    return (
      <TouchableOpacity
        style={[styles.checkButton, { backgroundColor: theme.colors.brandMain }]}
        onPress={() => onAnswer(userPairs)}
      >
        <Text style={[styles.checkButtonText, { color: "#FFFFFF" }]}>{t("quiz.checkAnswer")}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.matchingContainer}>
        {/* 왼쪽 항목 */}
        <View style={styles.column}>
          {leftItems.map((item, index) => (
            <View key={`left-${index}`} style={styles.itemContainer}>
              {renderItem(item, index, true)}
            </View>
          ))}
        </View>

        {/* 연결선 영역 */}
        <View style={styles.connectorsContainer}>
          {leftItems.map((_, leftIndex) =>
            rightItems.map((_, rightIndex) => {
              const { isConnected, connectionColor } = getConnectionInfo(leftIndex, rightIndex);

              if (!isConnected) return null;

              return (
                <View
                  key={`connection-${leftIndex}-${rightIndex}`}
                  style={[
                    styles.connector,
                    {
                      backgroundColor: connectionColor,
                      top: leftIndex * 80 + 40,
                      height: 2,
                      width: "100%",
                      transform: [{ translateY: (rightIndex - leftIndex) * 40 }],
                    },
                  ]}
                />
              );
            })
          )}
        </View>

        {/* 오른쪽 항목 */}
        <View style={styles.column}>
          {rightItems.map((item, index) => (
            <View key={`right-${index}`} style={styles.itemContainer}>
              {renderItem(item, index, false)}
            </View>
          ))}
        </View>
      </View>

      {renderCheckButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
  },
  matchingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  column: {
    width: "42%",
  },
  connectorsContainer: {
    position: "absolute",
    width: "16%",
    left: "42%",
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  connector: {
    position: "absolute",
    height: 2,
  },
  itemContainer: {
    marginBottom: 16,
    height: 80,
    position: "relative",
  },
  item: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 60,
    justifyContent: "center",
    position: "relative",
  },
  itemText: {
    fontSize: 14,
    textAlign: "center",
  },
  leftConnector: {
    position: "absolute",
    right: -5,
    top: "50%",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: -5,
  },
  rightConnector: {
    position: "absolute",
    left: -5,
    top: "50%",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: -5,
  },
  checkButton: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  checkButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MatchingQuestion;
