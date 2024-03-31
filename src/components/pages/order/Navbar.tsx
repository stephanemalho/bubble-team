import { Link, useParams } from "react-router-dom"
import styled from "styled-components";

export default function Navbar() {
  const { username } = useParams();

  return (
    <NavbarStyled className="navbar">
      <div className="left-side">
        <h1>LOGO</h1>
      </div>
      <div className="right-side">
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Retour à la page d'accueil</button>
        </Link>
      </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
      background-color: blue;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-side {
                background-color: pink;
      }

      .right-side {
        background-color: yellow;
      }
`;
