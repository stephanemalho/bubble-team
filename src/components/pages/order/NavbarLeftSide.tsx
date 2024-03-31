import styled from 'styled-components';
import Title from '../../ui/Title';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled className="left-side">
      <Title size={2} rounded={3} />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
      background-color: pink;
`;