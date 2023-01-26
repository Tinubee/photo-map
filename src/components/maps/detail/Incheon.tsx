import styled from "styled-components";
import { MapSvg } from "../types/PictureMap";
import { Path, Text } from "../Korea";

const Line = styled.path`
  stroke-linejoin: round;
  stroke: #ffffff;
  stroke-width: 1;
  fill: none;
`;

const Circle = styled.circle`
  stroke: #ffffff;
  stroke-width: 1;
  fill: #ffffff;
`;

function Incheon() {
  return (
    <MapSvg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="dropshadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
          <feOffset dx="0" dy="0" result="offsetblur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dropshadow2">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#dropshadow)">
        <Path d="M483 508l-3 1-1 1h-2l-1 1h-1l-1 1v1h-2v1h-1v1l-2 1v1h-1v1h-1v1l-1 1h-1v1l-1 1-2 1-4 4-1 1h1l6-5 5 7h14v-6h1v-1h-1v-9h1v-1h1l-1-1h1v-2h-1l1-1h-1v-1h-1zm1 16v2h1l1 1 1-1v-1h-1v-1h-2zm-27 4l-1 1-1 1-1-1h-1l-2-1h-1v-1h-7l-1-1v-1l1-1-1-1-2-2-3-1h-1v-3h-5v1h-1l-1 1h-1l-2 1h-2v-1h-1v1h-2v2h-1v2h-1v7l-1 2v4l1 1-2 6h-1l-3 2-2 1-1 1-4 2-4 2h-3v1h-1l-2-1h-16l-1 1h-2v-1h-6l-2 1h-7l-4 1h-4v1l-3 2-1 1-3 1-1 1-3 2-1 1-2 2-2 1-2 1-2 1-2 2-2 1-1 1-3 2-1 1-3 2h-1l-2 2h-2v-1l-1 1-1 1v-3h-3l1-1h-2l-1 1h-3v3l-1 1h-1v1l-1 1 1 1v4h1v1h1l1 1v2h1v1h1l1 1v-2h1v1h2v1h1v2h1v3l-1 1v2h2v1l1 1v2l-1 1h-5v1h-1v1h1l1 1h1v-1h2l1 1h2v-1l1 1v-1l1 1h1v1l1 2v1h1v1h1l-1-4h2v-1h2l1 1h2v-3h2v-1h1v-1h1l1-1h-1l1-1v1h1l1 1 1 1h1v1h1v1h1v1l1 1v2l-1 1h-1v2h-1v1l1 1 1-1 1-1h1v-3h3l1 1h1l1 1v1h1v1h1v1l1 1v1l1 1v2h1v3l1 1v3l1 1 1-1h1l1-1v1l1-1h1l5 1h2l3 1h3l33-24v1l1-1v-1h1v-1h1v-1l1-1v-1l1-1 1-2v-1h1v-1h1v-1l1-1 1-1 2-2 3-3 1-1 1-1h1v-1h2l3-1 5-2h1v-1h2l4-2 2-2h2v-1h3l1-1h12v-1h3l1-1h2l3-1h2v-1h1v-1h1v-1l1-1 1-1 1-1h1v-1h1l2-2h2v-1h2v-1h1v-1h1l-1-1h-2v-1h1l-2-5-1-5v-1h-1v-1h-1v-1h-2v-1h-1v-1h-1l-1-2-2-3v-1l-1-1-2-1-3-1h-1l-1-1-1-1-3 1h-3l-1-1h-2l-1-1h-1v-1l1-1 1-1v-1zm15 8l2-1h-1l-1 1zm-141 75v1h1v-1h-1zm91-74v1h-1l1-1zm86 29v1l1 2h-1l-1-1h-2v2l1 3h-1l-1-3v1h-1l-1 2v1h-1v2l-1 1-1 3v1l-1 1 1 1h2v1l1 1v1l1 1h-1v1h-2l-1 1v6h1l1-1v-1l1 1v-1h1l1-1 2-3v-2h-1v-1h4l1-2-1-4v-1l-1-1v-1l1-1h3v-1l2 5 1 3 3 1 1 1 4 1-1 2-4-2-1-1v1l-2-1-1 1 1 1h1v1h1l7 3-1 2-4-3-1 1v1l5 2-1 1-3-1-7-3h-3l-4 2-2 1 2 2-1 1h-1v1h-2v1h-1l-2-2-1 1 2 2h-1l1 1 1 1h-1l1 1v1h-3v10h6l1-1v-2l3-4v-1l1-1v-1l1-2 1-1 1-2 2 1-1 2-1 2v1l6 4-1 3-3-2h-1l-2-1-1 3 1 1 2 1h1l1 1h1l-2 3-1 2v1h-1v2l2 1h15v-2l-1-10-1-1v-6h-1v-1h1l1-1h-1v-3h3v-2h1v-1h1v-2h1v-1l1-1v-2h1v-2h1l1-1h1v-1h1v-1h-1v-1l-1-1h-1v-1h-1v-1h-2v-1h-1v-2h-1v-1h-1v-1h-1v-1h-1v-1l-1-1h-1v-1h-1v-1h-1v-1h-3v1h-1v-1h-1v-1h-2v-1h-1l-1 1h-1l1 3v1h-1v-2l-1-2-1 1h-1l-1 1h-2l-1-1h2v-1h2v-3h-1v-1h-1zm3 57h-1l1 1v-1zm-14-19v-1h-1l1 1zm-1-1v-2l-1-2 1 4zm9-10l-1-1v1h1zm-8-6l-2 1h3l-1-1zm-2 4l1 4v-2l-1-2zm-142 40l-1 1h1v-1zm-1 1l-1 1-1-1v3h2v-1l1-1-1-1zm-6 8l-1 1h-1v1h-1v1h1v3h-1v1l-1 1v1h-1v1h-1v2h1v2h-1v2l-1 1h-1v1h-1v1l-1 1h1v1h1v-1h2v1h1v-1h2v1l1-1v3h1l1 1 1 2v4l-1 1v2l1 1v2h1v2h-1l-1 1v2l1 1v1h2v2h1v1h1v1h3l1-1v-1h1l1 1h2v-1h-1l1-1h1v1l1-1h2v-1h1v1h2l1-1v-1h-1v-4h3v-1h2v-2h-1v-1h-2v-2h-1v-1h3v1h1v-1h2v-1l-1-1 1-1v-1h-2l-1-1h-2v-2h-1v-1h-2l-1-1h-1v-3h-2v-2h-1l1-1h-2v-1h-1v-1h-1l1-1h-1v-1h1v-1h-3v-1h-1v-1h-1l-1-1-1 1v-1h-1v-2h1v-3h-1v-1h-1v-1h-1v-1h-2zm25 35h1v-1h-1v1z"></Path>

        <Path d="M532 557v1l4-1 1 1h1v1h1l1 1h1v1l6 3v1h1v1h2v1l2 1h1v1h1v1h1v1h1v1h1v1h1v1h1l1 1h1l1 1h1v2-1h-3v-1h-2v-1l-2-1h-1v-1h-1v-1h-2v-1h-1v-1h-2l-2-1-1 1v1h-1v1-1 2h1v1h1v1l-1-1v2h-1v3h1v1l-1 1v2h1-3v1h-1v-1h-6v1h1v1-1 1l-1-1h-1v-1h-1v-1h-2v-1h-1v-2h-1 1-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-3v1h-1v-1h-1v-2 1h-2v-1h1v-1h1v-1l1-1-1 1h-2l-1 1h-1l-1 1h-1v-1h-1v-3h1v-1 1h1v2h1v-2h-1v-1h1l1-1v1l1 2h1l-1-1v-3h1v2h1v-1l-1-1h2v-1h2l1 1v1h-1 1l1-1v-1h-1v-1h2l1 1 1 2h1v1h1v1h1v1h1l2 1v1l1 1h1l-1 1v1-1h1v-1h-1v-1l-1-1-2-1-2-2-2-4-1-1 2-1 5-1"></Path>

        <Path d="M545 577v-1h1v-2l1 1v-1h-1v-1h-1v-2 1-1h1v-1l1-1 2 1h2v1h1v1h2v1h1v1h1l2 1v1h2v1h3v1h3l2 1 1 1h1l1 1 1 1-1 1v1h2v3h2v1h3v1h1v1h1v1l1 1-1 1h-1l1 1-1 1v7h-2v2h1v1h-1v1h1v2h1v1h2v1h3v1h2-1v4h-6l1 1v2l1 1v1h-3v1h-4v-1h-1v1h-1v1h-1l1 1-1 1h-1l-1-1h-4v-1 1h-1l-1 1v-1h-4v-1h-1v-1h-4v-1h-1v-1h-2v-1h-1v1h-1v-1h-1v1l-1-1h-1l-1 1h-5v2h-1l-1 1h-3v1h-1v-1l-1 1h-2v-1h-1v1h1-1v-2l-1 1v1h-1v1-5l-1-3v-4l-1-3v-4l2 1-1-3v-1h-1v-2h3v-2h1v-1h1v-2h1v-1l1-1v-2h1v-2h1l1-1h1v-1h1v-1h-1v-2 1-1h-1v-1h6v1h1v-1h3-1v-2l1-1v-1h-1v-2"></Path>

        <Path d="M518 700h7v7h14v-1h1l1-1 5-6h-1l-11-9-9-7-2-2-7-5-1-1-1-1-4-7v-6l-2-1v-4l2-1v-18h-10v1-1h-1v1-1h-1l-3-2-1-1h-1v-6l1-1h2v2h-1v1h1v1l7 3v-2h1v-1l1-1v-1l1-1 2-1h20l1 6h1v3l3-2-1-1v-3l-1-1v-5h-1v-1h1-1v-1h1v1h2l1-1v1h1v-1h3l1-1h1v-2h5l1-1h1l1 1v-1h1v1h1v-1h1v1h2v1h1v1h4v1h1v1h4v1l1-1h1v-1 1h4l1 1h1l1-1-1-1h1v-1h1v-1h1v1h4v-1h3v-1l-1-1v-2l-1-1h8v2l1 1v8h-1v3h-1v1l-1 1-1 1v1l-1 1h-1v1l-3 2-3 3-1 1-1 1-1 1h-1v2l-1 1v3h-1v1h-1v1h-2v1h-1l-1 1h-1v1l-1 1-1 1-2 2-2 2v1l-1 1h-1l1 1 1 1h1v1h2v1h2l5 1 1 1v-1 1h1v-1 2h-1v1l9 2h1l-1 1-1 2h-1l-1 1v1l-2 2v1l-3 4-1 1h-1v1l-1 1-1 2h-1v1l-1 1-1 2-1 1-2 2-1 1v1h-1l-1 2-2 2v1h-1v1h-1v1l-1-1-6-5-5 6v1h-2v1h-3v1h-2v5h-14v-6h-7v5-5h-10v1h-1v-1h-7v1h-1v-1h-7v-7h31"></Path>

        <Path d="M625 644l-2 2v1-1h1v1l-1-1v1h-1v1h-3v1h-1v3h1v1h-1v1h-1v1h-1v1l-1 1v-1 1h-1v1-1h-1 1l-1 1h-1v1l-1 1-1 1v1h-1v1h-1v1h-1v1h-1v1l-2 2v1l-1 1h-1v1h-1v1h-1v1-1h-7v-1h-1v-1l-1 1v1h-2l-1-1-16-3h-2v1-2h-1l-8-1v-1h-1l-4-3h1l1-1v-1l2-2 2-2 1-1 1-1v-1h1l1-1h1v-1h2v-1h1v-1h1v-3l1-1v-2h1l1-1 1-1 1-1 3-3 3-2v-1h1l1-1v-1l1-1 1-1v-1h1v-3h1v-8l-1-1v-2h-2v-4h1-2v-1h-3v-1h-2v-1h-1v-2h-1v-1h1v-1h-1v-2h2v-7l1-1-1-1h1l1-1-1-1v-1h-1v-1h-1v-1h-3v-1h-2v-3h-2v-1l1-1v-1l1 1h1l1 1h2v1h3v1h4l1 1h1v-1h1v-1h3v-2l1-2v-3l1-2v-2l1 1v2h1v1h3v1h1v1h1v1h1v1h1l-1 1h1v1l1 1v-1 1h1l1-1h1v-1h1l1-1h3v1h4v1h1l1 1h1v1h1v2h2v2h1l1-1h3v1h2v-1h1v-1h1v-2h1l1-1h6v-1h1v-1h4v-1l1 1h4v1l-1 1h1v1l1 1v3l-1 1v1h-1l1 1-1 1h-2 2l1-1v3h-1v2h1v1l1 1v3l-1 1h-2l-1 1h-1l-2 1v1h-1v1h1v1h-1v1l-1 1v1h-1 1v2h1v4h1v3h-1v2h-1v1h2v1h-1v2h-1v1h-1v1h-2l-1 1v-1h-1v-1h-1v-1h-1 1v1h1v1h-4 1v1h-1v1h-2v2h-1v-1 1h-1l1 2v2h1v1h-1l-1 1-1 1v5"></Path>

        <Path d="M633 529v4l-1 1h1v1l-1 1h1v1h-3v-1h-2v1-1 1-1h-1v1h-1v-1 2h-2v1-1h-2v1-1 1-1h-1l-1 1v2h-1v2h-1v1h-1 1v5l1 1v4h-1v4h-1v2h1v7h3v1h4v1h2v1h1v1h1-1v2h1v1l1 1h1v2h3v1h1l1 1h1v1h1v3h-1v1h-6l-1 1h-1v2h-1v1h-1v1h-2v-1h-3l-1 1h-1v-2h-2v-2h-1v-1h-1l-1-1h-1v-1h-4v-1h-3l-1 1h-1v1h-1l-1 1h-1v-1 1l-1-1v-1h-1l1-1h-1v-1h-1v-1h-1v-1h-1v-1h-3v-1h-1v-2l-1-1v2l-1 2v3l-1 2v2h-3v1h-1v1h-1l-1-1h-4v-1h-3v-1h-2l-1-1h-1v-1h-1v-1h-1v-1l1-1h1v-1l1-1 1-1 1-1v-3h-1v-1h1v-1h2l-1-1h4l1-1v1h1v-1l-1-1v-1h-1l1-1v-1h-1v-1h-1l-1-1v-1h-1l-1 1v-3h1v-1h-1l-1-1v-1l-1-1v-1h1l1-1h-1l1-1v-1l-1-1v-1h-2l1-1v-3h-2v-4h-1v-1l-1-1h-1v-3l1-1v-1h1v-1h1v-2h2v-1h58"></Path>

        <Path d="M616 458v1h2v1l2-1v1h1v3h1v2h1v1h1v1h1v4h-1 2v1h2v-1 1h1v-1 1l1-1h-1v-2h1v-1l1-1v-1 1h3v-1h1v1h1v-1h1v-1h1l1-1v-1 1h1l1 1v1h2v1h5l1 1h1-1 2l1 1 2-1 1-1v-1 1l2 1 1 1h1v1l1 1v-1 2h-1 1v3h-1v-4h-1v3l-1 1v-1l-1 1v1l1 1h-1v-1h-1v1h-2v1h-2v2l-1 1v-1 1h1v1h-2 1v1h1-1v1h-1v1-1h-1v1h-1v1h-1v-1h-1v-1 3h1v1h1v1h-1v1h1v2-1h-1v-1 1-1h-1v2h-1v1-1 1h-1v1h-1 1v1h-3v1h-2v-1 1h-1v1h-1 2v1h-1v1h1v1h-1v1h-1v1h1v1h-1v-1 1-1 3l-1 1v3h1v1h-1v1-1l-1 1h1v1h-1v2l-1-1v1h1v1h-1v14h-58v-2h-1v-4l-1-1v-1h-3v-2l1-1v-1h1l1-1v1h1v-1h3l1-1v-4h1l1-1h2l1 1v1h1v-1h3v-1h3v-2h-1v-1h1v-1h1v-1l1-1v-2h1v-2h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-3l-1 1-1-1v-1h-1v-1l1-1 1-1v-2h1v-2h-3v-3h-1v-2h1v-2h1-1v-2h-3l-1-1h-2v-1 1-1h-1l-1-1v-1h-1v1h-4v-1h-1v1-3h-1v-2 1-1h1v-2h1v-1h3v1h3v1h3v1h3l1 1h3v1h5v1h2v1h2v-1h1v-1 1-1h1v-2h1v-3h-1v-1h1v-3h2v-1l1-1h1v-1h4v-1h2v1h3v1-1 1-1l1 1h1v-3h2"></Path>

        <Path d="M522 467v-2h-8v-2h-5l2-2 2-1 1-1h-3l-1 1v1h1-1v1h-1v1h-1l-3 2v4h-4l-1-1v-1h-1v-1h-1v-6l-1-1v-2l5-3 3-1 2-2 1-1 1-1 2-3 4-2 1 1v1h1v1h2v-1l1 1h2v1-1h1v1h-1 3-1v-2h1v-1h1v-2h1v-3h1-1v-1h1v-2h1v-1h1v-2l-1-1h1v-1h1v-1h1v-1h1v-2h1v-5h-1l1-1 1 1h1v1l1-1h1v-1h3v1h1v-2h1v-1h1v-2h1v-3h1v-2l-1-1h1v-1h1v1h6v1l1 1h1v-1 1h3l1 1h1v1h2v1h1v1h1v3h5v2h1v1h1v1h-1l1 1v-1h1v1h1v1h1l2 2 1 1 1-1 1 1h1v1-1 1h1v1h1v1h2v2h1v2h2v1h1v1h1v2h1l-1 1v1h1l-1 1v1h-1v4l1-1h1v-1h1v-1h3v1h1v1h1v-1h1v3l1 1v2h2v1h1v1h1v1h1v1h1v1l1 1v1h-2v1h-1l-1 1v1h-2v3h-1v1h1v3h-1v2h-1v1-1 1h-1v1h-2v-1h-2v-1h-5v-1h-3l-1-1h-3v-1h-3v-1h-3v-1h-3v1h-1v2h-1v1-1 2l1 1v2-1h1v1h4v-1h1v1l1 1h1v1-1 1h2l1 1h3v2h1-1v2h-1v2h1v3h3v2h-1v2l-1 1-1 1v1h1v1l1 1 1-1h3v1h1v1h1v1h1v1h1v1h-1v2h-1v2l-1 1v1h-1v1h-1v1h1v2h-3v1h-3v1h-1v-1l-1-1h-2l-1 1h-1v4l-1 1h-3v1h-1v-1l-1 1h-1v1l-1 1v2h3v1l1 1v4h1v3h-2v2h-1v1h-1v1l-1 1v3h1l1 1v1h1v4h2v3l-1 1h2v1l1 1v1l-1 1h1l-1 1h-1v1l1 1v1l1 1h1v1h-1v3l1-1h1v1l1 1h1v1h1v1l-1 1h1v1l1 1v1h-1v-1l-1 1h-4l1 1h-2v1h-1v1h1v3l-1 1-1 1-1 1v1h-1l-1 1v1h1v1h1v1h1-1l-1-1v1l-1-1-1-1h-1l-1-1-2-1h-3v-2h-1l-1-1h-1l-1-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1l-2-1v-1h-2v-1h-1v-1l-6-3v-1h-1l-1-1h-1v-1h-1l-1-1v-2l-1-1v-6h-7v4h-1l-1 1-2 2h-3v1h-15v-14h1v-1h-1l1-1h-1v-1h-1 1-1v-4l6 2-1 1v1l1 1 1-1h2v-1l-1-1-8-2v-10h7v-1h-7v-6h-3v-1h1v-1h-1v-3h5v-1h-5l-2-9 2-1h-1v-1l3-1 1-1h1l2-1 1-1h1l1-1h7v-1h3l3-1h3v-1h3v-1h2v-1h1v-1 3h-1l1 1 1 1v-1h1v-4h-1v1h-1v-1l1-1 2-1h-1v-1h-1l1-1 1-1v-1h1v1-1h1l1 1h3v-1h2l1-1v-1h2l1 1h1v1h1v-2h2v-1h1v-1h-1l-2 1h-6l1 2-1 1h-2l-1 1h-1v-4h-4l-1 1h-3v1h-2v1h1v3h1v1h-3l-1 1v1h-1v1l-1 1-1 1h-2v1h-1l-1 1h-3v1h-7l-2 1-3-3-1-2h-1l1-1h-1 1-1v-1h-5v-2l-1-1v1-1h-1l-1 1-1 1-1-2h1l-3-3 2-3 1 1v1l1 1h1l1 1v1h1v-1h-1v-1h17v1l2 1 1-1h3v-1h3l1-1h2l1-1h2v-1h3v-1h8v-1h11l1-1v-1l1-1v-2h1v-1h-1v-1h-5l-1 2-1-1h-2v-1h-1l-1-1h-1l-1 1v-1h-1v-1l-2-1v-1h-1v-1l-1-1h-3l-1-1h-2v-1h1-1v-1h-1l1 1-2 3-1 1-2 1v3h-2v1h-1v-2 1h-1v1-4h1v-2"></Path>

        <Path d="M296 401v1h1v1l-1 1h-1v-1h1-4v-2l1-1-1-1h-1l-1-1v-1h-1v-1h-1 1l-1-1h-1l-2-1-1 1h-1v-1h-1v-1 1h1v-1h1-2 1v-1h1l-1-1h-1v-3l-1-1h2v-1h1v-6l1-1v-2l-1-1-1-1-1-1h-1v-1l-1-2v-1l-1-1v-1h-1v-1l1-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1l-1-1h-1v-1h-1v-1 1-1h-1v1h-1v-1h1-1l-1-1h-1l-1-1h-2v-1h-1l-1-1h-1l-1-1v1-1h-1l-1-1h-1v-1l-1-1h-2l-1-1v-1h-1v-4l-1-1h-1l-1-1h-2 1l-1-1h-1l-1-1v-1h-1v-1l-1-1h-1v-1h-1l-1-1h-1v-1h-1 2v-1l1-1v1l1-1h1v1h1v1h1v1h3l1 1 1-2h1v-1l2-1h-1v-1h1v-2h1l-1-1v-1h1v-5h1v-1h-1 1v-2h-1v-3h-1 1v-1h1-1v-1h1-1v-3l1-1v-6h1-1v-2l1-1 1-1 1-1h6v-1h1v1-1h4v-1h1v-1h2v1-1l1-1h1l1-1 1-1 1-1h5v1h2v1h1v1h2v1h1v2l-1 1v1h-1v1h-1l-1 1v1h-1v1h-1v2h-1v1h-1v1h1v1h-1v3h-1v3h-1v3h1v1h-1v2h-1v1h1v1l-1 1v4h1v3l1 1v1h1v1h1v1l1 1h1v1h1l1 1v-1h1v1-1 1l1 1h1v3h1v-1 1h1v1h1v2h1v-1 1-1 1h2v1l1 1h2v1h3l1 1h1l1 1h7l-1 1h1v1h1v1h1v-2h1v-1h2v1h2v1h1-1v3h1v1h2l1 1h1v1h1l1 1 1 1v1l1 1h-1l1 1h-1v2h1v1-1h-1v-1l1-1v1h1v1h-1v3l-1 1v3h-1 1v1h-1 1-1 1v1h-1v2h-1 1v1l-1 1v1h-1v2h-1l-1 1v1h-3l-1 1h-2v1h-1l-1 1-1 1v1h-1 1l-1 1-2 2h-1l-1 1h-1v-1l-1 1-1 2-1 1h-5v5"></Path>

        <Path d="M438 452h4v1h-1v1h-1l-1 1h-1v1h-1v2h1v1h1v1h3l1 1 1 1v2l-1 1v-1h-2v-1h-1v1h-2v3h-1 1v2h-1v1h-2l-1-1v1-1h-2v-1h-1v-2l-1-1v-1h-2v-1 1-1 1h-1v-3h-1v-1h-1v-1h2v-1h3l1-1h3v-3h1v-1l1-1h1l1-1v1"></Path>

        <Path d="M208 390v1h1-1 1v1-1 1h1v-1 2h1l1 1h6l1-1v1-1h5v1h1l1 1h1v1h-1l-1 1-1 1h1l-1 1v3h-1v1h-1v7l1 1h-1v1h1-1l1 1v2h1l1 1h1l2 1h1v1h1v2l1 1h1-1v1h-1v-2l-1-1h-2v-1h-1v-1h-4v-1h-3v-1h-2v-1h-1v-1h-1l-1-1-1-1h-1v-1h-1v-1h-1v-1h-1l-1-1v1-1l-1-2h-1v-2l-2-3-2-2v-2h-1v-1h-1v-1h-1v-2h2v2h2v1l2-1v-1h1v-3h2"></Path>
        <Path d="M196 381v1-1h1-1"></Path>
        <Path d="M201 380h1v1h1v1h1l1 1h1l1 1h2v1-1h4l1-1h1l1 1h-2v1l-1-1h-1l-1 1h-2v1h-7v1h-3 1v-3l-1-1v-3h2"></Path>

        <Path d="M177 357h1v1l-1 1v1l1 1v1h-1l1 1v2l1 1v1h1v1l1 1v1h1v1l1 1v1l1 2h1v1l1 1h1v1l1 1h2v1h-1 1-1v1h1-1v-1 1h-1v1h-1v1l-1 1h-1v2-1 1h-1v1h1-1 1v1h1v1h1v2l-1-1-1-1h-1l-1-1h-1l-1-1h-1v1h-1v-1h-2v-1h-1l-1 1-1 1h-2v-1h2v-1l1-1v-1l-1-1v-1h-1v-1h-1v-1h-1v-1l-1-1h-1l-1-1h-1v-1h-2v-1h-4v-1l-1 1v1h-3 1-3v2h-1l-1-1v-1h-1l-1-1h-2v-2h-1v-1h-1v1-1h-2 1l-1-1v-1h1l-1-1v-1h1v1h3v-1 1l1-1v-1h3l1-1h1v2h2v1h2v-1h2l1-1h1l1-1 3-1 1-1v-1h1v-2h1v-1 1h3v-1h1v-1h1v-2h2"></Path>
        <Path d="M182 357v-1h1l-1 1"></Path>
        <Path d="M124 353v1h1l1-1 1-1v1h1v1h-1v1h-1 1v1l1 1 1 1 1-1v1h1v1h1v-1h2l1 1v3h1v1h-3l-1 1h-1v-1h-1v-1h-4v-1h-3l-1 1v-1l-1-1v-1h1-1l1-1h-2 1v-2 1h-1v1h-2v-1l1-2v-1h1v-2h1l1-1v1l1 1h1"></Path>
        <Path d="M284 338h-1 1"></Path>
        <Path d="M284 338h-1v-1h1v1"></Path>
        <Path d="M191 322v1h1l-1 1h1v1l-1 1h1v1h-2v-1h1v-2h-1v-2h1"></Path>
        <Path d="M211 313v5l1 2v3h3v1h1v1h1l1 1v-1h1v1h1v1h1l-1 1h-5v-1 1l-1 1h-2l-1-1h-2v1h-1l-1-1h-1l-1-1h-5v-1h-1l-1-1h-1l-1-1h1v-1h3v-1h1v-1h1v-1l1-1v-3h1l2-2 1-2 1-1v1h2v1h1"></Path>
        <Path d="M235 307v2h1v5h1v5h1v1-1 1h-1l-2 1h1-1l-1-1h-1l-1-1h-1l-1 1h-1l-1-1h1v-1l-1-1h1v-4h-1l1-1v-1h2v-2h2v-1l1-1h1"></Path>

        <Path d="M235 226h1v2h1v1h3v1h2l1 1 1 1 1 1 1 1h1l1 1h1v1h2v1h2v1h2l1 1h1v1h2v3-1h4v-1h2v1h1v-1l1 1h10v-1h2l1-1h1l1-1v-1l1-1h-1v-1h1l1 1v1h1l1 1h1l-1 1v1h1v2h1l1 1v1h1v1h1v1h1-1v1-1l-1 1v1h-1l-1 1v5h1l-1 1h-1l-1 1h-1l-1 1h-2v-1 1h2l-1 1v1h-1v1l-1 1-1 1v1h-1v1h-1v2h-1v4h-2l-1 1h-2v1l-3 1h-1v1-1h-1v1h-1v1h-2v1h-1v1h-2v1h-2l-1 1h-1l-1 1v1h-1v-1h-1v-1h-1v-1h-1v-1h-2v-1h-1l-1-1h-5v-1h-3l-1 1h-2v1h-1v-1h-1v1h-2v-1h-1 1v2h-1v1h-1v1h-4v-1h-6v1h-1l-1 1h-1v1h-1v-1l-1-1v1l-1 1v5h-1l-1 1v1h-1v1h-1v1h-1v1-1 1l-1 1h-1l-1-1h-1l-2-1h-1v-1h-1v-1h-1l-1-1v-1h-1v-1l-5-5v-1l-2-1-4-4h-1v1-1 1h-1v-1h-1v-1h1v-2l-1-1h2l1-1h-1 4v-1l2-1h1v-1l2-1v-1h-1v-1h1v-1h1v-3h1l1-1v-1h1l-1-1v-1l1 1v-1h1v-4h-1v-1h-2v-3h1v-2h1v-1 1-1l1-1 1-1v-1l-1-1v-2h1v-1h1v-1h1l1-1v-1h2v-1h1l1-1h1v-2h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h2v1h7v-1 1h2v-1h1v1-1h2v-1 1l1-1h1v-1h1"></Path>
        <Path d="M370 215h1v1h4l-1 1h1v2h1v1-1 2h1v1l1 1v1l-1 1h1-1l1-1v-1h1v1l1-1v1h1l-1 1v1h1v2h1v1h1v1l1 1v1h1v1h-3v1h1l1-1v1h2l1 1 1 1 1 1 1 1 1 1h1l1 1 1 1 1 1h1l1 1h1l1 1 1 1 1 1 1 1 1 1 2 1 1 1v1h1l1 1 1 1h1l1 1 1 1h1l1 1 1 1h1v1h2l1 1h1l2 1h1v1h1v-1l1 1h1v1h2v1h1v1h1v1h1-1v1h1v1-1h-1l1-1v7h1v1h-1 2v1h1v2h1-1 1v1-1 1h-1v2h-1v5h1-1 1v2h1v2h1v1h1v1l1 1v1h1v2h1v2h1v1h1v1h1v1h1v1h1v-1 1h1l-1 1v1h-1 1l-1 1v5l-1 1h-1v1l-1 1v1h-1v1l-1 1v1h-1v2h-1v2h-1v2h-1v7h-1v5h1v4h1v1h-1 1v1-1 1h1v1h1v1h1v1h2-1v1h1l1 1 1 1 1 1h-1v1h-1v2h-1v3l-1 1v5-1 1h-1v2-1h1v-1 1l-1 1v5h1v1h-1v1h-1v2h-1v1-1 6l1 1v2h1v1l1 1v1h1l1 1h1v1h2v2-1h2-1 1v-1h1v1h1v1h1v3h-2l-1 1h-4 1v1h-1v1l-1 1v2h-1v1h1v1h-1v1h1v2h2v1-1 2h1v1h-1v1h-2l-1-1-1 1h2v1h1v-1h1v2h1v3h1v3h1v1h1v1h1v4h1v3h1v1-1h2l-2 2v6h1l1-1v-2l1-1v1-1h1-1v1h1v1-1l1 1 1 1v2l1 1v2h-4v-1l-2 1v1l-1 1v2l-1-1-1 1h-3v1h-3l-1 1h-2l-1 1 1 1h-1v1h1v1h-1v1h-1v1h-1l-1 1-1-1v5h-1 1l-1 1h-1v1h-1v2h-8v-1h-2v-1h-2v1l-1-1v2-2h-1v-1h-2v-1h-3l-1-1-1-1h-1v-1h-1 1-1v-1h-1l-1-1v1l-1-1v1h-1l-1 1 1 3v2h-2l-3 1-1 1h-2l-1 1h-1l-1-1-1 1v1h-1l1 1h-1 1v1h-1v1h1-1 1v1h-1v1-1 1h-1v-2h-1v-1h-2v-1h-3v-1h-1v1h-2l-1-1h-4v-1h-1v2h-3v1l-1-1v1h-1v-1h-13l-4-1h-3v1-1h-2v-1 1h-1v-1h-1v1h-3v-1l-2-1-1-1h-1l-1-1-1-1v-1h-1l-1-1v-1h-3v-1h-1v-1l-1-1h-1v-4h-2l-1-1h-1 1-2l-1-1v-1h-2v-1 1-1h-2l-1 1v-1h-1v-1h1v-1h3v-1h2v-4h-1v-1h-1v-1h1v-1h-1v-1h1-1v-3h-2v-1h1v-1h1v-2h-1v-2h-1v-1h-1l-1-1h-3v-2h2v-1h4v1h2l1-1h3v-1h-1v-1h2v1h2v-1h2v-1h2v-1h2v1h1v1l1-1h3l1-1h1v-1h1l1-1 1-1v-1h1v-2h1l1-1 1-1h1v-5l1-1v-1h1v-1h-3v-2h1l-1-1v-2l-1-1v-2h-1v-2h-1v-7h-1v-3h-1v-1 1-1h-1l-1-1v-1h-1v-2h-3v-1h-1v-2h-1l-1-1-1-1v-2h-1v-1l-1-1 1-1h2v-1 1h-1v-1h1v-1h1l-1-1h1v-1h-1v-1l-1-1h-1v-2h-1l-1-1h-1l-1-1h-1v1l-1-1v1-1h-2v1-1h-4v-1h-1v-1h-1v-1 1h-1v-1h-3v-1 1h-2v-1h-1l-1 1h-2l-1-1v-1h-1v-1h-1v-2l-1-1 1-1h-1v-2h-1v-2l-1-1v-2 1-1h2-1l1-1v-7h-1v-15l1-1h3v1-1h-1l-1-1v-1l-1-1v-3l1-1v-7h1v-3h1v-1h-1v-1l1-1v-1h-1v-6h2-1v-1h-1v-1l-1-1v-5h1-1v-3h1v-1h-1 1-1v-1h1v-1h-1v-1l-1-1v-2h1v-2h-1l-1-1v-1h-1v-1h1v-2h3l1-1h1-1 1v-1h1v-1 1l1-1h1l1-1h1v-1l1-1h1v-1h2v-1l1-1h2v-1h3l1-1v-1h1v1h2v-1h3v-1h1v-1h1l1-1v-1l1-1v-2h1v-2l1-2v-2h1v-4h1-1v-2h-1v-1h1v1h7v1h6l1-1h2v1h1l1 1v-1h2v-1l1-1h1v-1h1v-1h1v-1h1v-1h1l1-1v-2h1v-1 1h1l1 1h1"></Path>

        <Path d="M351 510v1l1 1v1l1 1h-1l1 1-1-1-1 1v1l-1 3-1 2v1h1l-1 1h-1v1-1h-1v-1h-1v-1h-1v-1h-1v-1h-2l1-1v-1h1v-1l1-1h-1l1-1h2v-1 1-1h1v-1h1v-1h1v-1h1"></Path>

        <Path d="M391 506v1l1 1h1v1h1v1l1 1h-1v1h3l1 1h2v9h-2v1-1l-1 1v-1h-2v5l1 1 2 1v1h-1v2l-1 1v2h-1v1h1v1h1v2-1h-2v1h-3v-2l-1-1v-1h-1v-1h-1l-1-1h-1v1h-1v-2h-1l-1-1v1h-1v-1 1l-1-1h-5v2h-1l-1 1h-2v2h-2l1-1h-2v-2h-2v-1l-1 1h-2v-3h1v-1 1h1-1 1v-1h-1v-1h1v-3h-1l1-1h2v-1h1v-2h2v-2h5v-1h2v-1h1l1-1v-1h1v-1h1v-1h2l1-1v-1h-1 1v-1 1h1v-1h-1l1-1v-3h4"></Path>
        <Path d="M363 502h1v1h1l1 1v1l1 1v-1 1h2v-1h2v-1h1v1h3l-1 1h-3v1h-2v3l-2 4v4h-1v1h1l-1 1h-1v2h-1v1h-1v1h-1v2h1v2h-1l-1 1v-2h-1v-1h-1v1h-4l-1 1v-1h1v-1h-1 2l1-1v-2h-1v-1h1-1v-2h1v-1h1v-1l1-1v-2l-1-1-1-1v1-1l-1 1v-1h1-1 1v-1h1v-2l1-1v-1h1v1-1h-1l1-1 1-1v-2h-1l1-1h1v-1h1"></Path>
        <Path d="M241 504h-1l-1-1h-2v-1l-1-1h-1v-2l1 1h2l1 2 2 1v1"></Path>
        <Path d="M231 497h-2v-3l-1-1h-1v-2h1v2h1l1 1v1h1v2"></Path>
        <Path d="M295 490h-1v-1h1v1"></Path>
        <Path d="M270 490v-1h1l-1 1h1l1 1h2v1l1 1h2v1h1l1 1h2v1h2l-1 1v1h1v1h2v-1l1 1v-1l1 1h1v-1h1l1-1v2h1v2h1v1h1v1h-1 1v1h-1v1l1 1v1h1v1h1v2h1v1h2v1h2l1 1h1v1h1v1h3v-1l1 1h3v-1h1v1h4l1-1h2v-1h3v-1h1v1h2l1-1h2v-1h1v5l-1 1h1v1h1v1h-1 1-2v1h-1v2h-2v-1h-2v-1h-4l-1-1h-3v1h-2v-1h-2v-1 1h-5v1h-1l-2-1v1h-2v2h-1v-1h-5v1l1 1v1h-1l-1-1v-4h-5 1-1v1h-1v1h1v1h-2v1h-2v2h-2v1h-1v-1l-1-1h1l1-1 1-1v-5h-1 1v-1h1v-3l1-1v-1h-1v-3l-1-1v-1h-2v-1h-1v-1h-2v-1h-1v-2l-1-1v-1h-1v-1h-1l-2-1v-1h-1v-2h-1l-1-1-1-1v-1h-1v-1h1-1v-2h1l1 1 1 1"></Path>
      </g>
      <g>
        <Line d="M 400 580 l 65 90 1 0 M 520 590 l -55 80 " />
        <Line d="M 540 570 l -50 -220 " />
        <Circle cx="540" cy="570" r="1" />
        <Circle cx="400" cy="580" r="2" />
        <Circle cx="520" cy="590" r="2" />
      </g>
      <g>
        <Text x="488" y="345">
          동구
        </Text>
        <Text x="380" y="340">
          강화군
        </Text>
        <Text x="465" y="690">
          중구
        </Text>
        <Text x="547" y="520">
          서구
        </Text>
        <Text x="614" y="493">
          계양구
        </Text>
        <Text x="596" y="560">
          부평구
        </Text>
        <Text x="613" y="620">
          남동구
        </Text>
        <Text x="552" y="605">
          미추홀구
        </Text>
        <Text x="537" y="660">
          연수구
        </Text>
      </g>
    </MapSvg>
  );
}

export default Incheon;
