
import LoginForm from "./LoginForm"
import styled from 'styled-components';
import Logo from "../../ui/Title";

const LoginPage = () => {
  //State

  //JSX
  return (
    <FragmentStyled>
      <Logo/>
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

  ::before {
    content: "";
    background: url("/images/background-homepage.jpg");
    background-size: cover;
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:-1;
  }
`;
