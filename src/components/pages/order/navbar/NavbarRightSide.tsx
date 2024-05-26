
import { useParams } from "react-router-dom"
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../assets/theme";
import ToggleButton from "../../../ui/ToggleButton";
import { useState } from "react";

export default function NavbarRightSide() {
  const [isAdmin , setIsAdmin] = useState<boolean>(false);
  const { username } = useParams();

  return (
    <NavbarRightSideStyled>
      <ToggleButton 
        isChecked={isAdmin}
        onToggle={(prev) => setIsAdmin(!prev)}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile username={username} />
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
    background: ${theme.colors.background_dark};
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
`;
