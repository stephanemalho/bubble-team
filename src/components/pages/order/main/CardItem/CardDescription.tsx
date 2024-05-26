import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import { Product } from "../../../../../fakeData/fakeMenu";

export function CardDescription<T extends Product>(title: string, topDescription: string | undefined, renderBottomDescription: (item: T) => React.ReactNode, item: T) {
  return (
    <CardDescriptionStyled >
      <div className="title">{title}</div>
      <div className="description">
        <div className="top-description">{topDescription}</div>
        <div className="bottom-description">{renderBottomDescription(item)}</div>
      </div>
    </CardDescriptionStyled>
  );
}

const CardDescriptionStyled = styled.div`
    padding: 0 10px  ;
    display: grid;
    width: 200px;
    height: 160px;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.47 );
    backdrop-filter: blur( 14.5px );
    -webkit-backdrop-filter: blur( 14.5px );
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(142, 106, 146, 0.2);

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
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
      .top-description {
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

      .bottom-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      }
    }
`;