import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "Dark",
  default: localStorage.getItem("mode") === "true" ? true : false,
});

export const selectRegionAtom = atom({
  key: "selectRegion",
  default: "",
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

export const selectImageAtom = atom({
  key: "imageFile",
  default: "",
});
