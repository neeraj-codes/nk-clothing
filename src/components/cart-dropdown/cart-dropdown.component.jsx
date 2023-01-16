import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={navigateToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
