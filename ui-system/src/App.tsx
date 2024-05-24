// import {useState} from 'react'
import "@/shared/global.css";
import "@/shared/reset.css";

import "@/fonts/static/pretendard.css";

import { NavigationBar } from "@/components/NavigationBar";
import { Header } from "@/components/Header";
import { Tabs } from "@/components/Tabs";
import { Tab } from "@/components/Tabs/Tab.tsx";
import { MainStocks } from "@/components/TodayFind/MainStocks.tsx";
import { PopularCategory } from "@/components/TodayFind/PopularCategory.tsx";
import { PickViewStocks } from "@/components/TodayFind/PickViewStocks.tsx";
import { FindStocks } from "@/components/TodayFind/FindStocks.tsx";
import { SearchStocks } from "@/components/TodayFind/SearchStocks.tsx";
import { GeniusCopycat } from "@/components/TodayFind/GeniusCopycat.tsx";
import { Footer } from "@/components/Footer";
import styled from "styled-components";
import { LiveChart } from "@/components/TodayFind/LiveChart.tsx";
import { StockTags } from "@/components/TodayFind/StockTags.tsx";
import { HeadAdComponent } from "@/components/Header/HeadAdComponent.tsx";

const Global = styled.div`
  width: 414px;
  background-color: var(--black-white-black);
  font-family:
    "Pretendard Variable",
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    sans-serif;

  .grey {
    color: var(--blue-grey-tone-grey03);
  }

  .red {
    color: var(--red-red);
  }
`;

const Main = styled.main`
  width: 100%;
  background-color: var(--blue-grey-tone-grey08);
`;

function App() {
  return (
    <Global>
      {/*TODO: 글로벌 다크모드, 글로벌 사이즈 지정, 글로벌 기본 색*/}
      <Main>
        <Header />

        <HeadAdComponent />
        <Tabs layout={"fill"} px={1.5}>
          <Tab label={"내 주식"} />
          <Tab label={"오늘의 발견"} on />
          <Tab label={"뉴스"} />
        </Tabs>
        <MainStocks />
        <LiveChart />
      </Main>
      <PopularCategory />
      <PickViewStocks />
      <FindStocks />
      <SearchStocks />
      <GeniusCopycat />
      <StockTags />
      <Footer />

      <NavigationBar />
    </Global>
  );
}

export default App;
