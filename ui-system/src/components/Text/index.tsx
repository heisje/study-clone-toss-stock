import React, { ElementType, HTMLAttributes } from "react";
import styled from "styled-components";
import "@/shared/global.css";

type TextType =
  | "title-1-2"
  | "title-2-2"
  | "title-3-2"
  | "title-4-2"
  | "title-5-2"
  | "title-6-2"
  | "body-3"
  | "body-4"
  | "body-5"
  | "body-6"
  | "body-7";

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  type?: TextType;
  bold?: boolean;
  color?: string;
}

const StyledText = styled.div<TextProps>``;

export const Text: React.FC<TextProps> = ({
  as: Component = "div",
  type = "body-3",
  className,
  children,
  ...props
}) => {
  return (
    <StyledText
      as={Component}
      className={[type, className].join(" ")}
      {...props}
    >
      {children}
    </StyledText>
  );
};
