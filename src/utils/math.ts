export function formatPrice(priceToFormat: number) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export const formatIngredients = (ingredients: string[]): string => {
  if (ingredients.length === 0) return '';
  if (ingredients.length === 1) return ingredients[0] + '.';
  const allButLast = ingredients.slice(0, -1).join(', ');
  const last = ingredients[ingredients.length - 1];
  return `${allButLast} et ${last}.`;
};

export function replaceFrenchCommaWithDot(price: number | string) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}