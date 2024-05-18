import styled from "styled-components";
import { memo, useState } from "react";
import Card from "../../../ui/Card";
import { fakeMenu2, MenuType } from "../../../../fakeData/fakeMenu";
import CardItem from "./CardItem";
import { formatPrice } from "../../../../utils/math";
import PrimaryButton from "../../../ui/PrimaryButton";


export default function Menu() {
  const [menu, setMenu] = useState<MenuType[]>(fakeMenu2);

  !menu && console.log("Menu rendered", setMenu);

  const CardMemo = memo(Card);

  return (
    <MenuStyled className="menu">
      {menu.map((item) => (
        <CardMemo key={item.id} item={item}> {/* Added key and item prop */}
          <CardItem<MenuType>
            item={{
              ...item,
              leftDescription: formatPrice(item.price)
            }} // Added item prop
            renderRightDescription={() => (
              <PrimaryButton
                label="Ajouter"
              />
            )}
          />
        </CardMemo>
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
