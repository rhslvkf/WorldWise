import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export type CardVariant = "elevated" | "outlined" | "filled";

interface CardBaseProps {
  children: React.ReactNode;
  variant?: CardVariant;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

type CardButtonProps = CardBaseProps &
  TouchableOpacityProps & {
    onPress: () => void;
  };

type CardProps = CardBaseProps | CardButtonProps;

export const Card: React.FC<CardProps> = (props) => {
  const { theme } = useTheme();
  const { children, variant = "elevated", style, contentStyle } = props;

  const isButton = "onPress" in props;

  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "elevated":
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 0,
          ...theme.shadow.medium,
        };
      case "outlined":
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.textDisabledLight,
        };
      case "filled":
        return {
          backgroundColor: theme.colors.backgroundLightSecondary,
          borderWidth: 0,
        };
      default:
        return {};
    }
  };

  const cardStyle = [
    styles.card,
    {
      borderRadius: theme.borderRadius.md,
    },
    getVariantStyle(),
    style,
  ];

  const content = <View style={[styles.content, contentStyle]}>{children}</View>;

  if (isButton) {
    const { onPress, disabled, activeOpacity = 0.7, ...otherProps } = props as CardButtonProps;
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity}
        {...otherProps}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{content}</View>;
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
  content: {
    padding: 16,
  },
});

export default Card;
