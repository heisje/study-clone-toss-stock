import Box from "@/components/Box";
import Text from "@/components/Text";
import Flex from "@/components/Layout/Flex.tsx";
import { SvgIcon } from "@/components/SvgIcon";
import {
  MainStocksCard,
  MainStocksCardType,
} from "@/components/Cards/MainStocksCard.tsx";
import styled from "styled-components";

const mainStocksCardData: Array<MainStocksCardType> = [
  {
    title: "나스닥",
    money: "16,346.27",
    percent: "+43.51 (0.2%)",
  },
  {
    title: "S&P 500",
    money: "5,214.08",
    percent: "+26.41 (0.5%)",
  },
  {
    title: "환률",
    money: "1,369.55",
    percent: "+1.65 (0.1%)",
  },
];
const MainStocksContainer = styled(Box)`
  .grey {
    color: var(--blue-grey-tone-grey02);
  }
`;

const MainStocksListContainer = styled(Box)`
  overflow-x: hidden;
`;

export const MainStocks = () => {
  return (
    <>
      <MainStocksContainer mt={1.5} mx={1.5}>
        <Flex justify={"space-between"} align={"center"}>
          <Text type={"title-2-2"}>주요 지수</Text>
          <Flex className={"grey"} justify={"center"} align={"center"}>
            <Text type={"body-5"}>전체보기</Text>
            <SvgIcon iconId={"arrow_right"} size={"1.5rem"} />
          </Flex>
        </Flex>
      </MainStocksContainer>
      <MainStocksListContainer ml={1.5} mt={1.5} mb={2.5}>
        <Flex gap={"0.75rem"}>
          {mainStocksCardData.map((d) => (
            <MainStocksCard
              title={d.title}
              money={d.money}
              percent={d.percent}
            />
          ))}
        </Flex>
      </MainStocksListContainer>
    </>
  );
};
