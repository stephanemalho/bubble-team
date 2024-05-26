import styled from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";
import { theme } from "../../../../assets/theme";

export default function Navbar() {
  return (
    <NavbarStyled className="navbar">
      <NavbarLeftSide />
      <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background: ${theme.colors.white};
      height: 10vh;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      border-bottom: ${theme.border.light};
`;
