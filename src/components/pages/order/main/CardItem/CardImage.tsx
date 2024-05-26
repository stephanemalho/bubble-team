import styled from "styled-components";

export function CardImage(imageSource: string, title: string) {
  return (
    <CardImageStyled className="image">
      <img src={imageSource} alt={title} />
    </CardImageStyled>
  );
}

const CardImageStyled = styled.div`
    width: 100%;
    height: 180px;
    padding-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
`;