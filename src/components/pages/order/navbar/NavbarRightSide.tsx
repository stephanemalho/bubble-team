
import { useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Profile";
import ToggleButton from "../../../ui/ToggleButton";
import { runToast } from "./toast";
import { ToastContainer } from "react-toastify";
import { string } from "../../../constant";

export default function NavbarRightSide() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { username } = useParams();
  const showToast = runToast;

  const isAdminMode = (prev: boolean | undefined): void => {
    setIsAdmin(!prev);
    !isAdmin && showToast();
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdmin}
        onToggle={isAdminMode}
        labelIfChecked={string.TitleText.toastActive}
        labelIfUnchecked={string.TitleText.toastInactive}
      />
      <Profile username={username} />
      <ToastContainer />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;
