import styled from "styled-components";


const TitleForm = () => {
  return (
    <TitleFormStyled>
      <h1 title="Bienvenue chez vous">Bienvenue chez vous!</h1>
      <hr />
      <h2 title="Connectez vous">Connectez vous</h2>
    </TitleFormStyled>
  )
}

export default TitleForm

const TitleFormStyled = styled.div`
  h1 {
    color: white;
    font-size: 3rem;
  }
  hr {
    border : 2px solid #755377;
  }
  h2 {
    color: white;
    font-size: 2.2rem;
  }
`;