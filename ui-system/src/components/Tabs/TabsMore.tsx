import styled from "styled-components";
import { HTMLAttributes } from "react";
import { Text } from "@/components/Text";

const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  padding: 1.25rem 0;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  background: none;
  border: none;
  border-top: 0.5px solid var(--blue-grey-tone-grey06);
  color: var(--blue-grey-tone-grey02);
`;

interface TabsMoreProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const TabsMore = ({ text = "더 보기", ...props }: TabsMoreProps) => {
  return (
    <ButtonContainer {...props}>
      <Text type={"body-4"}>{text}</Text>
    </ButtonContainer>
  );
};
