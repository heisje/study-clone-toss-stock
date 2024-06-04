import styled from "styled-components";
import { HTMLAttributes, ReactNode } from "react";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string;
  children?: ReactNode;
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap = "0" }) => gap};
`;

export const Flex = ({ children, ...props }: FlexProps) => {
  return <FlexContainer {...props}>{children}</FlexContainer>;
};

export default Flex;
