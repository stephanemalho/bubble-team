import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

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
      <h1 title="Bienvenue chez vous">Bienvenue chez vous!</h1>
      <hr />
      <h2 title="Connectez vous">Connectez vous</h2>
      <div className="input-container"> 
      <BsPersonCircle  className="icon"/>
        <input
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          value={userName}
          type="text"
          required
          placeholder="Entrez votre prénom" title="Entrez votre prénom"/>
      </div>
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
  h1 {
    color: white;
    font-size: 3rem;
  }
  hr {
    border : 2px solid #755377;
  }
  h2 {
    color: white;
    font-size: 2.2rem;
  }
  .input-container {
    background: rgba(252, 227, 213,0.5);
    padding: 0.5rem 0;
    width: 100%;
    .icon {
      color: rgba(0, 0, 0,0.5);
      margin-right: 1rem;
    }
    input { 
      width: 80%;
      margin: 0;
      border: none;
      border-bottom: 2px solid #755377;
      outline: none;
      color: rgba(0, 0, 0,0.5);
      font-size: 1.5rem;
      background: transparent;
      caret-color: rgb(0, 0, 0);;
      &::placeholder {
        color: #755377;
        font-size: 1.5rem;
      }
    }
  }
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