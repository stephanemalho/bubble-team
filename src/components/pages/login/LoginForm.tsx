import { FormEvent , useState } from "react"
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import InputForm from "./InputForm";
import TitleForm from "./TitleForm";
import { string } from "../../constant";
import { theme } from "../../../assets/theme";

const LoginForm = () => {
  //State
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  //Behavior
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userName = target.elements.namedItem("username") as HTMLInputElement;
    navigate(`order/${userName.value}`);
    setUserName("");
  }

  //JSX
  return (
    <LoginFormstyled onSubmit={(e) => handleSubmit(e)}>
      <TitleForm />
      <InputForm icon={<BsPersonCircle className="icon" />} onChange={(e) => setUserName(e.target.value)} value={userName} placeholder={string.Input.placeholder} title={string.Input.placeholder} name="username"/>
      <button type="submit" title={string.Button.loginText}>{string.Button.loginText}</button>
    </LoginFormstyled>
  )
}

export default LoginForm

const LoginFormstyled = styled.form`
  border-radius: ${theme.borderRadius.extraRound};
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  position: relative;

  backdrop-filter: blur( 5px );
  -webkit-backdrop-filter: blur( 5px );
  border: 1px solid rgba( 255, 255, 255 );
  text-align: center;
  max-width : 500px;
  width : 400px;
  height: 340px;
  padding: 0 2rem;
  margin: 0 auto;
  button {
    cursor: pointer;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.purpleLight};
    border: 2px solid rgba(0, 0, 0,0.5);
    border-radius: ${theme.borderRadius.extraRound};
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background:  ${theme.colors.primary_bubble};
      color: white;
      border: 2px solid white;
    }
    &:active {
      background:  ${theme.colors.purpleLight};
      color: white;
      border: 2px solid white;
    }
  }
`;