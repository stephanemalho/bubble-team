import { FaCircleInfo } from 'react-icons/fa6';
import { Slide, ToastPosition, toast } from 'react-toastify';

export const toastProperties = {
  icon: FaCircleInfo,
  position: "bottom-right" as ToastPosition, // Explicitly cast the position to ToastPosition
  autoClose: 2200,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  transition: Slide,
};

export const toastMessage = 'Admin activé !';

export const runToast = () => toast(toastMessage, toastProperties);