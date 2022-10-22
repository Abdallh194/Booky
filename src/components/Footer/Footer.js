import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 footCard">
            <div className="logo">
              <Link to="/">
                <span className="sp1">مكت</span>
                <span className="sp2">بتي</span>
              </Link>
            </div>
            <p className="desc">
              مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
              القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
              مجانا
            </p>
            <i className="bi bi-geo-alt-fill info"> Atawa , Tanta , Egy</i>
            <a
              href="mailto:Abdallhsabry194@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-envelope-fill info">
                {"  "}
                Abdallhsabry194@gmail.com
              </i>
            </a>
            <a href="tel:+201091415560" target="_blank" rel="noreferrer">
              <i className="bi bi-telephone-fill info"> 01091415560 </i>
            </a>
          </div>
          <div className="col-md-3 footCard">
            <div className="head">روابط سريعه</div>
            <ul className="footMenu">
              <li>
                <NavLink to="/">
                  <i className="bi bi-arrow-left"> الرئيسية </i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Shop">
                  <i className="bi bi-arrow-left"> تسوق </i>
                </NavLink>
              </li>
              <li>
                <Link to="/Cart">
                  <i className="bi bi-arrow-left"> عربة التسوق والدفع </i>
                </Link>
              </li>

              <li>
                <NavLink to="/Contact">
                  <i className="bi bi-arrow-left"> تواصل معنا </i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Stories">
                  <i className="bi bi-arrow-left"> قصص وحواديتت </i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footCard">
            <div className="head">حسابي </div>
            <ul className="footMenu">
              <li>
                <NavLink to="/">
                  <i className="bi bi-arrow-left"> الرئيسية </i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Shop">
                  <i className="bi bi-arrow-left"> تسوق </i>
                </NavLink>
              </li>
              <li>
                <Link to="/Cart">
                  <i className="bi bi-arrow-left"> عربة التسوق والدفع </i>
                </Link>
              </li>

              <li>
                <NavLink to="/Contact">
                  <i className="bi bi-arrow-left"> تواصل معنا </i>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Stories">
                  <i className="bi bi-arrow-left"> قصص وحواديتت </i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footCard">
            <div className="head">أخر الاخبار</div>
            <p className="desc">
              احصل علي اخر اخبار مكتبتي عن طريق الاشتراك لدينا
            </p>
            <div className="inpBox">
              <input
                type="email"
                className="form-control"
                placeholder="البريد الالكتروني"
              />
              <button className="btn btn-warning">اشترك</button>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=100007172563893">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/AbdallhSabry9">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/abdallhrakha/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
