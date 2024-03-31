
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";

export default function NavbarRightSide() {
  const { username } = useParams();
  return (
    <NavbarRightSideStyled className="right-side">
      <h1>Bonjour {username}</h1>
      <Link to="/">
        <button>Retour à la page d'accueil</button>
      </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
        background-color: yellow;
`;
