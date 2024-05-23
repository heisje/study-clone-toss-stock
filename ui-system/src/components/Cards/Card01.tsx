import styled from "styled-components";
import { SvgIcon } from "@/components/SvgIcon";
import { Text } from "@/components/Text";
import { ReactNode } from "react";
import Flex from "@/components/Layout/Flex.tsx";

const StyledList = styled.div`
  display: flex;
  width: 25.875rem;
  padding: 0rem 1.5rem;
  justify-content: space-between;
  align-items: center;

  .left {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;

    .number {
      width: 1.25rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      gap: 0.625rem;
      align-self: stretch;

      color: var(--primary-primary);
    }

    .profile {
      display: flex;
      width: 3rem;
      height: 3rem;
      padding: 0.1875rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: 0.5rem;
      background: var(--blue-grey-tone-grey08);
    }
  }

  .text {
    div {
      color: var(--black-white-white);
    }

    caption {
      color: var(--blue-grey-tone-grey03);
    }
  }

  .right {
    display: flex;
    height: 1.5rem;
    padding: 0.375rem;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;
    background: var(--blue-grey-tone-grey06);

    color: var(--red-red);

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

interface CardProps {
  num?: number;
  children?: ReactNode;
}

export const Card01 = ({ num }: CardProps) => {
  return (
    <StyledList>
      <div className="left">
        {num && (
          <Flex className="number">
            <Text type={"title-4-2"}>{num}</Text>
          </Flex>
        )}
        <Flex align={"center"} gap={"1rem"}>
          <div className="profile">
            <SvgIcon iconId="rocket" />
          </div>
          <Flex
            className={"text"}
            direction={"column"}
            gap={"0.25rem"}
            align={"flex-start"}
          >
            <Text type={"title-3-2"}>종목</Text>
            <Text as={"caption"} type={"title-6-2"}>
              결과
            </Text>
          </Flex>
        </Flex>
      </div>

      <div className="right">
        <Text type={"body-5"}>+0.0%</Text>
      </div>
    </StyledList>
  );
};
