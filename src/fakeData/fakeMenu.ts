export type MenuType = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable?: boolean;
  isAdvertised?: boolean;
  leftDescription?: string;
};

export const fakeMenu1: MenuType[] = [
  {
    id: 1,
    imageSource: "/images/bubble-tea-masala.png",
    title: "Oolong cha",
    price: 5.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "/images/tea-herbal.png",
    title: "Burger 2",
    price: 7.556,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

export const fakeMenu2: MenuType[] = [
  {
    id: 1,
    imageSource: "/images/bubble-tea-masala.png",
    title: "Tea Masala",
    price: 5.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 2,
    imageSource: "/images/tea-herbal.png",
    title: "Herbal Tea",
    price: 5.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 3,
    imageSource: "/images/green-tea-cake.png",
    title: "Green Tea Cake",
    price: 5.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 4,
    imageSource: "/images/macha-cake.png",
    title: "Macha Cake",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 5,
    imageSource: "/images/green-frappucino.png",
    title: "Bubble Tea Masala",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 6,
    imageSource: "/images/bubble-strawberries.png",
    title: "Bubble Tea Strawberries",
    price: 3.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 7,
    imageSource: "/images/lipton-milk-cha.png",
    title: "Lipton Milk Tea",
    price: 2.567,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: 8,
    imageSource: "/images/lipton-green.png",
    title: "Lipton Green Tea",
    price: 3.1678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];
