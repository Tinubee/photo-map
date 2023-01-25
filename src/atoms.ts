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
