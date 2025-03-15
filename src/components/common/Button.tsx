import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large";
  label: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  label,
  isLoading = false,
  icon,
  fullWidth = false,
  ...props
}) => {
  const { theme } = useTheme();

  // 버튼 스타일 설정
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: theme.colors.brandMain,
          borderColor: theme.colors.brandMain,
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          borderColor: theme.colors.brandMain,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          borderColor: "transparent",
        };
      default:
        return {
          backgroundColor: theme.colors.brandMain,
          borderColor: theme.colors.brandMain,
        };
    }
  };

  // 텍스트 스타일 설정
  const getTextStyle = () => {
    switch (variant) {
      case "primary":
        return {
          color: "#FFFFFF",
        };
      case "secondary":
      case "text":
        return {
          color: theme.colors.brandMain,
        };
      default:
        return {
          color: "#FFFFFF",
        };
    }
  };

  // 사이즈별 스타일 설정
  const getSizeStyle = () => {
    switch (size) {
      case "small":
        return {
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.md,
          fontSize: theme.typography.fontSize.bodySmall,
        };
      case "medium":
        return {
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.lg,
          fontSize: theme.typography.fontSize.bodyMedium,
        };
      case "large":
        return {
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.xl,
          fontSize: theme.typography.fontSize.bodyLarge,
        };
      default:
        return {
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.lg,
          fontSize: theme.typography.fontSize.bodyMedium,
        };
    }
  };

  const buttonStyle = getButtonStyle();
  const textStyle = getTextStyle();
  const sizeStyle = getSizeStyle();

  return (
    <ButtonContainer
      activeOpacity={0.8}
      fullWidth={fullWidth}
      style={[
        {
          backgroundColor: buttonStyle.backgroundColor,
          borderColor: buttonStyle.borderColor,
          borderWidth: variant === "text" ? 0 : 1,
          borderRadius: theme.borderRadius.md,
          paddingVertical: sizeStyle.paddingVertical,
          paddingHorizontal: sizeStyle.paddingHorizontal,
        },
        props.disabled && { opacity: 0.5 },
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={textStyle.color} size="small" />
      ) : (
        <ButtonContent>
          {icon && <IconContainer>{icon}</IconContainer>}
          <ButtonText
            style={{
              color: textStyle.color,
              fontSize: sizeStyle.fontSize,
              fontWeight: theme.typography.fontWeight.medium as any,
            }}
          >
            {label}
          </ButtonText>
        </ButtonContent>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(TouchableOpacity)<{ fullWidth?: boolean }>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => (props.fullWidth ? "stretch" : "flex-start")};
`;

const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.View`
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;

const ButtonText = styled.Text`
  text-align: center;
`;
