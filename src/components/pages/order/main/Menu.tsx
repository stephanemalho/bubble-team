import styled from "styled-components";
import { useState } from "react";
import { formatPrice } from "../../../../utils/math";
import Card from "./Card";
import PrimaryButton from "../../../ui/PrimaryButton";
import { MenuItem, fakeMenu2 } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  console.log('setMenu: ', setMenu)

  return (
    <MenuStyled className="menu">
      {menu.map((item) => (
        <Card<MenuItem>
          key={item.id}
          item={{
            ...item,
            leftDescription: formatPrice(item.price),
          }}
          renderRightDescription={() => (
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          )}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 60px 60px 150px;
  justify-items: center;
`;
