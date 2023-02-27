export interface IService {
  code: string;
  name: string;
}

export interface ITourTypes {
  code: number;
  type: string;
  service: IService[];
}

export const TourTypes: ITourTypes[] = [
  {
    code: 12,
    type: "관광지",
    service: [
      {
        code: "A01",
        name: "자연",
      },
      {
        code: "A02",
        name: "인문(문화/예술/역사)",
      },
    ],
  },
  {
    code: 14,
    type: "문화시설",
    service: [
      {
        code: "A02",
        name: "인문(문화/예술/역사)",
      },
    ],
  },
  {
    code: 15,
    type: "축제공연행사",
    service: [
      {
        code: "A0207",
        name: "축제",
      },
      {
        code: "A0208",
        name: "공연/행사",
      },
    ],
  },
  {
    code: 25,
    type: "여행코스",
    service: [
      {
        code: "C0112",
        name: "가족코스",
      },
      {
        code: "C0113",
        name: "나홀로코스",
      },
      {
        code: "C0114",
        name: "힐링코스",
      },
      {
        code: "C0115",
        name: "도보코스",
      },
      {
        code: "C0116",
        name: "캠핑코스",
      },
      {
        code: "C0117",
        name: "맛코스",
      },
    ],
  },
  {
    code: 28,
    type: "레포츠",
    service: [
      {
        code: "A0302",
        name: "육상레포츠",
      },
      {
        code: "A0303",
        name: "수상레포츠",
      },
      {
        code: "A0304",
        name: "항공레포츠",
      },
      {
        code: "A0305",
        name: "복합레포츠",
      },
    ],
  },
  {
    code: 32,
    type: "숙박",
    service: [],
  },
  {
    code: 38,
    type: "쇼핑",
    service: [],
  },
  {
    code: 39,
    type: "음식점",
    service: [
      {
        code: "A05020100",
        name: "한식",
      },
      {
        code: "A05020200",
        name: "서양식",
      },
      {
        code: "A05020300",
        name: "일식",
      },
      {
        code: "A05020400",
        name: "중식",
      },
      {
        code: "A05020700",
        name: "이색음식점",
      },
      {
        code: "A05020900",
        name: "카페/전통찻집",
      },
    ],
  },
];
