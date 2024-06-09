import styled from 'styled-components';
import { theme } from '../../assets/theme';
import { LOGIN_PAGE, LOGO_PATH } from '../../constant/loginPage';

type TitleProps = {
  size: number;
  $rounded: number; // Utilisez le préfixe $ pour les props transitoires
}

const Title = ({ size, $rounded }: TitleProps) => {
  return (
    <TitleStyled
      size={size}
      $rounded={$rounded} // Utilisez le préfixe $ ici aussi
    >
      <h1>{LOGIN_PAGE.titleLeft}</h1>
      <img src={LOGO_PATH} alt={LOGIN_PAGE.alt} />
      <h1>{LOGIN_PAGE.titleRight}</h1>
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
    background: ${theme.colors.primary_bubble};
    object-fit: contain;
    object-position: center;
    height: ${(props) => props.$rounded}rem; // Utilisez le préfixe $ ici aussi
    width: ${(props) => props.$rounded}rem; // Utilisez le préfixe $ ici aussi
    border-radius: ${theme.borderRadius.circle};
    border: ${theme.border.white};
  }
`;
