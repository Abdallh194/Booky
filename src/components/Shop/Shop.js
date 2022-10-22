import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { AllProduct } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { AddBookToCart } from "../../redux/BookSlice";
import { Link } from "react-router-dom";
function Shop() {
  let CartItem = useSelector((state) => state.books.cartItems);
  let [ALLproducts] = useState(AllProduct);
  let [SelectedItem, setSelectedItem] = useState(AllProduct);
  let [searchVal, setsearchVal] = useState("");
  let HandleSelect = (e) => {
    if (e.target.value === "All") {
      setSelectedItem(ALLproducts);
    } else {
      let FilterdItem = AllProduct.filter(
        (item) => item.cat === e.target.value
      );
      setSelectedItem(FilterdItem);
    }
  };
  let dispatch = useDispatch();
  let SearchHandle = (name) => {
    if (name !== "") {
      let FilterdItem = AllProduct.filter((item) => item.title === name);
      setSelectedItem(FilterdItem);
    } else {
      setSelectedItem(ALLproducts);
    }
  };
  return (
    <div className="Shop">
      <div className="container">
        <div className="cat">تصنيف الكتب</div>
        <select
          class="form-select form-select-lg mb-3 selectBox"
          onChange={HandleSelect}
        >
          <option value="All" selected>
            كل الكتب
          </option>
          <option value="حرب">حرب</option>
          <option value="تكنولوجيا">تكنولوجيا</option>
          <option value="فضاء">الكون والفضاء</option>
          <option value="الاغاني">الاغاني</option>
          <option value="علوم">العلوم</option>
          <option value="شخصيات">الشخصيات</option>
          <option value="اسلام">التاريخ الاسلامي</option>
          <option value="طبيخ">الطبيخ</option>
          <option value="طفوله">الطفوله</option>
          <option value="حكايات">حكايات شعبيه</option>
        </select>
        <div className="searchBox">
          <input
            type="text"
            placeholder="بتدور علي كتاب معيين"
            className="form-control"
            onChange={(e) => setsearchVal(e.target.value)}
          />
          <i
            className="bi bi-search"
            onClick={() => SearchHandle(searchVal)}
          ></i>
        </div>
        <div className="row">
          {SelectedItem.map((item) => {
            return (
              <Zoom right cascade>
                <div className="col-md-2 ShopCard">
                  <img src={item.img} className="img-fluid" alt="" />
                  <div>
                    <div className="title">{item.title}</div>
                    <p className="price">السعر : {item.price}</p>
                  </div>
                  <div
                    className="buy"
                    onClick={(e) => {
                      dispatch(AddBookToCart(item));
                      e.target.innerText = " ✓ selected";
                      e.target.classList.add("Selected");
                      e.target.parentElement.classList.add("SelectedCart");
                    }}
                  >
                    اضف للسة
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
        <div className="toCart" data-length={CartItem.length}>
          <Link to="/Cart">
            <i class="bi bi-basket"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;
