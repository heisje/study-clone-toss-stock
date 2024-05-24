import Box from "@/components/Box";
import Text from "@/components/Text";
import styled from "styled-components";
import Flex from "@/components/Layout/Flex.tsx";
import { SvgIcon } from "@/components/SvgIcon";
import {
  SearchStocksCard,
  SearchStocksCardDataType,
} from "@/components/Cards/SearchStocksCard.tsx";

const SearchStocksContainer = styled(Box)`
  background: var(--blue-grey-tone-grey08);
`;

const SearchBar = styled(Box)`
  border-radius: 0.75rem;
  background: var(--blue-grey-tone-grey06);
  color: var(--blue-grey-tone-grey03, #7e7e87);
`;

const searchStocksCardData: Array<SearchStocksCardDataType> = [
  {
    iconId: "korea",
    title: "국내주식",
    description: "3,915종목",
    stateText: "창 닫힘",
    on: false,
  },
  {
    iconId: "usa",
    title: "해외주식",
    description: "9,142종목",
    stateText: "프리마켓",
    on: true,
  },
];

export const SearchStocks = () => {
  return (
    <SearchStocksContainer py={2.25} px={1.5}>
      <Text type={"title-2-2"}>찾는 주식이 있다면</Text>
      <SearchBar py={0.69} px={0.75} mt={1.25} mb={1.62}>
        <Flex gap={"0.75rem"}>
          <SvgIcon iconId={"search"} size={"1.25rem"} />
          <Text type={"body-4"}>주식 검색보기</Text>
        </Flex>
      </SearchBar>
      <Flex direction={"column"} gap={"1.88rem"}>
        {searchStocksCardData.map((d) => (
          <SearchStocksCard
            iconId={d.iconId}
            title={d.title}
            description={d.description}
            stateText={d.stateText}
            on={d.on}
          />
        ))}
      </Flex>
    </SearchStocksContainer>
  );
};
