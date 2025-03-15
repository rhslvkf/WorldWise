import React from "react";
import styled from "styled-components/native";
import { TextProps } from "react-native";

interface TypographyProps extends TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "bodyLarge" | "bodyMedium" | "bodySmall" | "label";
  color?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
  weight?: "regular" | "medium" | "semiBold" | "bold";
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "bodyMedium",
  color,
  align = "left",
  weight,
  children,
  ...props
}) => {
  return (
    <StyledText variant={variant} textColor={color} align={align} weight={weight} {...props}>
      {children}
    </StyledText>
  );
};

interface StyledTextProps {
  variant: "h1" | "h2" | "h3" | "h4" | "bodyLarge" | "bodyMedium" | "bodySmall" | "label";
  textColor?: string;
  align: "auto" | "left" | "right" | "center" | "justify";
  weight?: "regular" | "medium" | "semiBold" | "bold";
}

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ textColor, theme }) => textColor || theme.colors.text};
  text-align: ${({ align }) => align};

  ${({ variant, theme }) => {
    switch (variant) {
      case "h1":
        return `
          font-size: ${theme.typography.fontSize.heading1}px;
          line-height: ${theme.typography.lineHeight.heading1}px;
          font-weight: ${theme.typography.fontWeight.bold};
        `;
      case "h2":
        return `
          font-size: ${theme.typography.fontSize.heading2}px;
          line-height: ${theme.typography.lineHeight.heading2}px;
          font-weight: ${theme.typography.fontWeight.bold};
        `;
      case "h3":
        return `
          font-size: ${theme.typography.fontSize.heading3}px;
          line-height: ${theme.typography.lineHeight.heading3}px;
          font-weight: ${theme.typography.fontWeight.semiBold};
        `;
      case "h4":
        return `
          font-size: ${theme.typography.fontSize.heading4}px;
          line-height: ${theme.typography.lineHeight.heading4}px;
          font-weight: ${theme.typography.fontWeight.semiBold};
        `;
      case "bodyLarge":
        return `
          font-size: ${theme.typography.fontSize.bodyLarge}px;
          line-height: ${theme.typography.lineHeight.bodyLarge}px;
        `;
      case "bodyMedium":
        return `
          font-size: ${theme.typography.fontSize.bodyMedium}px;
          line-height: ${theme.typography.lineHeight.bodyMedium}px;
        `;
      case "bodySmall":
        return `
          font-size: ${theme.typography.fontSize.bodySmall}px;
          line-height: ${theme.typography.lineHeight.bodySmall}px;
        `;
      case "label":
        return `
          font-size: ${theme.typography.fontSize.label}px;
          line-height: ${theme.typography.lineHeight.label}px;
          font-weight: ${theme.typography.fontWeight.medium};
        `;
      default:
        return `
          font-size: ${theme.typography.fontSize.bodyMedium}px;
          line-height: ${theme.typography.lineHeight.bodyMedium}px;
        `;
    }
  }}

  ${({ weight, theme }) => {
    if (weight) {
      return `font-weight: ${theme.typography.fontWeight[weight]};`;
    }
    return "";
  }}
`;

// 편의를 위한 타이포그래피 컴포넌트 내보내기
export const Heading1 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h1" {...props} />;

export const Heading2 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h2" {...props} />;

export const Heading3 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h3" {...props} />;

export const Heading4 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h4" {...props} />;

export const BodyLarge = (props: Omit<TypographyProps, "variant">) => <Typography variant="bodyLarge" {...props} />;

export const BodyMedium = (props: Omit<TypographyProps, "variant">) => <Typography variant="bodyMedium" {...props} />;

export const BodySmall = (props: Omit<TypographyProps, "variant">) => <Typography variant="bodySmall" {...props} />;

export const Label = (props: Omit<TypographyProps, "variant">) => <Typography variant="label" {...props} />;
