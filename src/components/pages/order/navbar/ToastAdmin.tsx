import { ToastContainer } from "react-toastify"
import { theme } from "../../../../assets/theme";
import styled from "styled-components";

function ToastAdmin() {
  return  <ToastAdminStyled />
}

export default ToastAdmin

const ToastAdminStyled = styled(ToastContainer)`
.toaster {
    max-width: 300px;
  }
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.pinky};
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