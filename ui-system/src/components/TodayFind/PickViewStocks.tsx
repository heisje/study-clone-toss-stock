import Box from "@/components/Box";
import { Text } from "@/components/Text";
import styled from "styled-components";
import { TabsMore } from "@/components/Tabs/TabsMore.tsx";
import {
  PickViewStocksCard,
  PickViewStocksCardDataType,
} from "@/components/Cards/PickViewStocksCard.tsx";
import Flex from "@/components/Layout/Flex.tsx";

const BoxContainer = styled(Box)`
  border-radius: 1.5rem 1.5rem 0 0;

  background-color: var(--blue-grey-tone-grey08);

  h3 {
    color: var(--blue-grey-tone-grey01);
  }

  p {
    word-break: keep-all;
    color: var(--blue-grey-tone-grey03);
  }
`;

const TabsMoreStyled = styled(TabsMore)`
  border-radius: 0 0 1.5rem 1.5rem;

  background-color: var(--blue-grey-tone-grey08);
`;

const PickViewStocksData: Array<PickViewStocksCardDataType> = [
  {
    image: "https://source.unsplash.com/random/64×64",
    title: "린데",
    percent: "+0.1%",
  },
  {
    image: "https://source.unsplash.com/random/64×64",
    title: "액센츄어",
    percent: "+1.0%",
  },
  {
    image: "https://source.unsplash.com/random/64×64",
    title: "이튼",
    percent: "+0.5%",
  },
];
export const PickViewStocks = () => {
  return (
    <Box mt={2.5} mx={1.5}>
      <Box mb={1.875}>
        <Text type={"title-2-2"}>주식 골라보기</Text>
      </Box>
      <BoxContainer pt={1.5} px={1.5}>
        <Box mb={1}>
          <Text as={"h3"} type={"title-3-2"}>
            미래의 배당왕 찾기
          </Text>
        </Box>
        <Text as={"p"} type={"body-5"}>
          실적 성장으로 배당을 꾸준히 늘리고 있는 주식들을 모았어요
        </Text>
        <Box py={1.875}>
          <Flex direction={"column"} gap={"1.5rem"}>
            {PickViewStocksData.map((d) => (
              <PickViewStocksCard
                image={d.image}
                title={d.title}
                percent={d.percent}
              />
            ))}
          </Flex>
        </Box>
      </BoxContainer>
      <TabsMoreStyled text={"56개 주식 더보기"} />
    </Box>
  );
};
