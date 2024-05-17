import { Tab } from "@/components/Tabs/Tab.tsx";
import styled from "styled-components";

type tabsLayoutType = "fill" | "hug";

interface tabsProps {
  layout?: tabsLayoutType;
  className?: string;
}

const TabContainer = styled.nav`
  width: 25.875rem;

  &.hug {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.fill {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  box-shadow: 0 2px 0 0 var(--blue-grey-tone-grey06);
`;
export const Tabs = ({ layout = "hug", className, ...props }: tabsProps) => {
  return (
    <TabContainer className={`${layout} ${className}`} {...props}>
      <Tab label={"title1"} on />
      <Tab label={"title2"} />
      <Tab label={"title3"} />
      <Tab label={"title4"} />
      <Tab label={"title5"} />
    </TabContainer>
  );
};
