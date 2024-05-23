import { HTMLAttributes } from "react";
import { Card01 } from "@/components/Cards/Card01.tsx";
import Flex from "@/components/Layout/Flex.tsx";

export const LiveChart = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Flex direction={"column"} gap={"1.25rem"}>
        <Card01 num={1} />
        <Card01 num={2} />
      </Flex>
    </div>
  );
};
