import styled from "styled-components";

import { Product } from "../../../../../fakeData/fakeMenu";

import ProductDescription from "./SelectedDescription/ProductDescription";
import Basket from "./Basket/Basket";

type HeroSectionProps = {
  selectedCard: Product;
  isBasketOpen: boolean;
};

function HeroSection({ selectedCard, isBasketOpen }: HeroSectionProps) {
  return (
    <HeroSectionStyled>
      <ProductDescription selectedCard={selectedCard} />
      <Basket isBasketOpen={isBasketOpen} />
    </HeroSectionStyled>
  )
}

export default HeroSection

const HeroSectionStyled = styled.div`
    background-color: #f5f5f548;
    display: grid;  
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #f5f5f584;
  `;