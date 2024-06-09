import { GiHeatHaze } from "react-icons/gi";
import { IoIosSnow } from "react-icons/io";
import styled from "styled-components";

import { Product } from "../../../../../../fakeData/fakeMenu";

import { formatIngredients, formatPrice } from "../../../../../../utils/math";
import { theme } from "../../../../../../assets/theme";

type ProductDescriptionProps = {
  selectedCard: Product;
};

function ProductDescription({ selectedCard }: ProductDescriptionProps) {
  return (
    <ProductDescriptionStyled>
      {selectedCard && (
        <div className="hovered">
          <div className="imageHovered"><img src={selectedCard.imageSource} alt={selectedCard.title} /></div>
          <div className="hoveredDescription">
            <h1>{selectedCard.title}</h1>
            <p>{selectedCard.description}</p>
            <span>Composition : {formatIngredients(selectedCard.ingredients)}</span>
            <div>
              <small>{formatPrice(selectedCard.price)}</small>
              <small className="symbol">{selectedCard.isHot ? <GiHeatHaze className="hot" /> : <IoIosSnow className="snow" />}</small>
            </div>
          </div>
        </div>
      )
      }
    </ProductDescriptionStyled>
  )
}

export default ProductDescription

const ProductDescriptionStyled = styled.div`
      height: 100%;
      padding-left: 20px;
      background-color: transparent;
      .hovered {
        display: flex;
        .imageHovered {
          margin-top: 10px;
          width: 200px;
          height: 200px;
          img {
            width: 200px;
            height: 100%;
            object-fit: contain;
            border-radius: 10px;
          }
        }
        .hoveredDescription {
          width: 100%;
          margin: 10px;
          display: flex;
          flex-direction: column;
          h1 {
            font-family: "Amatic SC", cursive;
            font-size: 2.5rem;
            color: #000;
            margin: 0;
            padding-top: 10px;  
          }
          p {
            font-size: 1rem;
            color: #00000071;
            margin: 0;
            width: 90%;
          }
          span {
            font-size: 0.7rem;
            color: ${theme.colors.green};
            margin: 0;
            width: 90%;
            margin-top: auto;
          }
          div {
            display: flex;
            justify-content: space-between;
            width: 90%;
            font-size: 1.2rem;
            margin-top: auto;
            small {
              font-size: 1rem;
              color: #00000071;
              margin: 0;
            }
            .symbol {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background-color: ${theme.colors.pinky};
              .hot {
                color: ${theme.colors.red};
              }
              .snow {
                color: ${theme.colors.blue};
              }
            }
          }
        }
      }
    `;