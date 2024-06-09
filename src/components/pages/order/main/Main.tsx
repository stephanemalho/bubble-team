import { useState } from 'react';
import styled from 'styled-components';

import { Product, noMenu } from '../../../../fakeData/fakeMenu';

import HeroSection from './Hero/HeroSection';
import Banner from './Banner/Banner';
import MenuList from './Menu/Menu';

export default function Main() {
  const [selectedCard, setSelectedCard] = useState<Product>(noMenu[0]);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(true);

  !isBasketOpen && console.log("Main rendered", setIsBasketOpen);

  return (
    <MainStyled>
      <HeroSection selectedCard={selectedCard} isBasketOpen={isBasketOpen} />
      <Banner />
      <MenuList onCardHover={setSelectedCard} />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  box-shadow: 0px 8px 20px 8px rgba(159, 117, 122, 0.2) inset;
  display: grid;
  grid-template-rows: 40% 10% 50%; // Définit les proportions de hauteur pour les sections
  font-family: "Open Sans", sans-serif;
`;
