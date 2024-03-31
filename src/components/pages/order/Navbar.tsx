import { Link, useParams } from "react-router-dom"
import styled from "styled-components";

export default function Navbar() {
  const { username } = useParams();

  return (
    <NavbarStyled className="navbar">
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background-color: blue;
      height: 10vh;
`;