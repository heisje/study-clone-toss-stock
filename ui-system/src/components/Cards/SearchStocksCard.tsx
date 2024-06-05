import Flex from "@/components/Layout/Flex.tsx";
import Box from "@/components/Box";
import { SvgIcon, SVGIconType } from "@/components/SvgIcon";
import { Text } from "@/components/Text";
import styled from "styled-components";

const SearchStocksCardContainer = styled(Flex)`
  .mainIcon {
    border-radius: 0.5rem;
    background: var(--blue-grey-tone-grey08);
  }

  h3 {
    color: var(--blue-grey-tone-grey02, #9e9ea3);
  }

  caption {
    color: var(--blue-grey-tone-grey03);
  }

  .stateClose {
    color: var(--blue-grey-tone-grey03);
  }

  .statePrimary {
    color: var(--primary-primary);
  }
`;

export interface SearchStocksCardDataType {
  iconId: SVGIconType;
  title: string;
  description: string;
  stateText: string;
  on?: boolean;
}

export const SearchStocksCard = ({
  iconId,
  title,
  description,
  stateText,
  on = false,
}: SearchStocksCardDataType) => {
  return (
    <SearchStocksCardContainer justify={"space-between"} align={"center"}>
      <Flex gap={"1rem"}>
        <Box className={"mainIcon"}>
          <SvgIcon iconId={iconId} size={"2.5rem"} />
        </Box>

        <Flex direction={"column"} justify={"center"} gap={"0.25rem"}>
          <Text as={"h3"} type={"title-3-2"}>
            {title}
          </Text>
          <Text as={"caption"} type={"title-6-2"}>
            {description}
          </Text>
        </Flex>
      </Flex>
      <Flex align={"center"}>
        <Text className={on ? "statePrimary" : "stateClose"} type={"body-5"}>
          {stateText}
        </Text>
        <SvgIcon iconId={"arrow_right"} size={"1.5rem"} />
      </Flex>
    </SearchStocksCardContainer>
  );
};
