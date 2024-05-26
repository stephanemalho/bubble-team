import styled from "styled-components";
import { Product } from "../../../../../fakeData/fakeMenu";
import { CardDescription } from "./CardDescription";
import { CardImage } from "./CardImage";

export type CardItemProps<T extends Product> = {
  item: T;
  renderRightDescription: (item: T) => React.ReactNode;
};

export default function CardItem<T extends Product>({ item, renderRightDescription }: CardItemProps<T>) {
  const { title, imageSource, leftDescription } = item;
  return (
    <CardItemStyled>
      {CardImage(imageSource, title)}
      {CardDescription<T>(title, leftDescription, renderRightDescription, item)}
    </CardItemStyled>
  );
}

const CardItemStyled = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  position: relative;
`;

