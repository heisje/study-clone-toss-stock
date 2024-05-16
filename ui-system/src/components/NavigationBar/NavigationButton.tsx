import styled from "styled-components";
import { ComponentType, ReactNode } from "react";
import { SvgIcon } from "@/components/SvgIcon";
import "@/shared/global.css";

interface NavigationButtonProps {
  label: string;
  onClick?: () => void;
  SvgIconComponent?: ComponentType;
  children?: ReactNode;
}

const StyledButton = styled.button`
  // layouts
  display: flex;
  width: 3rem;
  height: 3rem;
  padding: 0.125rem 0.75rem 0.5rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  flex-shrink: 0;

  // shape
  border-radius: 0.875rem;

  // color
  background: none;
  border: none;

  //etc
  cursor: pointer; /* 클릭 가능한 커서 스타일 */

  &:hover {
  }

  &:active {
    background: var(--blue-grey-tone-grey-07);
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  label {
    color: var(--blue-grey-tone-grey-04);

    /* 명칭7 */
    // font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 120% */
    letter-spacing: -0.05px;
  }
`;

const DefaultIcon = () => <SvgIcon iconId="home" size={"1.5rem"} />;

export const NavigationButton = ({
  label,
  SvgIconComponent = DefaultIcon,
  children,
  ...props
}: NavigationButtonProps) => {
  return (
    <StyledButton className={"icon-red"} type="button" {...props}>
      <SvgIconComponent />
      <label>{label}</label>
      {children}
    </StyledButton>
  );
};
