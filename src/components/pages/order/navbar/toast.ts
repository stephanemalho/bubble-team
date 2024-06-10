import { FaCircleInfo } from 'react-icons/fa6';
import { Slide, ToastPosition, toast } from 'react-toastify';
import { TOAST_ADMIN } from '../../../constant/loginPage';

export const toastProperties = {
  icon: FaCircleInfo,
  position: "bottom-right" as ToastPosition,
  autoClose: 2200,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  transition: Slide,
};

export const toastMessage = TOAST_ADMIN.bannerActive;

export const runToast = () => toast(toastMessage, toastProperties);