import { memo, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TbShoppingBag } from "react-icons/tb";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

import { fakeTea, noMenu, Product } from "../../../../../fakeData/fakeMenu";
import Card from "../../../../ui/Card";
import CardItem from "./CardItem/CardItem";
import { formatPrice } from "../../../../../utils/math";
import PrimaryButton from "../../../../ui/PrimaryButton";
import { theme } from "../../../../../assets/theme";

type MenuListProps = {
  onCardHover: (item: Product) => void;
};

export default function MenuList({ onCardHover }: MenuListProps) {
  const [menu, setMenu] = useState<Product[]>(fakeTea);
  const [currentIndex, setCurrentIndex] = useState(fakeTea.length); // Start at the first original card
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  //const totalCards = menu.length * 3; // Original cards + clones

  !menu && console.log("MenuList rendered", setMenu);

  useEffect(() => {
    if (containerRef.current) {
      const cardElement = containerRef.current.querySelector('.card-wrapper');
      if (cardElement) {
        setCardWidth(cardElement.getBoundingClientRect().width + 10); // Ajoutez une marge de 10px
      }
    }
  }, []);

  const CardMemo = memo(Card);

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

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === menu.length * 2) {
      setCurrentIndex(menu.length);
    } else if (currentIndex === menu.length - 1) {
      setCurrentIndex(menu.length * 2 - 1);
    }
  };

  return (
    <MenuContainer>
      <Button onClick={handlePrev}><div className="rounded">
        <FaCaretLeft className="left"/>
      </div></Button>
      <CarouselContainer ref={containerRef}>
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
      </CarouselContainer>
      <Button onClick={handleNext}><div className="rounded">
        <FaCaretRight className="right"/>
      </div></Button>
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

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  background-color: ${theme.colors.pinky};
  color: white;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.lightPinky};
  }
  &:active {
    background-color: ${theme.colors.pinky};
  }

  .rounded {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, ${theme.colors.lightPinky}, ${theme.colors.pinky} 33%);
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);

    &:active {
      background: ${theme.colors.pinky};
    }  

    .left, .right {
      font-size: 1.8rem;
      color: ${theme.colors.white};

      &:active {
        font-size: 1.6rem;
      }  
    }
    .left {
      margin-right: 6px;
    }
    .right {
      margin-left: 6px;
    }
  }
`;

