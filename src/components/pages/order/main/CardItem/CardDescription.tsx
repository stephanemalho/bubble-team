import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import { Product } from "../../../../../fakeData/fakeMenu";

export function CardDescription<T extends Product>(title: string, leftDescription: string | undefined, renderRightDescription: (item: T) => React.ReactNode, item: T) {
  return (
    <CardDescriptionStyled className="text-info">
      <div className="title">{title}</div>
      <div className="description">
        <div className="left-description">{leftDescription}</div>
        <div className="right-description">{renderRightDescription(item)}</div>
      </div>
    </CardDescriptionStyled>
  );
}

const CardDescriptionStyled = styled.div`
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
        color: ${theme.colors.green};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      }
    }
`;