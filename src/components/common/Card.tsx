import React from "react";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface CardProps extends ViewProps {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "small" | "medium" | "large";
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, variant = "default", padding = "medium", onPress, ...props }) => {
  const { theme } = useTheme();

  // 패딩 스타일 설정
  const getPadding = () => {
    switch (padding) {
      case "none":
        return 0;
      case "small":
        return theme.spacing.sm;
      case "medium":
        return theme.spacing.md;
      case "large":
        return theme.spacing.lg;
      default:
        return theme.spacing.md;
    }
  };

  // 카드 스타일 설정
  const getCardStyle = () => {
    switch (variant) {
      case "default":
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 0,
          ...theme.shadow.light,
        };
      case "outlined":
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.backgroundSecondary,
          elevation: 0,
          shadowOpacity: 0,
        };
      case "elevated":
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 0,
          ...theme.shadow.medium,
        };
      default:
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 0,
          ...theme.shadow.light,
        };
    }
  };

  const cardStyle = getCardStyle();
  const paddingValue = getPadding();

  if (onPress) {
    return (
      <TouchableCardContainer
        style={{
          ...cardStyle,
          padding: paddingValue,
          borderRadius: theme.borderRadius.lg,
        }}
        activeOpacity={0.8}
        onPress={onPress}
        {...props}
      >
        {children}
      </TouchableCardContainer>
    );
  }

  return (
    <CardContainer
      style={{
        ...cardStyle,
        padding: paddingValue,
        borderRadius: theme.borderRadius.lg,
      }}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.View`
  margin-vertical: ${({ theme }) => theme.spacing.sm}px;
  overflow: hidden;
`;

const TouchableCardContainer = styled.TouchableOpacity`
  margin-vertical: ${({ theme }) => theme.spacing.sm}px;
  overflow: hidden;
`;
