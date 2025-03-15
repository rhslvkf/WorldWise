import React from "react";
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

export type BadgeType = "default" | "success" | "warning" | "error" | "info" | "continent";
export type BadgeSize = "small" | "medium" | "large";
export type ContinentType = "asia" | "europe" | "africa" | "northAmerica" | "southAmerica" | "oceania";

interface BadgeProps {
  title: string;
  type?: BadgeType;
  size?: BadgeSize;
  continent?: ContinentType;
  disabled?: boolean;
  unlocked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

interface StyledBadgeProps {
  type: BadgeType;
  size: BadgeSize;
  disabled: boolean;
  unlocked: boolean;
  continent?: ContinentType;
  theme: Theme;
}

interface StyledBadgeTextProps {
  type: BadgeType;
  size: BadgeSize;
  unlocked: boolean;
  continent?: ContinentType;
  theme: Theme;
}

const BadgeContainer = styled(TouchableOpacity)<StyledBadgeProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme, size }: { theme: Theme; size: BadgeSize }) => {
    if (size === "small") return theme.borderRadius.sm;
    if (size === "large") return theme.borderRadius.lg;
    return theme.borderRadius.md;
  }}px;
  padding-vertical: ${({ theme, size }: { theme: Theme; size: BadgeSize }) => {
    if (size === "small") return theme.spacing.xs;
    if (size === "large") return theme.spacing.md;
    return theme.spacing.sm;
  }}px;
  padding-horizontal: ${({ theme, size }: { theme: Theme; size: BadgeSize }) => {
    if (size === "small") return theme.spacing.sm;
    if (size === "large") return theme.spacing.lg;
    return theme.spacing.md;
  }}px;
  opacity: ${({ disabled, unlocked }: { disabled: boolean; unlocked: boolean }) => {
    if (disabled) return 0.5;
    if (!unlocked) return 0.7;
    return 1;
  }};
  background-color: ${({
    theme,
    type,
    continent,
    unlocked,
  }: {
    theme: Theme;
    type: BadgeType;
    continent?: ContinentType;
    unlocked: boolean;
  }) => {
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
  border-color: ${({
    theme,
    type,
    continent,
    unlocked,
  }: {
    theme: Theme;
    type: BadgeType;
    continent?: ContinentType;
    unlocked: boolean;
  }) => {
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

const BadgeText = styled.Text<StyledBadgeTextProps>`
  font-size: ${({ theme, size }: { theme: Theme; size: BadgeSize }) => {
    if (size === "small") return theme.typography.fontSize.bodySmall;
    if (size === "large") return theme.typography.fontSize.bodyLarge;
    return theme.typography.fontSize.bodyMedium;
  }}px;
  font-weight: ${({ theme }: { theme: Theme }) => theme.typography.fontWeight.medium};
  color: ${({
    theme,
    type,
    continent,
    unlocked,
  }: {
    theme: Theme;
    type: BadgeType;
    continent?: ContinentType;
    unlocked: boolean;
  }) => {
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
  margin-left: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
`;

const IconContainer = styled.View`
  margin-right: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
`;

const RightIconContainer = styled.View`
  margin-left: ${({ theme }: { theme: Theme }) => theme.spacing.xs}px;
`;

export const Badge: React.FC<BadgeProps> = ({
  title,
  type = "default",
  size = "medium",
  continent,
  disabled = false,
  unlocked = true,
  onPress,
  style,
  textStyle,
  rightIcon,
  leftIcon,
}) => {
  const { theme } = useTheme();

  const getBadgeColors = () => {
    if (type === "continent" && continent) {
      return {
        background: unlocked ? `${theme.colors[continent]}30` : theme.colors.textDisabled,
        text: unlocked ? theme.colors[continent] : theme.colors.textDisabled,
      };
    }

    switch (type) {
      case "success":
        return {
          background: `${theme.colors.success}20`,
          text: theme.colors.success,
        };
      case "warning":
        return {
          background: `${theme.colors.warning}20`,
          text: theme.colors.warning,
        };
      case "error":
        return {
          background: `${theme.colors.error}20`,
          text: theme.colors.error,
        };
      case "info":
        return {
          background: `${theme.colors.info}20`,
          text: theme.colors.info,
        };
      default:
        return {
          background: theme.colors.backgroundSecondary,
          text: theme.colors.textSecondary,
        };
    }
  };

  const getBadgeSize = () => {
    switch (size) {
      case "small":
        return {
          paddingHorizontal: 8,
          paddingVertical: 2,
          fontSize: 10,
          borderRadius: 4,
        };
      case "large":
        return {
          paddingHorizontal: 12,
          paddingVertical: 6,
          fontSize: 14,
          borderRadius: 8,
        };
      case "medium":
      default:
        return {
          paddingHorizontal: 10,
          paddingVertical: 4,
          fontSize: 12,
          borderRadius: 6,
        };
    }
  };

  const colors = getBadgeColors();
  const sizeStyles = getBadgeSize();

  return (
    <BadgeContainer
      type={type}
      size={size}
      disabled={disabled}
      unlocked={unlocked}
      continent={continent}
      theme={theme}
      style={style}
      onPress={onPress}
      activeOpacity={onPress ? 0.6 : 1}
    >
      {leftIcon && <IconContainer theme={theme}>{leftIcon}</IconContainer>}
      <BadgeText theme={theme} type={type} size={size} unlocked={unlocked} continent={continent} style={textStyle}>
        {title}
      </BadgeText>
      {rightIcon && <RightIconContainer theme={theme}>{rightIcon}</RightIconContainer>}
    </BadgeContainer>
  );
};

export default Badge;
