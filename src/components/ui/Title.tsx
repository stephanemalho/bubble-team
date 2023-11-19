import styled from 'styled-components';

const Title = () => {
  return (
    <TitleStyled>
    <h1>Bubble</h1>
    <img src="/images/bubble-title.png" alt="logoTitle" />
    <h1>team</h1>
    </TitleStyled>
  )
}

export default Title

const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  h1 {
    display: inline;
    text-align: center;
    color: #221202;
    font-size: 5rem;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    text-shadow: 1px 1px 0px #fff;
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 8rem;
    width: 8rem;
    margin: 0 1rem;
    border-radius: 50%;
    border: 2px solid #fff;
  }
`;


