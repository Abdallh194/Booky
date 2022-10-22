import React from "react";
import { $ } from "react-jquery-plugin";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  let CartItem = useSelector((state) => state.books.cartItems);
  // CartItem.length;
  return (
    <div className="navbar Navbar-Menu ">
      <div className="logo">
        <Link to="/">
          <span className="sp1">مكت</span>
          <span className="sp2">بتي</span>
        </Link>
      </div>
      <ul className="menu">
        <div className="catigoris">
          <i className="bi bi-list"></i>
          الفئات
          <i className="bi bi-caret-down-fill"></i>
          <ul className="DropedCatigories">
            <li>التاريخ الاسلامي</li>
            <li>حرب</li>
            <li>حكايات شعبيه</li>
            <li>فزياء وكيمياء</li>
            <li>الأغاني </li>
            <li>شخصيات </li>
            <li>الكون والفضاء </li>
            <li> تكنولوجيا </li>
          </ul>
        </div>

        <li>
          <NavLink to="/">الرئيسية</NavLink>
        </li>
        <li>
          <NavLink to="/Shop">تسوق</NavLink>
        </li>
        <li className="Carts-check-Menu-Btn">
          <Link to="/Cart">سله المشتريات</Link>
        </li>

        <li>
          <NavLink to="/Contact">تواصل معنا</NavLink>
        </li>
        <li>
          <NavLink to="/Stories">قصص وحواديتت</NavLink>
        </li>
      </ul>

      <div className="Icons-box">
        <Link to="/Cart">
          <i
            className="bi bi-cart-fill cart-Icon"
            data-length={CartItem.length}
          ></i>
        </Link>
        <Link>
          <i className="bi bi-heart-fill fav-icon" data-length="0"></i>
        </Link>
      </div>
      <i className="bi bi-list BtnDrop-Menu"></i>
      <ul className="DropedMenu jqDrop ">
        <li>
          <NavLink to="/">الرئيسية</NavLink>
        </li>
        <li>
          <NavLink to="/Shop">تسوق</NavLink>
        </li>
        <li className="Carts-check-Menu-Btn">
          <Link to="/Cart">سله المشتريات</Link>
        </li>

        <li>
          <NavLink to="/Contact">تواصل معنا</NavLink>
        </li>
        <li>
          <NavLink to="/Stories">قصص وحواديتت</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
