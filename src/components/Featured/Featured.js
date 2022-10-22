import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_PRODUCTS } from "../../data";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { AddBookToCart } from "../../redux/BookSlice";
function Featured() {
  let [featuredData, setfeaturedData] = useState(FEATURED_PRODUCTS);
  let [FocusedItem, setFocusedItem] = useState("");
  let OpenModal = (product) => {
    setFocusedItem(product);
  };
  let CloseModal = () => {
    setFocusedItem(false);
  };
  let dispatch = useDispatch();
  return (
    <div className="Featured">
      <div className="container">
        <div className="row">
          <div className="head">الكتب المميزه</div>
          {featuredData.map((item) => {
            return (
              <Fade right cascade key={item.id}>
                <div className="Feat col-md-3">
                  <div className="imgBox">
                    <img
                      src={item.img}
                      className="img-fluid"
                      alt=""
                      onClick={() => OpenModal(item)}
                    />
                  </div>

                  <div className="title">{item.title}</div>
                  <p className="price">{item.price} جنيه</p>
                  <div
                    className="buy"
                    onClick={(e) => {
                      dispatch(AddBookToCart(item));
                      e.target.innerText = " ✓ selected";
                      e.target.classList.add("Selected");
                      e.target.parentElement.classList.add("SelectedCart");
                    }}
                  >
                    شراء
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
      <Modal isOpen={FocusedItem} onRequestClose={CloseModal}>
        <div className="ModalItem">
          <i className="bi bi-x ModalClose" onClick={CloseModal}></i>
          <img src={FocusedItem.img} className="img-fluid ModalImg" alt="" />
          <h1 className="ModalHead">{FocusedItem.title}</h1>
          <p className="ModalDesc">{FocusedItem.desc}</p>
          <div className="ModalPrice">{FocusedItem.price} جنيه</div>
        </div>
      </Modal>
    </div>
  );
}

export default Featured;
