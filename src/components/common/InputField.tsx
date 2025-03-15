import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, TextInputProps } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerStyle?: object;
}

const Container = styled.View<{ hasError: boolean }>`
  margin-vertical: ${({ theme }) => theme.spacing.sm}px;
  width: 100%;
`;

const Label = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMedium}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.bodyMedium}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const InputContainer = styled.View<{ isFocused: boolean; hasError: boolean }>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, isFocused, hasError }) => {
    if (hasError) return `${theme.colors.error}10`;
    return isFocused ? `${theme.colors.brandMain}10` : theme.colors.backgroundSecondary;
  }};
  border-width: 1px;
  border-color: ${({ theme, isFocused, hasError }) => {
    if (hasError) return theme.colors.error;
    return isFocused ? theme.colors.brandMain : theme.colors.backgroundSecondary;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
  padding-vertical: ${({ theme }) => theme.spacing.sm}px;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMedium}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.bodyMedium}px;
  color: ${({ theme }) => theme.colors.text};
`;

const IconContainer = styled.View`
  margin-horizontal: ${({ theme }) => theme.spacing.xs}px;
`;

const RightIconContainer = styled(TouchableOpacity)`
  margin-horizontal: ${({ theme }) => theme.spacing.xs}px;
`;

const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

const HelperText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.bodySmall}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.bodySmall}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerStyle,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;

  return (
    <Container style={containerStyle} hasError={hasError}>
      {label && <Label>{label}</Label>}
      <InputContainer isFocused={isFocused} hasError={hasError}>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <StyledInput
          placeholderTextColor={theme.colors.textDisabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon && <RightIconContainer onPress={onRightIconPress}>{rightIcon}</RightIconContainer>}
      </InputContainer>
      {hasError && <ErrorText>{error}</ErrorText>}
      {!hasError && helperText && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default InputField;
