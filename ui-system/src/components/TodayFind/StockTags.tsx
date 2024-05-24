import Box from "@/components/Box";
import styled from "styled-components";
import Text from "@/components/Text";
import Flex from "@/components/Layout/Flex.tsx";

const StockTagsContainer = styled(Box)`
  width: 100% - 3rem;
  background: var(--blue-grey-tone-grey08);

  overflow-x: hidden;
`;
const TagsContainer = styled(Box)`
  position: relative;
  height: 3rem;
`;

const TagsRow1 = styled(Flex)`
  position: absolute;
  white-space: nowrap;
  width: 100%;
  left: -2rem;
`;

const TagsRow2 = styled(Flex)`
  position: absolute;
  white-space: nowrap;
  width: 100%;
  left: -3rem;
`;

const Tag = styled(Box)`
  display: flex;
  padding: 0.875rem 1.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.75rem;
  background: var(--blue-grey-tone-grey06);
`;
export const StockTags = () => {
  return (
    <StockTagsContainer mt={1} pt={2.25} pb={4.5} px={1.5}>
      <Text type={"title-2-2"}>아직 뭘 살지 모르겠다면</Text>
      <Box mt={2}>
        <Flex direction={"column"} gap={"1rem"}>
          <TagsContainer>
            <TagsRow1 gap={"1rem"}>
              <Tag>
                <Text type={"title-4-2"}>#텍스트</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#텍스트</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#동물용의약품</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#텍스트</Text>
              </Tag>
            </TagsRow1>
          </TagsContainer>
          <TagsContainer>
            <TagsRow2 gap={"1rem"}>
              <Tag>
                <Text type={"title-4-2"}>#아</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#친환경</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#신재생에너지</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#텍스트</Text>
              </Tag>
              <Tag>
                <Text type={"title-4-2"}>#텍스트</Text>
              </Tag>
            </TagsRow2>
          </TagsContainer>
        </Flex>
      </Box>
    </StockTagsContainer>
  );
};
