import { memo, useState } from "react";
import styled from "styled-components";
import { TbShoppingBag } from "react-icons/tb";
import { fakeMenu2, noMenu, Product } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/math";
import Card from "../../../ui/Card";
import PrimaryButton from "../../../ui/PrimaryButton";
import CardItem from "./CardItem/CardItem";

type MenuProps = {
  onCardHover: (item: Product ) => void;
};

export default function Menu({ onCardHover }: MenuProps) {
  const [menu, setMenu] = useState<Product[]>(fakeMenu2);

  !menu && console.log("Menu rendered", setMenu);

  const CardMemo = memo(Card);

  return (
    <MenuStyled>
      {menu.map((item, index) => (
        <CardWrapper
          key={item.id}
          index={index}
          isFirst={index === 0}
          onMouseEnter={() => onCardHover(item)}
          onMouseLeave={() => onCardHover(noMenu[0])}
        >
          <CardMemo item={item}>
            <CardItem<Product>
              item={{ ...item, topDescription: formatPrice(item.price) }}
              renderBottomDescription={() => <PrimaryButton Icon={<TbShoppingBag size={20}/>} />}
            />
          </CardMemo>
        </CardWrapper>
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-x: hidden; /* Empêche le débordement horizontal */
`;

const CardWrapper = styled.div<{ index: number, isFirst: boolean }>`
  display: inline-block;
  position: absolute;
  top: 0;
  left: ${({ index }) => index * 160}px; /* Ajustez la position selon vos besoins */
  z-index: ${({ index }) => index}; /* Empile les cartes dans l'ordre */
  transition: transform 0.3s ease;

  ${({ isFirst }) => isFirst && `
    &:hover ~ div {
      transform: translateX(70px);
    }
  `}

  &:hover {
    transform: ${({ index }) => (index === 0 ? 'none' : 'translateX(-70px)')};
    transition: transform 0.6s ease;
    opacity: 1;
    background-color: #ffffffe4;
    border-radius: 12px;
  }
`;
