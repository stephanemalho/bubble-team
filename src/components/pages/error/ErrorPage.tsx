import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
      <p>404</p>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
    </>
  )
}

export default ErrorPage