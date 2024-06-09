import { memo } from "react";
import styled from "styled-components";
import { TbShoppingBag } from "react-icons/tb";
import CardItem from "../CardItem/CardItem";
import { formatPrice } from "../../../../../../utils/math";
import PrimaryButton from "../../../../../ui/PrimaryButton";
import { Product } from "../../../../../../fakeData/fakeMenu";
import Card from "../../../../../ui/Card";

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

function MenuCard({ menu, currentIndex, setCurrentIndex, isTransitioning, setIsTransitioning, cardWidth, onCardHover, noMenu}:MenuCardProps) {

 const CardMemo = memo(Card);

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
    currentIndex={currentIndex}
    cardWidth={cardWidth}
    onTransitionEnd={handleTransitionEnd}
    isTransitioning={isTransitioning}
  >
    {menu.map((item, index) => (
      <CardWrapper
        key={`clone-start-${index}`}
        index={index}
        className="card-wrapper"
        onMouseEnter={() => onCardHover(item)}
        onMouseLeave={() => onCardHover(noMenu[0])}
      >
        <CardMemo item={item}>
          <CardItem<Product>
            item={{ ...item, topDescription: formatPrice(item.price) }}
            renderBottomDescription={() => <PrimaryButton Icon={<TbShoppingBag size={20} />} />}
          />
        </CardMemo>
      </CardWrapper>
    ))}
    {menu.map((item, index) => (
      <CardWrapper
        key={`original-${index}`}
        index={index + menu.length}
        className="card-wrapper"
        onMouseEnter={() => onCardHover(item)}
        onMouseLeave={() => onCardHover(noMenu[0])}
      >
        <CardMemo item={item}>
          <CardItem<Product>
            item={{ ...item, topDescription: formatPrice(item.price) }}
            renderBottomDescription={() => <PrimaryButton Icon={<TbShoppingBag size={20} />} />}
          />
        </CardMemo>
      </CardWrapper>
    ))}
    {menu.map((item, index) => (
      <CardWrapper
        key={`clone-end-${index}`}
        index={index + menu.length * 2}
        className="card-wrapper"
        onMouseEnter={() => onCardHover(item)}
        onMouseLeave={() => onCardHover(noMenu[0])}
      >
        <CardMemo item={item}>
          <CardItem<Product>
            item={{ ...item, topDescription: formatPrice(item.price) }}
            renderBottomDescription={() => <PrimaryButton Icon={<TbShoppingBag size={20} />} />}
          />
        </CardMemo>
      </CardWrapper>
    ))}
  </MenuListStyled>
  )
}

export default MenuCard

const MenuListStyled = styled.div<{ currentIndex: number, cardWidth: number, isTransitioning: boolean }>`
  display: flex;
  transition: ${({ isTransitioning }) => (isTransitioning ? 'transform 0.5s ease' : 'none')};
  transform: ${({ currentIndex, cardWidth }) => `translateX(-${currentIndex * cardWidth}px)`};
`;

const CardWrapper = styled.div<{ index: number }>`
  display: inline-block;
  position: relative;
  margin: 0 5px; /* Ajustez la marge selon vos besoins */
  transition: transform 0.3s ease;

  &:hover {
    transition: transform 0.6s ease;
    opacity: 1;
    background-color: #ffffffe4;
    border-radius: 12px;
  }
`;
