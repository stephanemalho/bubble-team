import styled from "styled-components";

import { Product } from "../../../../../../fakeData/fakeMenu";
import CardsToRender from "../CardItem/CardsToRender";

type MenuCardProps = {
  menu: Product[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  isTransitioning: boolean;
  setIsTransitioning: (isTransitioning: boolean) => void;
  cardWidth: number;
  onCardHover: (item: Product) => void;
  noMenu: Product[];
};

function MenuCard({
  menu,
  currentIndex,
  setCurrentIndex,
  isTransitioning,
  setIsTransitioning,
  cardWidth,
  onCardHover,
}: MenuCardProps) {

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === menu.length * 2) {
      setCurrentIndex(menu.length);
    } else if (currentIndex === menu.length - 1) {
      setCurrentIndex(menu.length * 2 - 1);
    }
  };

  return (
    <MenuListStyled
      $currentIndex={currentIndex}
      $cardWidth={cardWidth}
      onTransitionEnd={handleTransitionEnd}
      $isTransitioning={isTransitioning}
    >
      {CardsToRender(menu, 0, onCardHover)}
      {CardsToRender(menu, menu.length, onCardHover)}
      {CardsToRender(menu, menu.length * 2, onCardHover)}
    </MenuListStyled>
  );
}

export default MenuCard;

const MenuListStyled = styled.div<{ $currentIndex: number, $cardWidth: number, $isTransitioning: boolean }>`
  display: flex;
  transition: ${({ $isTransitioning }) => ($isTransitioning ? 'transform 0.5s ease' : 'none')};
  transform: ${({ $currentIndex, $cardWidth }) => `translateX(-${$currentIndex * $cardWidth}px)`};
`;