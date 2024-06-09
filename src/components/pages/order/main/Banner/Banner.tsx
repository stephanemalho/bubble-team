import styled from "styled-components";
import ToppingList from "./Topping/ToppingList";


function Banner() {
  return (
    <BannerStyled>
      <ToppingList />
    </BannerStyled>
  )
}

export default Banner

const BannerStyled = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f5f5d7;
    padding: 10px 0;
    margin-bottom: 10px;
  `;