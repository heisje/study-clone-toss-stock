import { css } from "styled-components";

export interface SpacingProps {
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mx?: number;
  my?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

export const spacing = ({
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
}: SpacingProps) => css`
  margin-top: ${my ?? mt}rem;
  margin-right: ${mx ?? mr}rem;
  margin-bottom: ${my ?? mb}rem;
  margin-left: ${mx ?? ml}rem;
  padding: ${m ? `${m}rem` : undefined};
  padding-top: ${py ?? pt}rem;
  padding-right: ${px ?? pr}rem;
  padding-bottom: ${py ?? pb}rem;
  padding-left: ${px ?? pl}rem;
  padding: ${p ? `${p}rem` : undefined};
`;
