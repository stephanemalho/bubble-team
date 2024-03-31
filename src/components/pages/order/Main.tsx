import styled from "styled-components";

export default function Main() {
  return (
    <MainStyled className="main">
      main
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background-color: green;
    flex: 1;
`;