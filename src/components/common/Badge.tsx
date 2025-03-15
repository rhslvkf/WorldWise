import React from "react";
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

interface BadgeProps {
  title: string;
  type?: "default" | "success" | "warning" | "error" | "info" | "continent";
  continent?: "asia" | "europe" | "northAmerica" | "southAmerica" | "africa" | "oceania";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  unlocked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const BadgeContainer = styled(TouchableOpacity)<{
  type: string;
  size: string;
  disabled: boolean;
  unlocked: boolean;
  continent?: string;
  theme: Theme;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme, size }) => {
    if (size === "small") return theme.borderRadius.sm;
    if (size === "large") return theme.borderRadius.lg;
    return theme.borderRadius.md;
  }}px;
  padding-vertical: ${({ theme, size }) => {
    if (size === "small") return theme.spacing.xs;
    if (size === "large") return theme.spacing.md;
    return theme.spacing.sm;
  }}px;
  padding-horizontal: ${({ theme, size }) => {
    if (size === "small") return theme.spacing.sm;
    if (size === "large") return theme.spacing.lg;
    return theme.spacing.md;
  }}px;
  opacity: ${({ disabled, unlocked }) => {
    if (disabled) return 0.5;
    if (!unlocked) return 0.7;
    return 1;
  }};
  background-color: ${({ theme, type, continent, unlocked }) => {
    if (!unlocked) return theme.colors.textDisabled;

    if (type === "continent" && continent) {
      switch (continent) {
        case "asia":
          return `${theme.colors.asia}30`;
        case "europe":
          return `${theme.colors.europe}30`;
        case "northAmerica":
          return `${theme.colors.northAmerica}30`;
        case "southAmerica":
          return `${theme.colors.southAmerica}30`;
        case "africa":
          return `${theme.colors.africa}30`;
        case "oceania":
          return `${theme.colors.oceania}30`;
        default:
          return `${theme.colors.brandMain}30`;
      }
    }

    switch (type) {
      case "success":
        return `${theme.colors.success}30`;
      case "warning":
        return `${theme.colors.warning}30`;
      case "error":
        return `${theme.colors.error}30`;
      case "info":
        return `${theme.colors.info}30`;
      default:
        return `${theme.colors.brandMain}30`;
    }
  }};
  border-width: 1px;
  border-color: ${({ theme, type, continent, unlocked }) => {
    if (!unlocked) return theme.colors.textDisabled;

    if (type === "continent" && continent) {
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

    switch (type) {
      case "success":
        return theme.colors.success;
      case "warning":
        return theme.colors.warning;
      case "error":
        return theme.colors.error;
      case "info":
        return theme.colors.info;
      default:
        return theme.colors.brandMain;
    }
  }};
`;

const BadgeText = styled.Text<{
  type: string;
  size: string;
  unlocked: boolean;
  continent?: string;
  theme: Theme;
}>`
  font-size: ${({ theme, size }) => {
    if (size === "small") return theme.typography.fontSize.bodySmall;
    if (size === "large") return theme.typography.fontSize.bodyLarge;
    return theme.typography.fontSize.bodyMedium;
  }}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme, type, continent, unlocked }) => {
    if (!unlocked) return theme.colors.textDisabled;

    if (type === "continent" && continent) {
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

    switch (type) {
      case "success":
        return theme.colors.success;
      case "warning":
        return theme.colors.warning;
      case "error":
        return theme.colors.error;
      case "info":
        return theme.colors.info;
      default:
        return theme.colors.brandMain;
    }
  }};
  margin-left: ${({ theme }) => theme.spacing.xs}px;
`;

const IconContainer = styled.View`
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;

export const Badge: React.FC<BadgeProps> = ({
  title,
  type = "default",
  continent,
  size = "medium",
  disabled = false,
  unlocked = true,
  onPress,
  style,
  textStyle,
  icon,
}) => {
  const { theme } = useTheme();

  return (
    <BadgeContainer
      type={type}
      size={size}
      disabled={disabled}
      unlocked={unlocked}
      continent={continent}
      theme={theme}
      onPress={onPress}
      disabled={disabled || !onPress}
      style={style}
      activeOpacity={onPress ? 0.7 : 1}
    >
      {icon && <IconContainer>{icon}</IconContainer>}
      <BadgeText type={type} size={size} unlocked={unlocked} continent={continent} theme={theme} style={textStyle}>
        {title}
      </BadgeText>
    </BadgeContainer>
  );
};

export default Badge;
