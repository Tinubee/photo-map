import { atom } from "recoil";

export interface IAddressType {
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export interface IMapColor {
  mapColor: string | null;
  mapBgColor: string | null;
}

export const isDarkAtom = atom({
  key: "Dark",
  default: localStorage.getItem("mode") === "true" ? true : false,
});

export const selectRegionAtom = atom({
  key: "selectRegion",
  default: "서울특별시",
});

//true:사진지도 , false:일반지도
export const mapTypeAtom = atom({
  key: "mapType",
  default: false,
});

export const naverLogInUserDataAtom = atom({
  key: "naverUserData",
  default: {
    username: "",
    email: "",
    avatar: "",
  },
});

export const kakaoLogInUserDataAtom = atom({
  key: "kakaoUserData",
  default: {
    username: "",
    email: "",
    avatar: "",
  },
});

export const showMenuAtom = atom({
  key: "showMenu",
  default: false,
});

export const selectImageAtom = atom<File | null>({
  key: "imageFile",
  default: null,
});

export const myRegionAtom = atom<string[]>({
  key: "myRegion",
  default: [],
});

export const hoverRegionAtom = atom<string>({
  key: "hoverRegion",
  default: "",
});

export const searchRegionAtom = atom<string>({
  key: "searchRegion",
  default: "",
});

export const isErrorAtom = atom<boolean>({
  key: "isError",
  default: false,
});

export const errMsgAtom = atom<string>({
  key: "errMsg",
  default: "",
});

export const addresInfoAtom = atom<IAddressType>({
  key: "addressinfo",
  default: {
    address: null,
    longitude: null,
    latitude: null,
  },
});

export const mapColorAtom = atom<IMapColor>({
  key: "mapcolors",
  default: {
    mapColor: localStorage.getItem("mapColor")
      ? localStorage.getItem("mapColor")
      : "#9ed6ad",
    mapBgColor: localStorage.getItem("mapBgColor")
      ? localStorage.getItem("mapBgColor")
      : "#8ab4f8",
  },
});

export const mapColorSetAtom = atom<string | null>({
  key: "mapcolorset",
  default: null,
});
