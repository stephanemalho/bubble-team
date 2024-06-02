import { useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Profile";
import ToggleButton from "../../../ui/ToggleButton";
import { runToast } from "./toast";
import { string } from "../../../constant";
import ToastAdmin from "./ToastAdmin";

type ParamsType = {
  username: string; // éviter les fuites de rigueur
}

export default function NavbarRightSide() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { username } = useParams<ParamsType>();
  const showToast = runToast;
  
  const toggleAdminMode = (prev: boolean | undefined) => {
    setIsAdmin(!prev);
    !isAdmin && showToast();
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdmin}
        onToggle={toggleAdminMode}
        labelIfChecked={string.TitleText.toastActive}
        labelIfUnchecked={string.TitleText.toastInactive}
      />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;
