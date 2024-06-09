type BasketProps = {
  isBasketOpen: boolean;
};

function Basket({ isBasketOpen }:BasketProps) {
  return (
    <div className="basket">{isBasketOpen ? <div className="basketList">basket</div> : null}</div>
  )
}

export default Basket