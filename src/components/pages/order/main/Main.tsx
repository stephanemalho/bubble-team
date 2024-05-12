import styled from "styled-components";
import { theme } from "../../../../assets/theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(142, 106, 146, 0.2) inset ;
    flex: 1;

    display: grid;
    grid-template-columns: 1fr;

    /* .basket {
      background-color: pink;
    } */
`;