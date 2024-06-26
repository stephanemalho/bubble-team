import styled from "styled-components";
import { Product } from "../../../../../fakeData/fakeMenu";
import { CardDescription } from "./CardDescription";
import { CardImage } from "./CardImage";

export type CardItemProps<T extends Product> = {
  item: T;
  renderBottomDescription: (item: T) => React.ReactNode;
};

export default function CardItem<T extends Product>({ item, renderBottomDescription }: CardItemProps<T>) {
  const { title, imageSource, topDescription } = item;
  return (
    <CardItemStyled>
      {CardImage(imageSource, title)}
      {CardDescription<T>(title, topDescription, renderBottomDescription, item)}
    </CardItemStyled>
  );
}

const CardItemStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

