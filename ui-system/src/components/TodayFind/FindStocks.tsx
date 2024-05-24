import {
  FindStocksCard,
  FindStocksCardDataType,
} from "@/components/Cards/FindStocksCard.tsx";
import Flex from "@/components/Layout/Flex.tsx";
import Box from "@/components/Box";
import { TabsMore } from "@/components/Tabs/TabsMore.tsx";

const mockUpData: Array<FindStocksCardDataType> = [
  {
    iconId: "rocket",
    title: "저평가 성장주",
    description: "앞으로 성장할 저평가된 주식들을 모았어요",
  },
  {
    iconId: "increase",
    title: "성장 기대주",
    description: "이익이 빠르게 늘고 있는 회사들을 모았어요",
  },
  {
    iconId: "pot",
    title: "안정 성장주",
    description: "꾸준하게 이익이 늘고 있는 회사들을 모았어요",
  },
];
export const FindStocks = () => {
  return (
    <>
      <Box mt={2.5} mx={1.5} mb={1.875}>
        <Flex direction={"column"} gap={"1.88rem"}>
          {mockUpData.map((d) => (
            <FindStocksCard
              iconId={d.iconId}
              title={d.title}
              description={d.description}
            />
          ))}
        </Flex>
      </Box>
      <TabsMore />
    </>
  );
};
