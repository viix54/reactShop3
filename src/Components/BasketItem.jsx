function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    deleteFromBasket = Function.prorotype,
    upQuantityOfItem = Function.prototype,
    downQuantityOfItem = Function.prototype,
  } = props;
  return (
    <li className="collection-item ">
      {displayName} x
      <i
        className="material-icons basket-quantity"
        onClick={() => {
          upQuantityOfItem(mainId);
        }}
      >
        add
      </i>
      {quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => {
          downQuantityOfItem(mainId);
        }}
      >
        remove
      </i>
      = {price.regularPrice * quantity} rub.
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => {
            deleteFromBasket(mainId);
          }}
        >
          adjust
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
