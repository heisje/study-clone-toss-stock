import Box from "@/components/Box";
import styled from "styled-components";
import { SvgIcon } from "@/components/SvgIcon";
import Text from "@/components/Text";
import Flex from "@/components/Layout/Flex.tsx";

const HeadAdComponentContainer = styled(Box)`
  border-radius: 1.5rem;
  background: var(--blue-grey-tone-grey06, #2c2c35);

  .caption {
    color: var(--blue-grey-tone-grey03, #7e7e87);
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }
`;

const HeadAdButton = styled(Box)`
  padding: 0.625rem 1.125rem;

  border-radius: 0.5rem;
  background: var(--primary-primary, #3182f6);
`;
export const HeadAdComponent = () => {
  return (
    <HeadAdComponentContainer my={1.5} mx={1.5} py={2.06}>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <SvgIcon iconId={"graduate"} size={"3rem"} />
        <Box my={1.25}>
          <Text type={"title-2-2"}>
            퀴즈 맞히면
            <br />
            주식 최대 100만원
          </Text>
        </Box>
        <HeadAdButton>
          <Text>퀴즈 풀러가기</Text>
        </HeadAdButton>
        <Box mt={1}>
          <Text className={"caption"} type={"title-5-2"}>
            퀴즈 없이 계좌 만들기
          </Text>
        </Box>
      </Flex>
    </HeadAdComponentContainer>
  );
};
