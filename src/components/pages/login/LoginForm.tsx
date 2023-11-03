import { FormEvent, useState } from "react"

const LoginForm = () => {
  //State
  const [userName, setUserName] = useState("");
  //Behavior
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userName = target.elements.namedItem("username") as HTMLInputElement;
    alert(`Bienvenue ${userName.value} !`);
    setUserName("")
  }
  //JSX
  return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Bienvenue chez vous !</h1>
        <p>Connectez vous</p>
        <input
          onChange={(e) => setUserName(e.target.value)}
          name="username"
          value={userName}
          type="text"
          required
          placeholder="Entrez votre prénom..." />
        <button type="submit">Accéder à votre espace</button>
      </form>
  )
}

export default LoginForm