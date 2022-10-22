import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function TopMenu() {
  let CartItem = useSelector((state) => state.books.cartItems);
  let Reduxusername = useSelector((state) => state.books.user);
  let Reduxpassword = useSelector((state) => state.books.pass);
  return (
    <div className="navbar TopMenu">
      <div className="logo">
        <Link to="/">
          <span className="sp1">مكت</span>
          <span className="sp2">بتي</span>
        </Link>
      </div>
      <div className="login">
        {Reduxusername === "Abdallh" && Reduxpassword === "1234" ? (
          <Link to="/Log">
            تسجيل و تسجيل دخول <i class="bi bi-arrow-bar-left"></i>
          </Link>
        ) : (
          <p>اهلا : {Reduxusername}</p>
        )}
      </div>
      {/* <div className="searchBox">
        <input
          type="text"
          placeholder="ابحث عن كتب"
          className="form-control search-field"
        />
        <i class="bi bi-search search-btn"></i>
      </div> */}
      <div className="Survice-Num">
        <p className="txt">خدمة العملاء</p>
        <p className="num">01091415560</p>
      </div>
      <div className="Icons-box">
        <Link to="/Cart">
          <i
            class="bi bi-cart-fill cart-Icon"
            data-length={CartItem.length}
          ></i>
        </Link>
        <Link>
          <i class="bi bi-heart-fill fav-icon" data-length="0"></i>
        </Link>
      </div>
    </div>
  );
}

export default TopMenu;
