import { FormEvent , useState } from "react"
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import InputForm from "./InputForm";
import TitleForm from "./TitleForm";

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
      <InputForm icon={<BsPersonCircle className="icon" />} onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Entrez votre prénom" title="Entrer son prénom" name="username"/>
      <button type="submit" title="Accéder à mon espace">Accéder à mon espace</button>
    </LoginFormstyled>
  )
}

export default LoginForm

const LoginFormstyled = styled.form`
  background: rgba(0, 0, 0,0.5);
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
    background: #755377;
    border: 2px solid rgba(0, 0, 0,0.5);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: rgb(120, 91, 121);
      color: white;
      border: 2px solid white;
    }
    &:active {
      background: rgb(60, 40, 60);
      color: white;
      border: 2px solid white;
      scale: 0.9;
    }
  }
`;