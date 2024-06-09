import { memo } from "react";
import { Product, noMenu } from "../../../../../../fakeData/fakeMenu";
import Card from "../../../../../ui/Card";
import { formatPrice } from "../../../../../../utils/math";
import CardItem from "./CardItem";
import PrimaryButton from "../../../../../ui/PrimaryButton";
import { TbShoppingBag } from "react-icons/tb";
import styled from "styled-components";

const CardsToRender = (items: Product[], startIndex: number, onCardHover: (item: Product) => void) => {
  const CardMemo = memo(Card);

  return items.map((item, index) => (
    <CardWrapper
      key={`card-${startIndex + index}`}
      $index={startIndex + index}
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
  ));
};

export default CardsToRender;

const CardWrapper = styled.div<{ $index: number }>`
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
