// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/ProductPage";
// import { IconX } from "@tabler/icons-react";

// function CartItem() {
//   const [quantity, setQuantity] = useState(1);
//   const { cartItem, setCartItem } = useContext(CartContext);

//   const increase = () => {
//     if (quantity >= 1) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const decrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const calcPrice = (quantity, item) => {
//     return quantity * item;
//   };

//   const [deleteItem, setDeleteItem] = useState(cartItem);

//   const removeFromCart = (id) => {
//     const updateCart = cartItem.filter((item) => item.id !== id);
//     setDeleteItem(updateCart);
//     const json = JSON.stringify(cartItem.id);
//     localStorage.removeItem("cartItem", json);
//   };

//   useEffect(() => {
//     setCartItem(deleteItem);
//   }, [deleteItem, setCartItem]);

//   return (
//     <>
//       {cartItem.map((item, id) => (
//         <div key={id} className="cart-item">
//           <div className="cart-img">
//             <img src={item.img} alt="product" />
//           </div>
//           <div className="cart-middle">
//             <p className="cart-name">{item.description}</p>
//             <div className="cart-btns">
//               <button onClick={decrease}>-</button>
//               <p className="quantity">{quantity}</p>
//               <button onClick={increase}>+</button>
//             </div>
//           </div>
//           <div className="cart-right">
//             <p className="cart-price">{calcPrice(quantity, item.price)}.00$</p>
//             <IconX onClick={() => removeFromCart(item.id)} />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default CartItem;




// CartItem.js
// import { useContext } from "react";
// import { CartContext } from "../pages/ProductPage";
// import { IconX } from "@tabler/icons-react";

// function CartItem({ item }) {
//   const { cartItem, setCartItem } = useContext(CartContext);

//   const removeFromCart = (id) => {
//     const updatedCart = cartItem.filter((cartItem) => cartItem.id !== id);
//     setCartItem(updatedCart);
//   };

//   return (
//     <div className="cart-item">
//       <div className="cart-img">
//         <img src={item.img} alt="product" />
//       </div>
//       <div className="cart-middle">
//         <p className="cart-name">{item.description}</p>
//       </div>
//       <div className="cart-right">
//         <p className="cart-price">{item.price}.00$</p>
//         <IconX onClick={() => removeFromCart(item.id)} />
//       </div>
//     </div>
//   );
// }

// export default CartItem;







// CartItem.js
import { useContext } from "react";
import { CartContext } from "../pages/ProductPage";
import { IconX } from "@tabler/icons-react";

function CartItem({ item }) {
  const { cartItem, setCartItem } = useContext(CartContext);

  const increase = () => {
    const updatedCart = cartItem.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItem(updatedCart);
  };

  const decrease = () => {
    const updatedCart = cartItem.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItem(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItem.filter((cartItem) => cartItem.id !== id);
    setCartItem(updatedCart);
  };

  const calcPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{item.description}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{item.quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{calcPrice(item.quantity, item.price)}.00$</p>
        <IconX onClick={() => removeFromCart(item.id)} />
      </div>
    </div>
  );
}

export default CartItem;


