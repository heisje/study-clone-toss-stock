import Box from "@/components/Box";
import { SvgIcon } from "@/components/SvgIcon";
import Flex from "@/components/Layout/Flex.tsx";
import Text from "@/components/Text";
import styled from "styled-components";

const FooterContainer = styled(Box)`
  .etc {
    color: var(--blue-grey-tone-grey03, #7e7e87);
  }
`;
export const Footer = () => {
  return (
    <FooterContainer mt={2.25} pb={15} px={1.5}>
      <Flex>
        <SvgIcon iconId={"rocket"} size={"1.5rem"} />
        <Box ml={0.25}>
          <Text type={"title-4-2"}>토스증권</Text>
        </Box>
      </Flex>
      <Box my={1.5} className={"etc"}>
        <Text type={"body-6"}>
          토스증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한 단순
          참고용일뿐, 투자 제안 및 권유 - 종목 추천을 위해 작성된 것이 아닙니다.
        </Text>
      </Box>
      <Flex direction={"column"} gap={"0.38rem"} className={"etc"}>
        <Text type={"body-6"}>고객센터 | 투자 유의사항 | 개인정보처리방침</Text>
        <Text type={"body-6"}>이용자권리 및 유의사항 | 신용정보 활용체제</Text>
      </Flex>
      <Box mt={1.88}>
        <Flex
          className={"etc"}
          justify={"space-between"}
          direction={"row"}
          gap={"0.38rem"}
          align={"center"}
        >
          <Text type={"title-4-2"}>꼭 알아두세요</Text>
          <SvgIcon iconId={"arrow_right"} size={"1.5rem"} />
        </Flex>
      </Box>
    </FooterContainer>
  );
};
