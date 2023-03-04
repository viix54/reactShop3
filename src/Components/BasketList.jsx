import BasketItem from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    deleteFromBasket = Function.prorotype,
    upQuantityOfItem = Function.prototype,
    downQuantityOfItem = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return (sum += el.price.regularPrice * el.quantity);
  }, 0);
  console.log(order);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => {
          console.log(item.mainId);
          return (
            <BasketItem
              key={item.mainId}
              {...item}
              deleteFromBasket={deleteFromBasket}
              upQuantityOfItem={upQuantityOfItem}
              downQuantityOfItem={downQuantityOfItem}
            />
          );
        })
      ) : (
        <li className="collection-item ">Basket is empty</li>
      )}

      <li className="collection-item active">Whole Sum: {totalPrice} rub.</li>
      <li className="collection-item ">
        <button className=" btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
