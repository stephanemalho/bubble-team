import styled from "styled-components";
import { Product } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../assets/theme";

export type CardItemProps<T extends Product> = {
  item: T;
  renderRightDescription: (item: T) => React.ReactNode;
};

export default function CardItem<T extends Product>({ item, renderRightDescription }: CardItemProps<T>) {
  const { title, imageSource, leftDescription } = item;
  return (
    <CardItemStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">{renderRightDescription(item)}</div>
        </div>
      </div>
    </CardItemStyled>
  );
}

const CardItemStyled = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  position: relative;
  
.image {
    width: 100%;
    height: 180px;
    padding-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 50px;
      margin-top: 10px;
      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      }
    }
  }

  
`;
