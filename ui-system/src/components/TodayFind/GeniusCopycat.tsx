import Box from "@/components/Box";
import Text from "@/components/Text";
import Flex from "@/components/Layout/Flex.tsx";
import { Avator } from "@/components/Avatar";
import styled from "styled-components";

const StockTagsContainer = styled(Box)`
  background: var(--blue-grey-tone-grey08);

  .description {
    color: var(--blue-grey-tone-grey02);
  }
`;

export const GeniusCopycat = () => {
  return (
    <StockTagsContainer mt={1} py={2.25} px={1.5}>
      <Text as={"h2"} type={"title-2-2"}>
        주식천재 따라사기
      </Text>
      <Box mt={0.5}>
        <Text className={"description"} type={"body-5"}>
          먼저 부자가 된 그들의 선택은?
        </Text>
      </Box>
      <Box mt={2}>
        <Flex justify={"space-between"}>
          <Flex direction={"column"} gap={"1rem"} align={"center"}>
            <Avator image={""} size={"xxlarge"} />
            <Text className={"description"}>빌게이츠</Text>
          </Flex>
          <Flex direction={"column"} gap={"1rem"} align={"center"}>
            <Avator image={""} size={"xxlarge"} />
            <Text className={"description"}>켄 그리핀</Text>
          </Flex>
          <Flex direction={"column"} gap={"1rem"} align={"center"}>
            <Avator image={""} size={"xxlarge"} />
            <Text className={"description"}>글렌 그린버그</Text>
          </Flex>
        </Flex>
      </Box>
    </StockTagsContainer>
  );
};
