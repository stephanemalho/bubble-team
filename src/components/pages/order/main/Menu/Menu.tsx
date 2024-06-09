import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { fakeTea, noMenu, Product } from "../../../../../fakeData/fakeMenu";
import MenuCard from "./Menu/MenuCard";
import ButtonDirection from "./Menu/ButtonDirection";

type MenuListProps = {
  onCardHover: (item: Product) => void;
};

export default function MenuList({ onCardHover }: MenuListProps) {
  const [menu, setMenu] = useState<Product[]>(fakeTea);
  const [currentIndex, setCurrentIndex] = useState(fakeTea.length); // Start at the first original card
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  !menu && console.log("MenuList rendered", setMenu);

  useEffect(() => {
    if (containerRef.current) {
      const cardElement = containerRef.current.querySelector('.card-wrapper');
      if (cardElement) {
        setCardWidth(cardElement.getBoundingClientRect().width + 10); // Ajoutez une marge de 10px
      }
    }
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <MenuContainer>
      <ButtonDirection
        onClick={handlePrev}
        direction="left"

      />
      <CarouselContainer ref={containerRef}>
        <MenuCard
          menu={menu}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isTransitioning={isTransitioning}
          setIsTransitioning={setIsTransitioning}
          cardWidth={cardWidth}
          onCardHover={onCardHover}
          noMenu={noMenu} 
        />
      </CarouselContainer>
      <ButtonDirection
        onClick={handleNext}
        direction="right"
      />
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CarouselContainer = styled.div`
  width: 80vw;
  overflow: hidden;
  border-right: 1px solid #0000000d;
  border-left: 1px solid #0000000d;
`;