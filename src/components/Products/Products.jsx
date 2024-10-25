import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                {product.price}€
              </div>
              <div>
                <button
                  className={isProductInCart ? "red" : ""}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  <span className="cart-icon">
                    {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                  </span>
                  <span className="add-text">
                    {isProductInCart ? "Remove from cart" : "Add to cart"}
                  </span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
