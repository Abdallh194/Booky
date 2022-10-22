import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { DeleteItemFromCart } from "../../redux/BookSlice";

function Cart() {
  let CartItem = useSelector((state) => state.books.cartItems);
  // CartItem.length;
  let totlaPrice = 0;
  for (let i = 0; i < CartItem.length; i++) {
    totlaPrice += CartItem[i].price * CartItem[i].qty;
  }
  let dispatch = useDispatch();
  return (
    <div className="CartProducts">
      <div className="container">
        {CartItem.length > 0 ? (
          <div className="d-flex">
            <div className="total">الاجمالي : {totlaPrice} جنيه</div>
            <Link to="/Checkout">
              <div className="checkout">التاكيد والدفع</div>
            </Link>
          </div>
        ) : (
          "لا يوجد عناصر"
        )}
        {CartItem.map((el) => {
          return (
            <Zoom top cascade>
              <div className="CartProduct">
                <img src={el.img} className="img-fluid" alt={el.title} />
                <h3>{el.title}</h3>
                <div>
                  <p>الكميه</p>
                  <p>
                    {el.price} × {el.qty}
                  </p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(DeleteItemFromCart(el.id))}
                >
                  delete
                </button>
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
