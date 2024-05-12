import styled from "styled-components"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { useState } from "react"
import Product from "./Product"

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2)

  console.log('setMenu: ', setMenu)

  return (
    <MenuStyled className="menu">
      {menu.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            imageSource={product.imageSource}
            title={product.title}
            price={product.price}
          />
        )
      }
      )}
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
