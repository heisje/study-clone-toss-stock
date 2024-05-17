import styled from "styled-components";
import { ReactNode } from "react";

interface FlexProps {
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
  className?: string;
  children?: ReactNode;
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap }) => gap};
`;

export const Flex = ({ children, className, ...props }: FlexProps) => {
  return (
    <FlexContainer className={className} {...props}>
      {children}
    </FlexContainer>
  );
};

export default Flex;
