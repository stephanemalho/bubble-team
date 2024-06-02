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
  width: 220px;
  height: 320px;
  display: grid;
  flex: 1 1 0;
  border-radius: ${theme.borderRadius.extraRound};
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  position: relative;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
