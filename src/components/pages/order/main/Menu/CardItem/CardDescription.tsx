import styled from "styled-components";

import { Product } from "../../../../../../fakeData/fakeMenu";

import { theme } from "../../../../../../assets/theme";

export function CardDescription<T extends Product>(title: string, topDescription: string | undefined, renderBottomDescription: (item: T) => React.ReactNode, item: T) {
  return (
    <CardDescriptionStyled>
      <div className="title">{title}</div>
      <div className="description">
        <div>{topDescription}</div>
        <div>{renderBottomDescription(item)}</div>
      </div>
    </CardDescriptionStyled>
  );
}

const CardDescriptionStyled = styled.div`
    padding: 0 10px;
    display: grid;
    width: 200px;
    height: 130px;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.47 );
    backdrop-filter: blur( 14.5px );
    -webkit-backdrop-filter: blur( 14.5px );
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(142, 106, 146, 0.2);

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
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
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      color: ${theme.colors.green};
    }
`;