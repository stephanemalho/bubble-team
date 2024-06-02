import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import Main from "./main/Main";

const OrderPage = () => {
  return (
    <OrderPageStyled className="order-bg">
      <Navbar />
      <Main />
    </OrderPageStyled>
  )
}

export default OrderPage

const OrderPageStyled = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(100deg, #e0b5a9, #fad0c4);
`;
