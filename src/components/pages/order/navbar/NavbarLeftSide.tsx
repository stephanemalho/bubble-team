import styled from 'styled-components';
import Title from '../../../ui/Title';
import { refreshWindow } from '../../../../utils/window';

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled onClick={refreshWindow}>
      <Title size={2} $rounded={3} />
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
      display: flex;
      height: 100%; 
      margin-left: 20px;  
      cursor: pointer;
`;