// import {useState} from 'react'
import "@/shared/global.css";
import "@/shared/reset.css";

import { NavigationBar } from "@/components/NavigationBar";
import { Header } from "@/components/Header";
import { Text } from "@/components/Text";
import { Tabs } from "@/components/Tabs";
import { Tab } from "@/components/Tabs/Tab.tsx";
import { MainStocks } from "@/components/TodayFind/MainStocks.tsx";
import { LiveChart } from "@/components/TodayFind/LiveChart.tsx";
import { PopularCategory } from "@/components/TodayFind/PopularCategory.tsx";
import { PickViewStocks } from "@/components/TodayFind/PickViewStocks.tsx";
import { FindStocks } from "@/components/TodayFind/FindStocks.tsx";
import { SearchStocks } from "@/components/TodayFind/SearchStocks.tsx";
import { StockTags } from "@/components/TodayFind/StockTags.tsx";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div style={{ width: "414px" }}>
      {/*TODO: 글로벌 다크모드, 글로벌 사이즈 지정, 글로벌 기본 색*/}
      <Header />
      <Text className={"pl-g"} type={"title-1-2"}>
        토스증권
      </Text>
      <Tabs className={"p-g"} layout={"fill"}>
        <Tab label={"내 주식"} />
        <Tab label={"오늘의 발견"} on />
        <Tab label={"뉴스"} />
      </Tabs>

      <MainStocks />
      <LiveChart />
      <PopularCategory />
      <PickViewStocks />
      <FindStocks />
      <SearchStocks />
      <StockTags />
      <Footer />
      <NavigationBar />
    </div>
  );
}

export default App;
