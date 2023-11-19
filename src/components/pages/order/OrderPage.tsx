import { Link, useParams } from "react-router-dom"

const OrderPage = () => {
  const { username } = useParams();
  return (
    <>
      <p>Bonjour {username}</p>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
    </>
  )
}

export default OrderPage