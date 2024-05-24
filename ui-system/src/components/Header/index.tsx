import { SvgIcon } from "@/components/SvgIcon";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex.tsx";
import { HTMLAttributes } from "react";
import Box from "@/components/Box";
import Text from "@/components/Text";

const HeaderContainer = styled.header`
  padding: 1rem 1.5rem;
  color: var(--blue-grey-tone-grey04);
`;

export const Header = ({ ...props }: HTMLAttributes<HTMLHeadElement>) => {
  return (
    <>
      <HeaderContainer {...props}>
        <Flex align={"flex-end"} justify={"flex-end"} gap={"1.5rem"}>
          <SvgIcon size={"1.5rem"} iconId={"search"} />
          <SvgIcon size={"1.5rem"} iconId={"line_three"} />
        </Flex>
      </HeaderContainer>
      <Box as={"div"} mx={1.5}>
        <Flex align={"flex-end"}>
          <Text type={"title-1-2"}>토스증권</Text>

          <Box ml={1}>
            <Flex>
              <Box mr={0.25}>
                <Text className={"grey"} type={"title-5-2"}>
                  환율
                </Text>
              </Box>
              <Flex className={"red"} gap={"0.25rem"}>
                <Text type={"title-5-2"}>1,368.55</Text>
                <Text type={"body-5"}>+0.1%</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
