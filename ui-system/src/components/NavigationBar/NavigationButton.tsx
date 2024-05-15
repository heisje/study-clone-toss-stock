import styled from "styled-components";
import { ComponentType, ReactNode } from "react";
import { SvgIcon } from "@/components/SvgIcon";

interface NavigationButtonProps {
  label: string;
  onClick?: () => void;
  SvgIconComponent?: ComponentType;
  children?: ReactNode;
}

const StyledButton = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  padding: 2px 12px 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  cursor: pointer; /* 클릭 가능한 커서 스타일 */

  &:hover {
    background-color: #0056b3; /* 호버 시 색상 변경 */
  }

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const DefaultIcon = () => <SvgIcon iconId="rocket" size={24} />;

export const NavigationButton = ({
  label,
  SvgIconComponent = DefaultIcon,
  children,
  ...props
}: NavigationButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      <SvgIconComponent />
      <label>{label}</label>
      {children}
    </StyledButton>
  );
};
