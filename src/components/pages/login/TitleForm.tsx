import styled from "styled-components";
import { theme } from "../../../assets/theme";
import { LOGIN_PAGE } from "../../constant/loginPage";


const TitleForm = () => {
  return (
    <TitleFormStyled>
      <h1 title={LOGIN_PAGE.loginMain}>{LOGIN_PAGE.loginMain}</h1>
      <hr />
      <h2 title={LOGIN_PAGE.loginSub}>{LOGIN_PAGE.loginSub}</h2>
    </TitleFormStyled>
  )
}

export default TitleForm

const TitleFormStyled = styled.div`
  h1 {
    color: white;
    font-size: 3rem;
    font-family: "Amatic sc", openSans;
  }
  hr {
    border : 2px solid ${theme.colors.purpleLight};
  }
  h2 {
    color: white;
    font-size: 2.2rem;
    font-family: "Amatic sc", openSans;
  }
`;