
import { useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Profile";
import { theme } from "../../../../assets/theme";
import ToggleButton from "../../../ui/ToggleButton";
import { runToast } from "./toast";

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
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
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
    .toaster {
    max-width: 300px;
  }
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.violeto};
  }
  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
  .toastColor {
    color : ${theme.colors.primary_bubble};
  }
`;
