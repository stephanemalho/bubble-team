import { IconType } from "react-icons";
import { FaCoffee } from "react-icons/fa";
import { FaBreadSlice, FaIceCream, FaLeaf } from "react-icons/fa6";

export type ToppingProps = {
  id: number;
  Icon: IconType;
  name: string;
};

export const toppings:ToppingProps[] = [
  {
    id: 1,
    name: "Thé",
    Icon: FaLeaf,
  },
  {
    id: 2,
    name: "Café",
    Icon: FaCoffee,
  },
  {
    id: 3,
    name: "Patisserie",
    Icon: FaBreadSlice,
  },
  {
    id: 4,
    name: "Désserts",
    Icon: FaIceCream,
  },
];
