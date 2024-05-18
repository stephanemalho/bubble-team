import styled from "styled-components";
import { ReactNode } from "react";
import { theme } from "../../assets/theme";

export type CardProps<T> = {
  children: ReactNode;
  item: T;
};

export default function Card<T>({ children }: CardProps<T>) {
  return (
    <CardStyled>
      {children}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: transparent;
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
`;
