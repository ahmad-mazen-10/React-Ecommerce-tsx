import "./styleCart.css";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 2,
      name: "HI Gamepad",
      price: 550,
      quantity: 2,
      image:
        "https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg",
    },
    {
      id: 2,
      name: "HI Gamepad",
      price: 550,
      quantity: 2,
      prefix: "women",
      image:
        "https://cdn-eu.dynamicyield.com/api/9876644/images/30d354267a09b__hp-w12-22032022-h_m-women_dresses.jpg",
    },
    {
      id: 2,
      name: "HI Gamepad",
      price: 550,
      quantity: 2,
      prefix: "kids",
      image:
        "https://cdn-eu.dynamicyield.com/api/9876644/images/37d243d334c63__hp-w12-22032022-h_m-kids1.jpg",
    },
 
  ]);

  const handleQuantityChange = (itemId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal;
  };




  return (

    <div className="container">
      <div className="page-header">
      </div>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} />
                  {item.name}
                </td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-actions">
        <button>Return To Shop</button>
        <button>Update Cart</button>
      </div>
    
      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button>Apply Coupon</button>
      </div>
      <div className="cart-total">
        <h2>Cart Total</h2>
        <div>
          <span>Subtotal:</span>
          <span>${calculateTotal()}</span>
        </div>
        <div>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
        <button>Procees to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
