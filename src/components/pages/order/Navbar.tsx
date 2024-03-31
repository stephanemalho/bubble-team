import styled from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
  return (
    <NavbarStyled className="navbar">
      <NavbarLeftSide />
      <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background-color: blue;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center; 
      padding: 0 1rem;
`;
