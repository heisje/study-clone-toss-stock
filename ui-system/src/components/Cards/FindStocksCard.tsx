import Flex from "@/components/Layout/Flex.tsx";
import Box from "@/components/Box";
import { SvgIcon, SVGIconType } from "@/components/SvgIcon";
import { Text } from "@/components/Text";
import styled from "styled-components";

const PickViewCardContainer = styled(Flex)`
  .mainIcon {
    border-radius: 0.5rem;
    background: var(--blue-grey-tone-grey08);
  }

  h3 {
    color: var(--black-white-white);
  }

  caption {
    color: var(--blue-grey-tone-grey03);
  }
`;

export interface FindStocksCardDataType {
  iconId: SVGIconType;
  title: string;
  description: string;
}

export const FindStocksCard = ({
  iconId,
  title,
  description,
}: FindStocksCardDataType) => {
  return (
    <PickViewCardContainer justify={"space-between"} align={"center"}>
      <Flex gap={"1rem"}>
        <Box className={"mainIcon"} p={1}>
          <SvgIcon iconId={iconId} size={"1.5rem"} />
        </Box>

        <Flex
          direction={"column"}
          justify={"center"}
          align={"flex-start"}
          gap={"0.25rem"}
        >
          <Text as={"h3"} type={"title-3-2"}>
            {title}
          </Text>
          <Text as={"caption"} type={"title-6-2"}>
            {description}
          </Text>
        </Flex>
      </Flex>
      <SvgIcon iconId={"arrow_right"} size={"1.5rem"} />
    </PickViewCardContainer>
  );
};
