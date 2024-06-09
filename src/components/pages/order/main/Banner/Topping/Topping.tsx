import styled from "styled-components";

import { theme } from "../../../../../../assets/theme";
import { ToppingProps } from "./toppingConfig";

function Topping({ Icon, name, onClick }: ToppingProps) {
  return (
    <ToppingStyled><div className="rounded" onClick={onClick}>
      <Icon />
    </div><span>{name}</span></ToppingStyled>
  )
}

export default Topping

const ToppingStyled = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 1.2rem;
      .rounded {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${theme.colors.pinky};
      box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), /* Inner shadow for relief */
                  0 4px 6px rgba(0, 0, 0, 0.1); /* Outer shadow */
          &.rounded:before {
      content: "";
      position: absolute;
      height: 40px;
      width: 40px;
      transition: all 500ms ease;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, ${theme.colors.lightPinky}, ${theme.colors.pinky} 33%);
      box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), /* Inner shadow for 3D effect */
                  0 4px 6px rgba(0, 0, 0, 0.1); /* Outer shadow */
    }
      svg {
        z-index: 2;
        font-size: 1rem;
        color: ${theme.colors.white};
      }
    }
      span {
        font-size: 1rem;
        margin-left: 10px;
        color: #00000071
      }
`;