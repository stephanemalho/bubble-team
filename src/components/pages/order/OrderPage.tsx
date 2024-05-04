import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { theme } from "../../../assets/theme";

const OrderPage = () => {
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

export default OrderPage

const OrderPageStyled = styled.div`
  background: ${theme.colors.primaryGradient}; // utilisation du gradient
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: red;
    height: 95vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
  }
  
`;