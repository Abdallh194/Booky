import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleRegister } from "../../redux/BookSlice";
import Modal from "react-modal";
import { Link } from "react-router-dom";
function Log() {
  let Reduxusername = useSelector((state) => state.books.user);
  let Reduxpassword = useSelector((state) => state.books.pass);
  let [openLogin, setopenLogin] = useState(true);
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [newusername, setnewusername] = useState("");
  let [newpassword, setnewpassword] = useState("");
  let [AttrOpenModal, setAttrOpenModal] = useState(null);
  let dispatch = useDispatch();
  return (
    <div className="Log">
      <div className="container">
        {openLogin ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (Reduxusername === username && Reduxpassword === password) {
                e.target.elements[0].value = "";
                e.target.elements[1].value = "";
                setAttrOpenModal(username);
              } else {
                document.querySelector(".logError").style.display = "block";
              }
            }}
          >
            <h2>تسجيل مستخدم</h2>
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="form-control"
              onChange={(e) => setusername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="الرقم السري"
              className="form-control"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <div className="logError">
              خطاء في اسم المستخدم او كلمه المرور{" "}
              <i class="bi bi-exclamation-circle-fill"></i>
            </div>
            <button
              type="submit"
              className="form-control btn-btn-outline-danger"
            >
              تسجيل دخول
            </button>
            <p className="reg">
              ليس لديك حساب ؟{" "}
              <span onClick={() => setopenLogin(false)}>سجل الان</span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setopenLogin(true);
              setAttrOpenModal(newusername);
              dispatch(HandleRegister({ newusername, newpassword }));
            }}
          >
            <h2>تسجيل مستخدم جديد</h2>
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="form-control"
              required
              onChange={(e) => setnewusername(e.target.value)}
            />
            <input
              type="password"
              placeholder="الرقم السري"
              className="form-control"
              onChange={(e) => setnewpassword(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="البريد الالكتروني"
              className="form-control"
              required
            />
            <input
              type="number"
              className="form-control"
              placeholder="رقم الهاتف"
            />
            <input
              type="submit"
              value="تسجيل"
              className="form-control btn-btn-outline-danger"
            />
          </form>
        )}
        <Modal isOpen={AttrOpenModal}>
          <i className="bi bi-check-circle-fill subtrue trueLgin"></i>
          <h2 className="ModalPrice">تم تسجيل الدخول بنجاح</h2>
          <h2 className="text-center">اهلا : {Reduxusername}</h2>
          <Link to="/Shop" className="trueShop">
            تسوق الان
          </Link>
        </Modal>
      </div>
    </div>
  );
}

export default Log;
