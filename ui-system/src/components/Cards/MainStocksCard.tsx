import Text from "@/components/Text";
import Box from "@/components/Box";
import Flex from "@/components/Layout/Flex.tsx";
import styled from "styled-components";

export interface MainStocksCardType {
  title: string;
  money: string;
  percent: string;
}

const MainStocksCardContainer = styled(Box)`
  border-radius: 1rem;
  background: var(--blue-grey-tone-grey06, #2c2c35);

  .red {
    color: var(--red-red, #ef4452);
  }
`;

const ImgContainer = styled.img`
  width: 6.375rem;
  height: 2rem;
`;

export const MainStocksCard = ({
  title,
  money,
  percent,
}: MainStocksCardType) => {
  return (
    <MainStocksCardContainer py={1.25} px={0.875}>
      <Flex direction={"column"} gap={"0.25rem"}>
        <Text type={"body-6"}>{title}</Text>
        <Text type={"body-4"}>{money}</Text>
        <Text className={"red"} type={"body-5"}>
          {percent}
        </Text>
      </Flex>
      <ImgContainer src={"/image/graph/graph1.png"} alt={"graph"} />
    </MainStocksCardContainer>
  );
};
