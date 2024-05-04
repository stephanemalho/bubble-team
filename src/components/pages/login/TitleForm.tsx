import styled from "styled-components";
import { string } from "../../constant";


const TitleForm = () => {
  return (
    <TitleFormStyled>
      <h1 title={string.TitleText.loginMain}>{string.TitleText.loginMain}</h1>
      <hr />
      <h2 title={string.TitleText.loginSub}>{string.TitleText.loginSub}</h2>
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
    border : 2px solid #755377;
  }
  h2 {
    color: white;
    font-size: 2.2rem;
    font-family: "Amatic sc", openSans;
  }
`;