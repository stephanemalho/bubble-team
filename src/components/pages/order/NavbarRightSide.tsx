
import { useParams } from "react-router-dom"
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide() {
  const { username } = useParams();
  return (
    <NavbarRightSideStyled className="right-side">
      {/* <div className="admin-button">Admin button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
       display: flex;
       align-items: center;
       padding-right: 50px;
        background-color: yellow;
        /* .admin-button {
          background-color: red;
        } */
        .profile {
          background-color: orange;
        }
`;
