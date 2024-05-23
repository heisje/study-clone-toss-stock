import styled from "styled-components";
import { HTMLAttributes, ReactNode } from "react";

type tabsLayoutType = "fill" | "hug";

interface tabsProps extends HTMLAttributes<HTMLUListElement> {
  layout?: tabsLayoutType;
  className?: string;
  children?: ReactNode;
}

const TabContainer = styled.ul`
  &.hug {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &.fill {
    display: flex;
    //display: grid;
    //grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;
    list-style-type: none;

    li {
      flex: 1 1 0;
    }
  }

  box-shadow: 0 2px 0 0 var(--blue-grey-tone-grey06);
`;
export const Tabs = ({
  layout = "hug",
  className,
  children,
  ...props
}: tabsProps) => {
  return (
    <TabContainer className={`${layout} ${className}`} {...props}>
      {children}
    </TabContainer>
  );
};
