import styled from "styled-components"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { useState } from "react"

import { formatPrice } from "../../../../utils/math"
import Card from "./Card"

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)

  console.log('setMenu: ', setMenu)

  return (
    <MenuStyled className="menu">
     {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
            id={id}
            price={price}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 60px 60px 150px;
  justify-items: center;
`
