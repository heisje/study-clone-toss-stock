import Flex from "@/components/Layout/Flex.tsx";
import { Text } from "@/components/Text";
import Box from "@/components/Box";
import { Tabs } from "@/components/Tabs";
import { Tab } from "@/components/Tabs/Tab.tsx";
import { TabsMore } from "@/components/Tabs/TabsMore.tsx";
import {
  LiveChartCard,
  LiveChartCardDataType,
} from "@/components/Cards/LiveChartCard.tsx";

const liveChartData: Array<LiveChartCardDataType> = [
  {
    num: 1,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "노바백스",
    money: "13,131원",
    percent: "+114.7%",
  },
  {
    num: 2,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "이테오스 테라퓨틱스",
    money: "22,707원",
    percent: "+36.1%",
  },
  {
    num: 3,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "SOXL",
    money: "55,782원",
    percent: "+2.0%",
  },
  {
    num: 4,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "센서스 헬스케어",
    money: "6,743원",
    percent: "+29.3%",
  },
  {
    num: 5,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "KOLD",
    money: "81,718원",
    percent: "+2.5%",
  },
  {
    num: 6,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "BOIL",
    money: "21,626원",
    percent: "-2.5%",
  },
  {
    num: 7,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "테슬라",
    money: "236,222원",
    percent: "+0.4%",
  },
  {
    num: 8,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "사운드하운드 AI",
    money: "7,468원",
    percent: "+14.9%",
  },
  {
    num: 9,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "매크로제닉스",
    money: "6,032원",
    percent: "+69.9%",
  },
  {
    num: 10,
    image: "https://source.unsplash.com/random/64×64",
    countryCode: "US",
    title: "NVDL",
    money: "53,348원",
    percent: "+2.5%",
  },
];

export const LiveChart = () => {
  return (
    <>
      <Box mx={1.5}>
        <Box mt={2.5} mb={0.75}>
          <Text type={"title-2-2"}>실시간 차트</Text>
        </Box>
      </Box>
      <Tabs px={1.5}>
        <Tab label={"거래량"} on />
        <Tab label={"인기"} />
        <Tab label={"급상승"} />
        <Tab label={"급하락"} />
        <Tab label={"관심"} />
      </Tabs>
      <Box py={1.5} mx={1.5}>
        <Flex direction={"column"} gap={"1.25rem"}>
          {liveChartData.map((d) => (
            <LiveChartCard
              num={d.num}
              countryCode={d.countryCode}
              image={d.image}
              money={d.money}
              percent={d.percent}
              title={d.title}
            />
          ))}
        </Flex>
      </Box>
      <TabsMore />
    </>
  );
};
