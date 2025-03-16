import { Country } from "../types/quiz";

/**
 * 기본 국가 정보 데이터
 * 국가 코드는 ISO 3166-1 alpha-2 코드 사용
 */
export const countries: Country[] = [
  {
    id: "KR",
    continent: "asia",
  },
  {
    id: "US",
    continent: "northAmerica",
  },
  {
    id: "JP",
    continent: "asia",
  },
  {
    id: "CN",
    continent: "asia",
  },
  {
    id: "GB",
    continent: "europe",
  },
  {
    id: "FR",
    continent: "europe",
  },
  {
    id: "DE",
    continent: "europe",
  },
  {
    id: "IT",
    continent: "europe",
  },
  {
    id: "AU",
    continent: "oceania",
  },
  {
    id: "BR",
    continent: "southAmerica",
  },
  {
    id: "ZA",
    continent: "africa",
  },
  {
    id: "EG",
    continent: "africa",
  },
  // 추후 더 많은 국가 추가 가능
];

export default countries;
