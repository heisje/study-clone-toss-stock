import { SvgIcon } from "@/components/SvgIcon";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex.tsx";
import { HTMLAttributes } from "react";

const HeaderContainer = styled.header`
  padding: 1rem 1.5rem;
  color: var(--blue-grey-tone-grey04);
`;

export const Header = ({ ...props }: HTMLAttributes<HTMLHeadElement>) => {
  return (
    <HeaderContainer {...props}>
      <Flex align={"flex-end"} justify={"flex-end"} gap={"1.5rem"}>
        <SvgIcon size={"1.5rem"} iconId={"search"} />
        <SvgIcon size={"1.5rem"} iconId={"line_three"} />
      </Flex>
    </HeaderContainer>
  );
};
