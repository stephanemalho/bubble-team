import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import InputForm from "./InputForm";
import TitleForm from "./TitleForm";
import { theme } from "../../../assets/theme";
import { LOGIN_PAGE } from "../../constant/loginPage";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const userNameInput = target.elements.namedItem("username") as HTMLInputElement;
    const userName = userNameInput.value;
    navigate(`order/${userName}`);

    setUserName("");
  }

  return (
    <LoginFormstyled onSubmit={(e) => handleSubmit(e)}>
      <TitleForm />
      <InputForm icon={<BsPersonCircle className="icon" />} onChange={(e) => setUserName(e.target.value)} value={userName} placeholder={LOGIN_PAGE.placeholder} title={LOGIN_PAGE.placeholder} name="username" />
      <button type="submit">{LOGIN_PAGE.loginText}</button>
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
