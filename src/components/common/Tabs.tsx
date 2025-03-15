import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number | string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabKey: string) => void;
  containerStyle?: ViewStyle;
  variant?: "underline" | "filled" | "outline";
  scrollable?: boolean;
  centered?: boolean;
}

interface TabContainerProps {
  variant: string;
  active: boolean;
  theme: Theme;
}

interface TabTextProps {
  active: boolean;
  theme: Theme;
}

const Container = styled.View`
  width: 100%;
  margin-vertical: ${({ theme }) => theme.spacing.sm}px;
`;

const TabsRow = styled.View<{ centered: boolean }>`
  flex-direction: row;
  ${({ centered }) => centered && "justify-content: center;"}
  border-bottom-width: ${({ theme, centered }) => (centered ? 0 : 1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

const TabContainer = styled(TouchableOpacity)<TabContainerProps>`
  padding-vertical: ${({ theme }) => theme.spacing.sm}px;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ variant, active, theme }) => {
    if (variant === "underline") {
      return `
        border-bottom-width: 2px;
        border-bottom-color: ${active ? theme.colors.brandMain : "transparent"};
      `;
    }
    if (variant === "filled") {
      return `
        background-color: ${active ? theme.colors.brandMain : "transparent"};
        border-radius: ${theme.borderRadius.md}px;
        margin-horizontal: ${theme.spacing.xs}px;
      `;
    }
    if (variant === "outline") {
      return `
        border-width: 1px;
        border-color: ${active ? theme.colors.brandMain : theme.colors.backgroundSecondary};
        border-radius: ${theme.borderRadius.md}px;
        margin-horizontal: ${theme.spacing.xs}px;
      `;
    }
    return "";
  }}
`;

const TabText = styled.Text<TabTextProps>`
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMedium}px;
  font-weight: ${({ active, theme }) =>
    active ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular};
  color: ${({ active, theme }) => (active ? theme.colors.brandMain : theme.colors.textSecondary)};
`;

const Badge = styled.View`
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.round}px;
  min-width: 18px;
  height: 18px;
  padding-horizontal: ${({ theme }) => theme.spacing.xs}px;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.xs}px;
`;

const BadgeText = styled.Text`
  font-size: ${({ theme }) => theme.typography.fontSize.label}px;
  color: white;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const IconContainer = styled.View`
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  containerStyle,
  variant = "underline",
  scrollable = false,
  centered = false,
}) => {
  const { theme } = useTheme();

  const TabsContent = () => (
    <>
      {tabs.map((tab) => (
        <TabContainer
          key={tab.key}
          active={activeTab === tab.key}
          variant={variant}
          theme={theme}
          onPress={() => onTabChange(tab.key)}
        >
          {tab.icon && <IconContainer theme={theme}>{tab.icon}</IconContainer>}
          <TabText active={activeTab === tab.key} theme={theme}>
            {tab.label}
          </TabText>
          {tab.badge && (
            <Badge theme={theme}>
              <BadgeText theme={theme}>{tab.badge}</BadgeText>
            </Badge>
          )}
        </TabContainer>
      ))}
    </>
  );

  return (
    <Container style={containerStyle} theme={theme}>
      {scrollable ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={centered && { flexGrow: 1, justifyContent: "center" }}
        >
          <TabsRow centered={centered} theme={theme}>
            <TabsContent />
          </TabsRow>
        </ScrollView>
      ) : (
        <TabsRow centered={centered} theme={theme}>
          <TabsContent />
        </TabsRow>
      )}
    </Container>
  );
};

export default Tabs;
