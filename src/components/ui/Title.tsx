import styled from 'styled-components';
import { theme } from '../../assets/theme';
import { string } from '../constant';

type TitleProps = {
  size: number;
  rounded: number;
}

const Title = ({size, rounded}:TitleProps) => {
  return (
    <TitleStyled
      size={size}
      rounded={rounded}
    >
    <h1>{string.TitleText.titleLeft}</h1>
    <img src={string.Images.logo} alt={string.Images.alt} />
    <h1>{string.TitleText.titleRight}</h1>
    </TitleStyled>
  )
}

export default Title

const TitleStyled = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  font-family: "Amatic sc", openSans;
  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${(props) => props.size}rem;
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: ${theme.letterSpacing.title};
    text-shadow: ${theme.shadows.title};
  }
  img {
    object-fit: contain;
    object-position: center;
    height: ${(props) => props.rounded}rem;
    width: ${(props) => props.rounded}rem;
    margin: 0 1rem;
    border-radius: ${theme.borderRadius.circle};
    border: ${theme.border.white};
  }
`;


