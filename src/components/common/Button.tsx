import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  style,
  textStyle,
  onPress,
}) => {
  const { theme } = useTheme();

  // 버튼 크기별 스타일
  const sizeStyles: Record<ButtonSize, { button: ViewStyle; text: TextStyle }> = {
    small: {
      button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
      },
      text: {
        fontSize: 13,
      },
    },
    medium: {
      button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
      },
      text: {
        fontSize: 15,
      },
    },
    large: {
      button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      },
      text: {
        fontSize: 16,
      },
    },
  };

  // 버튼 배리언트별 스타일
  const getVariantStyles = (variant: ButtonVariant, theme: Theme) => {
    switch (variant) {
      case "primary":
        return {
          button: {
            backgroundColor: theme.colors.brandMain,
            borderWidth: 0,
          },
          text: {
            color: theme.colors.backgroundLight,
          },
        };
      case "secondary":
        return {
          button: {
            backgroundColor: theme.colors.brandSecondary,
            borderWidth: 0,
          },
          text: {
            color: theme.colors.backgroundLight,
          },
        };
      case "outline":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: theme.colors.brandMain,
          },
          text: {
            color: theme.colors.brandMain,
          },
        };
      case "ghost":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 0,
          },
          text: {
            color: theme.colors.brandMain,
          },
        };
      case "danger":
        return {
          button: {
            backgroundColor: theme.colors.error,
            borderWidth: 0,
          },
          text: {
            color: theme.colors.backgroundLight,
          },
        };
      default:
        return {
          button: {},
          text: {},
        };
    }
  };

  // 비활성화 상태 스타일
  const disabledStyles = {
    button: {
      backgroundColor: theme.colors.textDisabledLight,
      borderColor: theme.colors.textDisabledLight,
      opacity: 0.6,
    },
    text: {
      color: theme.colors.textDisabled,
    },
  };

  const variantStyles = getVariantStyles(variant, theme);
  const buttonSizeStyle = sizeStyles[size];

  const buttonStyles = [
    styles.button,
    buttonSizeStyle.button,
    variantStyles.button,
    fullWidth && styles.fullWidth,
    (disabled || loading) && disabledStyles.button,
    style,
  ];

  const textStyles = [
    styles.text,
    buttonSizeStyle.text,
    variantStyles.text,
    (disabled || loading) && disabledStyles.text,
    textStyle,
  ];

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={buttonStyles} onPress={handlePress} activeOpacity={0.7} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "outline" || variant === "ghost" ? theme.colors.brandMain : theme.colors.backgroundLight}
        />
      ) : (
        <View style={styles.contentContainer}>
          {startIcon && <View style={styles.startIcon}>{startIcon}</View>}
          {typeof children === "string" ? <Text style={textStyles}>{children}</Text> : children}
          {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  startIcon: {
    marginRight: 8,
  },
  endIcon: {
    marginLeft: 8,
  },
});

export default Button;
