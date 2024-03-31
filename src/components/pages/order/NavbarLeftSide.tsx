import styled from 'styled-components';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled className="left-side">
      <h1>LOGO</h1>
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
      background-color: pink;
`;