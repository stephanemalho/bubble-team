import styled from 'styled-components';
import Menu from './Menu'; // Assurez-vous de bien importer votre composant Menu

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  width: 100%;
  box-shadow: 0px 8px 20px 8px rgba(159, 117, 122, 0.2) inset;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: scroll;

  /* .basket {
    background-color: pink;
  } */
`;
