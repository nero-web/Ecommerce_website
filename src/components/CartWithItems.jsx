// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/ProductPage";
// import EmptyCart from "./EmptyCart";

// function CartWithItems() {
//   const { cartItem, setCartItem } = useContext(CartContext);

//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
//     setTotalPrice(newTotalPrice);
//   }, [cartItem]);

//   return (
//     <>
//       <div className="full-cart-div">
//         <div className="full-cart">
//           {cartItem.map((item, id) =>
//             cartItem.length !== 0 ? (
//               <CartItem key={id} item={item} setCartItem={setCartItem} />
//             ) : (
//               <EmptyCart key={id} />
//             )
//           )}
//         </div>
//       </div>
//       <div className="subtotal-div">
//         <div className="sub-right">
//           <p>Subtotal</p>
//           <p className="total-price">{totalPrice + ".00$"}</p>
//         </div>
//         <div className="sub-left">
//           <Link>Go to Checkout</Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CartWithItems;






// CartWithItems.js
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";
// import { useContext } from "react";
// import { CartContext } from "../pages/ProductPage";
// import EmptyCart from "./EmptyCart";

// function CartWithItems() {
//   const { cartItem } = useContext(CartContext);

//   const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="full-cart-div">
//       <div className="full-cart">
//         {cartItem.length !== 0 ? (
//           cartItem.map((item) => <CartItem key={item.id} item={item} />)
//         ) : (
//           <EmptyCart />
//         )}
//       </div>
//       <div className="subtotal-div">
//         <div className="sub-right">
//           <p>Subtotal</p>
//           <p className="total-price">{totalPrice.toFixed(2)}$</p>
//         </div>
//         <div className="sub-left">
//           <Link to="/checkout">Go to Checkout</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartWithItems;





// CartWithItems.js
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function CartWithItems() {
  const { cartItem } = useContext(CartContext);

  const totalPrice = cartItem.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
    <div className="full-cart-div">
      <div className="full-cart">
        {cartItem.length !== 0 ? (
          cartItem.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
    <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice.toFixed(2)}$</p>
        </div>
        <div className="sub-left">
          <Link to="/checkout">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;


