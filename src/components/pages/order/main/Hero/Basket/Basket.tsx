import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";

type BasketProps = {
  isBasketOpen: boolean;
};

function Basket({ isBasketOpen }:BasketProps) {
  return (
    <BasketStyled>{isBasketOpen ? <div className="basketList">basket item</div> : <div className="basketList">basket empty</div>}</BasketStyled>
  )
}

export default Basket

const BasketStyled = styled.div`
 height: 90%;
      margin: 10px;
      border-radius: ${theme.borderRadius.extraRound};
      background: rgba(255, 255, 255, 0.1);
      box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
      position: relative;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
`;