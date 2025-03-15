import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Svg, Path, Circle, G, Rect } from "react-native-svg";
import { useTheme } from "../../contexts/ThemeContext";
import { Theme } from "../../styles/theme";

// 아이콘 타입 정의
export type IconName =
  | "home"
  | "explore"
  | "quiz"
  | "profile"
  | "settings"
  | "check"
  | "close"
  | "arrow-left"
  | "arrow-right"
  | "heart"
  | "star"
  | "timer"
  | "info"
  | "warning"
  | "error"
  | "success"
  | "hint";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color, style, containerStyle }) => {
  const { theme } = useTheme();

  // 기본 색상은 현재 테마의 텍스트 색상
  const iconColor = color || theme.colors.text;

  // 아이콘 SVG 패스 매핑
  const renderIcon = () => {
    switch (name) {
      case "home":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path d="M9 22V12H15V22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "explore":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16.24 7.76L14.12 14.12L7.76 16.24L9.88 9.88L16.24 7.76Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "quiz":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M8.5 10H5.5C4.67 10 4 10.67 4 11.5V18.5C4 19.33 4.67 20 5.5 20H12.5C13.33 20 14 19.33 14 18.5V15.5"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M11 13L20 4L22 6L13 15H11V13Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "profile":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Circle
              cx="12"
              cy="7"
              r="4"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "settings":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "check":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M20 6L9 17L4 12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "close":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M18 6L6 18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6 6L18 18" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "arrow-left":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M19 12H5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path
              d="M12 19L5 12L12 5"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "arrow-right":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M5 12H19" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path
              d="M12 5L19 12L12 19"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "heart":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "star":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "timer":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path d="M12 6V12L16 14" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "info":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path d="M12 16V12" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 8H12.01" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "warning":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M10.29 3.86L1.82 18C1.64 18.32 1.56 18.68 1.58 19.04C1.6 19.41 1.73 19.75 1.95 20.05C2.17 20.34 2.47 20.57 2.82 20.7C3.16 20.84 3.54 20.87 3.9 20.8H20.1C20.46 20.87 20.83 20.84 21.18 20.71C21.53 20.57 21.83 20.34 22.05 20.05C22.27 19.76 22.4 19.41 22.42 19.05C22.44 18.68 22.36 18.32 22.18 18L13.71 3.86C13.52 3.57 13.25 3.33 12.92 3.17C12.6 3.01 12.23 2.93 11.86 2.93C11.49 2.93 11.12 3.01 10.79 3.17C10.47 3.32 10.2 3.56 10.01 3.85"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path d="M12 9V13" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 17H12.01" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "error":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path d="M15 9L9 15" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M9 9L15 15" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        );
      case "success":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Circle
              cx="12"
              cy="12"
              r="10"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16 10L11 15L8 12"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      case "hint":
        return (
          <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path
              d="M7.86 2L16.14 2C17.84 2 18.5 2.66 18.5 4.36V5.25C18.5 6.27 18.07 7.21 17.31 7.85L14.43 10.29C13.58 11 13 12 13 13.17V17.08C13 17.6 12.6 18.18 12.12 18.39L11 19C9.88 19.56 8.5 18.78 8.5 17.5V13.1C8.5 12.02 7.99 11 7.25 10.39L4.69 8.29C3.95 7.68 3.5 6.74 3.5 5.76V4.35C3.5 2.66 4.16 2 5.86 2H7.86Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        );
      default:
        return <View />;
    }
  };

  return <View style={[styles.container, containerStyle, style]}>{renderIcon()}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icon;
