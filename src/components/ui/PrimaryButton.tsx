import styled from "styled-components"
import { theme } from "../../assets/theme"

type PrimaryButtonProps = {
  label: string
  Icon?: JSX.Element
  className?: string
}

export default function PrimaryButton({ label, Icon, className } : PrimaryButtonProps) {
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
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.violeto};
  border: ${theme.colors.violeto};;

  &:hover {
    background-color: ${theme.colors.primary_bubble};
    color: ${theme.colors.white};
    transition: all 200ms ease-out;
  }
  &:active {
    background-color: ${theme.colors.violeto};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.violeto};;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`
