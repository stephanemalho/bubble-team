import styled from "styled-components";
import { MenuItem } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../assets/theme";

export default function Product({ id, title, imageSource, price }: MenuItem) {
  return (
    <ProductStyled key={id} className="menu-product">
      <div className="image"><img src={imageSource} alt={title} /></div>
      <div className="info-text">
        <div className="description">
          <h3 className="title">{title}</h3>
          <p className="price">{price} €</p>
          <button className="add-to-cart">Ajouter au panier</button>
        </div>
      </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
        border: 1px solid red;
        height: 330px;
        width: 240px;
        .image {
          background-color: ${theme.colors.white};
          border: 1px solid ${theme.colors.blue};
          width: 100%;
          height: 200px;
          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        } 
        .info-text {
          
        }
`
