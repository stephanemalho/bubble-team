
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";
import { string } from "../../constant";

export default function NavbarRightSide() {
  const { username } = useParams();
  return (
    <NavbarRightSideStyled className="right-side">
      <h1>{string.TitleText.hello} {username}</h1>
      <Link to="/">
        <button>{string.Button.returnLogin}</button>
      </Link>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
        background-color: yellow;
`;
