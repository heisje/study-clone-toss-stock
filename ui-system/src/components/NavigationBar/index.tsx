import {NavigationButton} from "@/components/NavigationBar/NavigationButton.tsx";
import {SvgIcon} from "@/components/SvgIcon";
import styled from "styled-components"; // interface NavigationBarProps {

// interface NavigationBarProps {
//   children?: ReactNode;
// }
const NavigationContainer = styled.nav`
  display: inline-flex;
  padding: 0.375rem 1.6875rem;
  align-items: center;
  gap: 1.875rem;

  border-radius: 1.375rem 1.375rem 0rem 0rem;
  background: var(--blue-grey-tone-grey-08);
  box-shadow: 0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset;
`;

export const NavigationBar = () => {
  return (
    <NavigationContainer>
      <NavigationButton
        SvgIconComponent={() => <SvgIcon iconId="home" />}
        label={"홈"}
      />
      <NavigationButton
        SvgIconComponent={() => <SvgIcon iconId="benefit" />}
        label={"혜택"}
      />
      <NavigationButton
        SvgIconComponent={() => <SvgIcon iconId="pay" />}
        label={"혜택"}
      />
      <NavigationButton
        SvgIconComponent={() => <SvgIcon iconId="stock" />}
        label={"주식"}
      />
      <NavigationButton
        SvgIconComponent={() => <SvgIcon iconId="line_three" />}
        label={"전체"}
      />
    </NavigationContainer>
  );
};
