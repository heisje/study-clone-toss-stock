import styled from "styled-components";
import { Text } from "@/components/Text";

interface tabTitleProps {
  label: string;
  on?: boolean;
  className?: string;
}

const TabContainer = styled.button`
  display: inline-flex;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  background: none;
  border: none;

  label {
    color: var(--blue-grey-tone-grey02);
  }

  &.on {
    box-shadow: 0 2px 0 0 var(--black-white-white);

    label {
      color: var(--black-white-white);
    }
  }

  &:hover {
    box-shadow: 0 2px 0 0 var(--black-white-white);

    label {
      color: var(--black-white-white);
    }
  }
`;

export const Tab = ({ label, on = false, className }: tabTitleProps) => {
  return (
    <TabContainer className={`${on && "on"} ${className}`}>
      <Text as={"label"} type={on ? "title-3-2" : "body-3"}>
        {label}
      </Text>
    </TabContainer>
  );
};
