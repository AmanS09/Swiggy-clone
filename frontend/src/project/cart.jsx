import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import './style2.css'; // Import the custom CSS file

function Cart1 () {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve the cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to increment the quantity of an item
  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  // Function to decrement the quantity of an item
  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  // Function to remove an item from the cart
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index]) {
      const itemName = updatedCartItems[index].name; // Get the name of the item to show in the success message

      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);

      // Show success message using SweetAlert2
      Swal.fire({
        icon: "success",
        title: `${itemName} removed from cart!`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // Function to calculate the total price for an item
  const calculateTotalPrice = (item) => {
    const total = item.price * item.quantity;
    return isNaN(total) ? 0 : total;
  };

  // Function to calculate the total price for all items in the cart
  const calculateTotalPriceForCart = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += calculateTotalPrice(item);
    });
    return totalPrice;
  };

  // Function to update the cart items in the local storage
  const updateLocalStorage = (updatedCartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Function to handle the payment button click
  const handlePayment = () => {
    // Redirect to the payment page or perform any other desired action
    // window.location.href = "payment.html";
    console.log("Handle Payment Clicked");
  };

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>Rs{item.price}</td>
              <td>
                <div className="quantity-container">
                  <div className="quantity-btn" onClick={() => decrementQuantity(index)}>
                    -
                  </div>
                  <span>{item.quantity}</span>
                  <div className="quantity-btn" onClick={() => incrementQuantity(index)}>
                    +
                  </div>
                </div>
              </td>
              <td>Rs{calculateTotalPrice(item)}</td>
              <td>
                <span className="delete-btn" onClick={() => removeItem(index)}>
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="totalPriceSection">
        <h2>Total Price: <span id="totalPrice">Rs{calculateTotalPriceForCart()}</span></h2>
      </div>
      <button className="payment-btn" onClick={handlePayment}>
        Pay
      </button>
    </div>
  );
};

export default Cart1;
