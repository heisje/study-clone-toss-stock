import Svgs from "@/shared/svgs/sprites.svg";
import { HTMLAttributes } from "react";
import styled from "styled-components";

export type SVGIconType =
  | "search"
  | "home"
  | "benefit"
  | "pay"
  | "stock"
  | "line_three"
  | "heart"
  | "arrow_right"
  | "rocket"
  | "increase"
  | "pot"
  | "korea"
  | "usa"
  | "graduate"
  | "factory"
  | "vehicle"
  | "meat"
  | "clothes"
  | "cosmetic"
  | "fire"
  | "toss"
  | "default_profile";

export interface SVGIconProps extends HTMLAttributes<SVGElement> {
  iconId: SVGIconType;
  size?: string;
  color?: string;
}

const Svg = styled.svg`
  position: relative;
`;

const Use = styled.use`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const SvgIcon = ({
  iconId,
  size = "100%",
  color,
  ...props
}: SVGIconProps) => (
  <Svg color={color} width={size} height={size} {...props}>
    <Use href={`${Svgs}#${iconId}`} width={size} height={size} />
  </Svg>
);
