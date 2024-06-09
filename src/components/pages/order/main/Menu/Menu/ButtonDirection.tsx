import styled from "styled-components";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

import { theme } from "../../../../../../assets/theme";

type ButtonDirectionProps = {
  onClick: () => void;
  direction: string;
};
function ButtonDirection({ onClick, direction }: ButtonDirectionProps) {

  return (
    <Button onClick={onClick}><div className="rounded">
      {direction === "left" ? <FaCaretLeft size={18} /> : <FaCaretRight size={18} />}
    </div></Button>
  )
}

export default ButtonDirection

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  background-color: ${theme.colors.pinky};
  color: white;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.lightPinky};
  }
  &:active {
    background-color: ${theme.colors.pinky};
  }

  .rounded {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, ${theme.colors.lightPinky}, ${theme.colors.pinky} 33%);
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);

    &:active {
      background: ${theme.colors.pinky};
    }  
  }
`;