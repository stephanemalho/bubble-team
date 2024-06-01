import styled from "styled-components"
import { theme } from "../../assets/theme"

type PrimaryButtonProps = {
  label: string
  Icon?: JSX.Element
  className?: string
}

export default function PrimaryButton({ label, Icon, className }: PrimaryButtonProps) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  height: auto;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;
  padding: 14px 24px;
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  font-size: 15px;
  font-weight: 800;
  color: ${theme.colors.primary};
  background-color: transparent;
  border: ${theme.colors.pinky};;
  border: 1px solid ${theme.colors.greyMedium};
  border-top: 0;

  &:hover {
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 ${theme.colors.pinky};
    backdrop-filter: blur( 14.5px );
    -webkit-backdrop-filter: blur( 14.5px );
    transition: all 200ms ease-out;
  }
  &:active {
    box-shadow: 0 8px 32px 0 ${theme.colors.pinky} inset;
    color: ${theme.colors.primary};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.pinky};;
    }
    &:active {
      color: ${theme.colors.primary};
    }
  }
`
