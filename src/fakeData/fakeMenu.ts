export type Product = {
  id: number;
  imageSource: string;
  mainTitle?: string;
  title: string;
  price: number;
  quantity?: number;
  isAvailable?: boolean;
  isAdvertised?: boolean;
  topDescription?: string;
  description: string;
  isHot?: boolean; // Indique si le produit est chaud
  ingredients: string[]; // Ajout de la clé ingredients pour lister les ingrédients
};

export const noMenu = [
  {
    id: 1,
    imageSource: "/images/no-item-added.png",
    title: "choisir un produit",
    price: 0,
    description: "Selectionner une carte ci-dessous pour voir la description ici.",
    ingredients: [],
  },
];

export const fakeMenu1: Product[] = [
  {
    id: 1,
    imageSource: "/images/bubble-tea-masala.png",
    mainTitle: "Thé traditionnel",
    title: "Oolong cha",
    price: 5.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un thé Oolong traditionnel avec une saveur unique.",
    isHot: true,
    ingredients: ["Thé Oolong", "Eau", "Sucre"],
  },
  {
    id: 2,
    imageSource: "/images/tea-herbal.png",
    mainTitle: "Thé aux herbes",
    title: "Burger 2",
    price: 7.556,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un délicieux burger fait avec des ingrédients frais.",
    isHot: false,
    ingredients: ["Pain", "Viande", "Laitue", "Tomate", "Fromage"],
  },
];

export const fakeMenu2: Product[] = [
  {
    id: 1,
    imageSource: "/images/bubble-tea-masala.png",
    mainTitle: "Thé aux herbes",
    title: "Tea Masala",
    price: 5.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un thé masala épicé et savoureux, parfait pour les amateurs de thé.",
    isHot: true,
    ingredients: ["Thé noir", "Épices masala", "Lait", "Sucre"],
  },
  {
    id: 2,
    imageSource: "/images/tea-herbal.png",
    mainTitle: "Thé traditionnel",
    title: "Herbal Tea",
    price: 5.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un thé aux herbes apaisant, idéal pour se détendre.",
    isHot: true,
    ingredients: ["Mélange d'herbes", "Eau", "Miel"],
  },
  {
    id: 3,
    imageSource: "/images/green-tea-cake.png",
    mainTitle: "Gâteau",
    title: "Green Tea Cake",
    price: 5.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un gâteau moelleux au thé vert, parfait pour une pause gourmande.",
    isHot: false,
    ingredients: ["Farine", "Sucre", "Thé vert matcha", "Oeufs", "Beurre"],
  },
  {
    id: 4,
    imageSource: "/images/macha-cake.png",
    mainTitle: "Gâteau",
    title: "Macha Cake",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un gâteau au matcha délicat et savoureux.",
    isHot: false,
    ingredients: ["Farine", "Sucre", "Matcha", "Oeufs", "Beurre"],
  },
  {
    id: 5,
    imageSource: "/images/green-frappucino.png",
    mainTitle: "Boisson",
    title: "Bubble Tea Masala",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un bubble tea épicé au masala, pour une boisson rafraîchissante.",
    isHot: false,
    ingredients: ["Thé noir", "Épices masala", "Lait", "Perles de tapioca", "Sucre"],
  },
  {
    id: 6,
    imageSource: "/images/bubble-strawberries.png",
    mainTitle: "Boisson",
    title: "Bubble Tea Strawberries",
    price: 3.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un bubble tea à la fraise, sucré et délicieux.",
    isHot: false,
    ingredients: ["Thé noir", "Lait", "Perles de tapioca", "Sirop de fraise", "Sucre"],
  },
  {
    id: 7,
    imageSource: "/images/lipton-milk-cha.png",
    mainTitle: "Thé au lait",
    title: "Lipton Milk Tea",
    price: 2.567,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un thé au lait Lipton, crémeux et réconfortant.",
    isHot: true,
    ingredients: ["Thé Lipton", "Lait", "Sucre"],
  },
  {
    id: 8,
    imageSource: "/images/lipton-green.png",
    mainTitle: "Thé vert",
    title: "Lipton Green Tea",
    price: 3.1678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
    description: "Un thé vert Lipton, léger et rafraîchissant.",
    isHot: false,
    ingredients: ["Thé vert Lipton", "Eau", "Citron"],
  },
];

