import styled from 'styled-components';
import Menu from './Menu'; // Assurez-vous de bien importer votre composant Menu
import { useState } from 'react';
import { Product } from '../../../../fakeData/fakeMenu'; // Assurez-vous de bien importer le type Product

export default function Main() {
  const [selectedCard, setSelectedCard] = useState<Product | null>(null);

  return (
    <MainStyled>
      <div className="CardSelected">
        {selectedCard && (
          <>
            <h2>{selectedCard.title}</h2>
            <div className="imageHovered"><img src={selectedCard.imageSource} alt={selectedCard.title} /></div>
            <p>{selectedCard.price}</p>
          </>
        )}
      </div>
      <Menu onCardHover={setSelectedCard} />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  width: 100%;
  height: 40vh;
  background-color: #f5f5f5;
  box-shadow: 0px 8px 20px 8px rgba(159, 117, 122, 0.2) inset;
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  .CardSelected {
    height: 40vh;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .imageHovered {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
`;
