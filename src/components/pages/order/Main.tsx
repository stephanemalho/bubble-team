import styled from "styled-components";
import { theme } from "../../../assets/theme";

export default function Main() {
  return (
    <MainStyled className="main">
      {""}
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(142, 106, 146, 0.2) inset ;
    flex: 1;
`;