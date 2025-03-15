import React from "react";
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

interface QuizOptionProps {
  text: string;
  selected?: boolean;
  correct?: boolean;
  incorrect?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  optionKey?: string | number;
}

const OptionContainer = styled(TouchableOpacity)<{
  selected: boolean;
  correct: boolean;
  incorrect: boolean;
  disabled: boolean;
  theme: Theme;
}>`
  width: 100%;
  padding-vertical: ${({ theme }) => theme.spacing.md}px;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;

  ${({ theme, selected, correct, incorrect, disabled }) => {
    if (disabled) {
      return `
        background-color: ${theme.colors.backgroundSecondary};
        border-color: ${theme.colors.backgroundSecondary};
        opacity: 0.7;
      `;
    }

    if (correct) {
      return `
        background-color: ${theme.colors.success}20;
        border-color: ${theme.colors.success};
      `;
    }

    if (incorrect) {
      return `
        background-color: ${theme.colors.error}20;
        border-color: ${theme.colors.error};
      `;
    }

    if (selected) {
      return `
        background-color: ${theme.colors.brandMain}20;
        border-color: ${theme.colors.brandMain};
      `;
    }

    return `
      background-color: ${theme.colors.background};
      border-color: ${theme.colors.backgroundSecondary};
    `;
  }}
`;

const OptionKey = styled.View<{
  selected: boolean;
  correct: boolean;
  incorrect: boolean;
  theme: Theme;
}>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.sm}px;

  ${({ theme, selected, correct, incorrect }) => {
    if (correct) {
      return `background-color: ${theme.colors.success};`;
    }

    if (incorrect) {
      return `background-color: ${theme.colors.error};`;
    }

    if (selected) {
      return `background-color: ${theme.colors.brandMain};`;
    }

    return `
      background-color: ${theme.colors.backgroundSecondary};
    `;
  }}
`;

const KeyText = styled.Text<{
  selected: boolean;
  correct: boolean;
  incorrect: boolean;
  theme: Theme;
}>`
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ selected, correct, incorrect, theme }) => {
    if (selected || correct || incorrect) {
      return theme.colors.backgroundLight;
    }
    return theme.colors.textSecondary;
  }};
`;

const OptionText = styled.Text<{
  selected: boolean;
  correct: boolean;
  incorrect: boolean;
  disabled: boolean;
  theme: Theme;
}>`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMedium}px;
  font-weight: ${({ selected, correct, incorrect, theme }) =>
    selected || correct || incorrect ? theme.typography.fontWeight.medium : theme.typography.fontWeight.regular};

  color: ${({ selected, correct, incorrect, disabled, theme }) => {
    if (disabled) {
      return theme.colors.textDisabled;
    }

    if (correct) {
      return theme.colors.success;
    }

    if (incorrect) {
      return theme.colors.error;
    }

    if (selected) {
      return theme.colors.brandMain;
    }

    return theme.colors.text;
  }};
`;

// 상태 아이콘 컨테이너
const StatusIconContainer = styled.View`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;

export const QuizOption: React.FC<QuizOptionProps> = ({
  text,
  selected = false,
  correct = false,
  incorrect = false,
  disabled = false,
  onPress,
  style,
  textStyle,
  optionKey,
}) => {
  const { theme } = useTheme();

  // 실제 옵션 키 표시 값 계산
  const displayKey = optionKey
    ? typeof optionKey === "number"
      ? String.fromCharCode(65 + optionKey) // A, B, C, D...
      : optionKey
    : "";

  return (
    <OptionContainer
      selected={selected}
      correct={correct}
      incorrect={incorrect}
      disabled={disabled}
      theme={theme}
      onPress={onPress}
      disabled={disabled || correct || incorrect || !onPress}
      activeOpacity={0.7}
      style={style}
    >
      {displayKey && (
        <OptionKey selected={selected} correct={correct} incorrect={incorrect} theme={theme}>
          <KeyText selected={selected} correct={correct} incorrect={incorrect} theme={theme}>
            {displayKey}
          </KeyText>
        </OptionKey>
      )}

      <OptionText
        selected={selected}
        correct={correct}
        incorrect={incorrect}
        disabled={disabled}
        theme={theme}
        style={textStyle}
      >
        {text}
      </OptionText>

      {/* 여기에 필요한 경우 정답/오답 아이콘 추가 가능 */}
      {(correct || incorrect) && (
        <StatusIconContainer theme={theme}>{/* 아이콘 컴포넌트가 있다면 사용할 수 있습니다 */}</StatusIconContainer>
      )}
    </OptionContainer>
  );
};

export default QuizOption;
