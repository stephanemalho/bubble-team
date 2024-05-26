import styled from "styled-components"
import { theme } from "../../assets/theme"

type ToggleButtonProps = {
  isChecked: boolean
  onToggle: (prev: boolean | undefined) => void
  labelIfChecked?: string
  labelIfUnchecked?: string
  onClick?: () => void
}

export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",
  labelIfUnchecked = "Ouvrir",
}: ToggleButtonProps) {
  return (
    <ToggleButtonStyled>
      <input
        type="checkbox"
        className="toggle"
        id="rounded"
        checked={isChecked}
        onChange={() => onToggle(isChecked)}
      />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
    </ToggleButtonStyled>
  )
}

const ToggleButtonStyled = styled.div`
  display: flex;
  margin-right: 10px;

  input[type="checkbox"] {
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${theme.colors.primary_bubble};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;
      border-radius: 30px; /* Rounded corners */
      background: ${theme.colors.violeto};
      box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), /* Inner shadow for relief */
                  0 4px 6px rgba(0, 0, 0, 0.1); /* Outer shadow */
    }

    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, ${theme.colors.purpleLight}, ${theme.colors.violeto});
      box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), /* Inner shadow for 3D effect */
                  0 4px 6px rgba(0, 0, 0, 0.1); /* Outer shadow */
    }

    &.toggle + label:after {
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &.toggle:not(:checked) + label {
      background-color: ${theme.colors.violeto};
    }

    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${theme.colors.white};
      font-weight: ${theme.fonts.weights.bold};
    }

    &.toggle:not(:checked) + label:before {
      left: 3px;
    }

    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary_bubble};
      background-color: ${theme.colors.white}; /* Update to match theme */
    }

    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.violeto};
      letter-spacing: 0px;
    }

    &.toggle:checked + label:before {
      left: 162px;
    }
  }
`