
import LoginForm from "./LoginForm"
import styled from 'styled-components';
import Logo from "../../ui/Title";

const LoginPage = () => {

  return (
    <FragmentStyled>
      <Logo size={4} rounded={6} />
      <LoginForm />
    </FragmentStyled>
  )
}

export default LoginPage

//replace div by fragment to avoid useless div in the DOM
const FragmentStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  background: linear-gradient(270deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  background-size: 600% 600%;

  -webkit-animation: order-bg 18s ease infinite;
  -moz-animation: order-bg 18s ease infinite;
  animation: order-bg 18s ease infinite;

  @-webkit-keyframes order-bg {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @-moz-keyframes order-bg {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes order-bg {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
