import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

const { width, height } = Dimensions.get("window");

interface AlertProps {
  visible: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  type?: "info" | "success" | "warning" | "error";
  autoClose?: boolean;
  autoCloseTime?: number;
}

// 스타일드 컴포넌트
const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AlertContainer = styled(Animated.View)`
  width: ${width * 0.85}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

const TitleContainer = styled.View<{ type: "info" | "success" | "warning" | "error" }>`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, type }) => {
    switch (type) {
      case "success":
        return theme.colors.success;
      case "warning":
        return theme.colors.warning;
      case "error":
        return theme.colors.error;
      default:
        return theme.colors.info;
    }
  }};
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const Title = styled.Text<{ type: "info" | "success" | "warning" | "error" }>`
  font-size: ${({ theme }) => theme.typography.fontSize.heading4}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme, type }) => {
    switch (type) {
      case "success":
        return theme.colors.success;
      case "warning":
        return theme.colors.warning;
      case "error":
        return theme.colors.error;
      default:
        return theme.colors.info;
    }
  }};
  text-align: center;
`;

const Message = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMedium}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.bodyMedium}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonContainer = styled.View`
  flex: 1;
  margin-horizontal: ${({ theme }) => theme.spacing.xs}px;
`;

const ConfirmButton = styled(TouchableOpacity)<{ type: "info" | "success" | "warning" | "error" }>`
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "success":
        return theme.colors.success;
      case "warning":
        return theme.colors.warning;
      case "error":
        return theme.colors.error;
      default:
        return theme.colors.info;
    }
  }};
  padding-vertical: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`;

const CancelButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding-vertical: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`;

const ButtonText = styled.Text<{ isConfirm: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMedium}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme, isConfirm }) => (isConfirm ? theme.colors.backgroundLight : theme.colors.text)};
  text-align: center;
`;

export const Alert: React.FC<AlertProps> = ({
  visible,
  title,
  message,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  onClose,
  type = "info",
  autoClose = false,
  autoCloseTime = 3000,
}) => {
  const { theme } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  // 모달 애니메이션
  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();

      // 자동 닫기 설정
      if (autoClose && onClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseTime);

        return () => clearTimeout(timer);
      }
    } else {
      // 닫히는 애니메이션
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, autoClose]);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    handleClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    handleClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <ModalContainer>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <AlertContainer
              style={{
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              }}
            >
              {title && (
                <TitleContainer type={type} theme={theme}>
                  <Title type={type} theme={theme}>
                    {title}
                  </Title>
                </TitleContainer>
              )}

              <Message theme={theme}>{message}</Message>

              <ButtonsContainer theme={theme}>
                {onCancel && (
                  <ButtonContainer theme={theme}>
                    <CancelButton onPress={handleCancel} theme={theme}>
                      <ButtonText isConfirm={false} theme={theme}>
                        {cancelText}
                      </ButtonText>
                    </CancelButton>
                  </ButtonContainer>
                )}

                <ButtonContainer theme={theme}>
                  <ConfirmButton onPress={handleConfirm} type={type} theme={theme}>
                    <ButtonText isConfirm={true} theme={theme}>
                      {confirmText}
                    </ButtonText>
                  </ConfirmButton>
                </ButtonContainer>
              </ButtonsContainer>
            </AlertContainer>
          </TouchableWithoutFeedback>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Alert;
