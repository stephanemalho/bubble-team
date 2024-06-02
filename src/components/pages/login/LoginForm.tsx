import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import TitleForm from "./TitleForm";
import { theme } from "../../../assets/theme";
import { LOGIN_PAGE } from "../../constant/loginPage";
import Input from "../../ui/Input";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`order/${username}`);
    setUsername("");
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <TitleForm />
      <Input
        Icon={<BsPersonCircle />}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder={LOGIN_PAGE.placeholder}
        title={LOGIN_PAGE.placeholder}
        name="username"
      />
      <button type="submit">{LOGIN_PAGE.loginText}</button>
    </LoginFormStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.form`
  border-radius: ${theme.borderRadius.extraRound};
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  position: relative;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255);
  text-align: center;
  max-width: 500px;
  width: 400px;
  height: 340px;
  padding: 0 2rem;
  margin: 0 auto;
  animation: box-shadow-move 18s ease infinite;

  @keyframes box-shadow-move {
    0% { box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%); }
    50% { box-shadow: 8px -8px 20px 0px rgb(0 0 0 / 20%); }
    100% { box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%); }
  }

  button {
    cursor: pointer;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    background: ${theme.colors.purpleLight};
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: ${theme.borderRadius.extraRound};
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${theme.colors.primary_bubble};
      color: white;
      border: 2px solid white;
    }

    &:active {
      background: ${theme.colors.purpleLight};
      color: white;
      border: 2px solid white;
    }
  }
`;
