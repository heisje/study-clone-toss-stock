import Flex from "@/components/Layout/Flex.tsx";
import { SvgIcon } from "@/components/SvgIcon";
import { Text } from "@/components/Text";
import styled from "styled-components";
import { Avator, countryCodeType } from "@/components/Avatar";
import Box from "@/components/Box";

const LiveChartCardContainer = styled(Flex)`
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

export interface LiveChartCardDataType {
  num: number;
  image: string;
  countryCode: countryCodeType;
  title: string;
  money: string;
  percent: string;
}

export const LiveChartCard = ({
  num = 1,
  image,
  countryCode = "US",
  title = "제목",
  money = "00,000원",
  percent = "+0.00%",
}: LiveChartCardDataType) => {
  return (
    <LiveChartCardContainer justify={"space-between"} align={"center"}>
      <Flex gap={"0.25"} align={"center"}>
        <Text className={"num"} type={"title-4-2"}>
          {num}
        </Text>
        <Box ml={0.25}>
          <Flex gap={"1rem"}>
            <Avator image={image} size={"medium"} countryCode={countryCode} />
            <Flex direction={"column"} justify={"center"} gap={"0.25rem"}>
              <Text as={"h3"} type={"title-4-2"}>
                {title}
              </Text>
              <Flex gap={"0.25rem"}>
                <Text as={"caption"} className={"money"} type={"body-6"}>
                  {money}
                </Text>
                <Text as={"caption"} className={"percent"} type={"body-6"}>
                  {percent}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <SvgIcon iconId={"heart"} size={"1.5rem"} />
    </LiveChartCardContainer>
  );
};
