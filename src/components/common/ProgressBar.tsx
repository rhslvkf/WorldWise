import React from "react";
import { View, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

interface ProgressBarProps {
  progress: number; // 0부터 1 사이의 값 (0% ~ 100%)
  height?: number;
  width?: number | string;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  showLabel?: boolean;
  label?: string;
  continent?: "asia" | "europe" | "northAmerica" | "southAmerica" | "africa" | "oceania";
}

const Container = styled.View<{ width: number | string; style?: ViewStyle }>`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  margin-vertical: ${({ theme }) => theme.spacing.sm}px;
`;

const BarContainer = styled.View<{ height: number; backgroundColor: string }>`
  height: ${({ height }) => height}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ height }) => height / 2}px;
  overflow: hidden;
`;

const Progress = styled.View<{ width: string; height: number; color: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  border-radius: ${({ height }) => height / 2}px;
`;

const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const PercentageText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall}px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 8,
  width = "100%",
  color,
  backgroundColor,
  style,
  showLabel = false,
  label = "진행률",
  continent,
}) => {
  const { theme } = useTheme();

  // 진행률 값 제한 (0~1)
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const progressPercentage = `${Math.round(safeProgress * 100)}%`;

  // 색상 선택 로직
  const getColor = () => {
    if (color) return color;

    if (continent) {
      switch (continent) {
        case "asia":
          return theme.colors.asia;
        case "europe":
          return theme.colors.europe;
        case "northAmerica":
          return theme.colors.northAmerica;
        case "southAmerica":
          return theme.colors.southAmerica;
        case "africa":
          return theme.colors.africa;
        case "oceania":
          return theme.colors.oceania;
        default:
          return theme.colors.brandMain;
      }
    }

    return theme.colors.brandMain;
  };

  const bgColor = backgroundColor || `${getColor()}30`;
  const progressColor = getColor();

  return (
    <Container width={width} style={style} theme={theme}>
      {showLabel && (
        <LabelContainer theme={theme}>
          <Label theme={theme}>{label}</Label>
          <PercentageText theme={theme}>{progressPercentage}</PercentageText>
        </LabelContainer>
      )}
      <BarContainer height={height} backgroundColor={bgColor}>
        <Progress width={progressPercentage} height={height} color={progressColor} />
      </BarContainer>
    </Container>
  );
};

export default ProgressBar;
