function GoodsItem(props) {
  const {
    mainId,
    displayName,
    granted: description,
    price,
    displayAssets: pic,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={pic[0].background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{description[0].description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.finalPrice} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
