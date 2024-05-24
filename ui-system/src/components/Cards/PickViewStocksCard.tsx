import Flex from "@/components/Layout/Flex.tsx";
import { Text } from "@/components/Text";
import styled from "styled-components";
import { Avator } from "@/components/Avatar";
import Box from "@/components/Box";

const PickViewStocksCardContainer = styled(Flex)`
  .num {
    width: 1.25rem;
    display: flex;
    align-items: flex-start;
    color: var(--primary-primary);
  }

  h3 {
    color: var(--black-white-white);
  }

  .money {
    color: var(--blue-grey-tone-grey03);
  }

  .percent {
    color: var(--red-red);
  }
`;

export interface PickViewStocksCardDataType {
  image: string;
  title: string;
  percent: string;
}

export const PickViewStocksCard = ({
  image,
  title = "제목",
  percent = "+0.00%",
}: PickViewStocksCardDataType) => {
  return (
    <PickViewStocksCardContainer justify={"space-between"} align={"center"}>
      <Flex gap={"0.25"} align={"center"}>
        <Box ml={0.25}>
          <Flex gap={"1rem"}>
            <Avator image={image} size={"medium"} />
            <Flex
              direction={"column"}
              justify={"center"}
              align={"flex-start"}
              gap={"0.25rem"}
            >
              <Text as={"h3"} type={"title-3-2"}>
                {title}
              </Text>
              <Flex gap={"0.25rem"}></Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Text as={"caption"} className={"percent"} type={"title-3-2"}>
        {percent}
      </Text>
    </PickViewStocksCardContainer>
  );
};
