function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prorotype } = props;
  return (
    <div className="cart red accent-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">adb</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
