function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
      />

      <div className="cart-item-info">

        <span>
          {item.category}
        </span>

        <h3>{item.name}</h3>

        <strong>
          ₹{item.price.toLocaleString("en-IN")}
        </strong>

      </div>

      <div className="quantity-control">

        <button
          onClick={() => onDecrease(item.id)}
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => onIncrease(item.id)}
        >
          +
        </button>

      </div>

      <div className="item-total">
        ₹
        {(item.price * item.quantity).toLocaleString(
          "en-IN"
        )}
      </div>

      <button
        className="remove-button"
        onClick={() => onRemove(item.id)}
      >
        ×
      </button>

    </div>
  );
}

export default CartItem;