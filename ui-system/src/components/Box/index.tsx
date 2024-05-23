// Box.js
import styled from "styled-components";
import { spacing, SpacingProps } from "@/shared/spacing.ts";

interface BoxProps extends SpacingProps {}

// 여기서 `as` prop을 사용하여 컴포넌트의 요소 타입을 변경할 수 있습니다.
const Box = styled.div<BoxProps>`
  ${spacing}
`;

export default Box;
