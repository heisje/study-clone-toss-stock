import { HTMLAttributes } from "react";
import { Card01 } from "@/components/Cards/Card01.tsx";
import Flex from "@/components/Layout/Flex.tsx";
import { Text } from "@/components/Text";
import styled from "styled-components";
import Box from "@/components/Box";
import { Tabs } from "@/components/Tabs";
import { Tab } from "@/components/Tabs/Tab.tsx";
import { TabsMore } from "@/components/Tabs/TabsMore.tsx";

const DivContainer = styled.div`
  background: var(--blue-grey-tone-grey08);
`;

const StyledBox = styled(Box)`
  background: var(--black-white-black);
`;

interface fetchedDataList {
  num: number;
  title: string;
  description: string;
  rate: string;
}

const fetchedDataList: Array<fetchedDataList> = [
  {
    num: 1,
    title: "종합반도체",
    description: "4개 중 3개 종목 상승",
    rate: "+10.5%",
  },
  {
    num: 2,
    title: "자전거",
    description: "4개 중 3개 종목 상승",
    rate: "+6.9%",
  },
  {
    num: 3,
    title: "돼지고기",
    description: "6개 중 5개 종목 상승",
    rate: "+4.1%",
  },
  {
    num: 4,
    title: "홈쇼핑",
    description: "3개 중 3개 종목 상승",
    rate: "+3.2%",
  },
  {
    num: 5,
    title: "화장품브랜드",
    description: "42개 중 28개 종목 상승",
    rate: "+2.3%",
  },
];

export const PopularCategory = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <StyledBox pt={1} />
      <DivContainer className={`${className}`} {...props}>
        <Box mt={2} mx={1.5} mb={0.75}>
          <Text type={"title-2-2"}>지금 뜨고 있는 카테고리</Text>
        </Box>
        <Tabs layout={"fill"}>
          <Tab label={"국내"} />
          <Tab label={"해외"} on />
        </Tabs>
        <Box my={1.5} mx={1.5}>
          <Flex direction={"column"} gap={"1.5rem"}>
            {fetchedDataList.map(({ num, title, description, rate }) => (
              <Card01
                num={num}
                title={title}
                description={description}
                rate={rate}
                key={title}
              />
            ))}
          </Flex>
        </Box>
        <TabsMore />
      </DivContainer>
    </>
  );
};
