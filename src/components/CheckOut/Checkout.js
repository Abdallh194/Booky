import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import moment from "moment";
function Checkout() {
  let CartItem = useSelector((state) => state.books.cartItems);
  let totlaPrice = 0;
  for (let i = 0; i < CartItem.length; i++) {
    totlaPrice += CartItem[i].price * CartItem[i].qty;
  }
  let [address, setaddress] = useState("");
  let [date, setdate] = useState("");
  let [FNameValid, setFNameValid] = useState(false);
  let [LNameValid, setLNameValid] = useState(false);
  let [EmailValid, setEmailValid] = useState(false);
  let [MobileValid, setMobileValid] = useState(false);
  let [AddressoneValid, setAddressoneValid] = useState(false);
  let [AddresstwoValid, setAddresstwoValid] = useState(false);
  let [CountryValid, setCountryValid] = useState(false);
  let [CityValid, setCityValid] = useState(false);
  let [ZipValid, setZipValid] = useState(false);
  let [DateValid, setDateValid] = useState(false);
  let [succeddedsubmit, setsucceddedsubmit] = useState("");
  let CloseModal = () => {
    setsucceddedsubmit(false);
  };
  return (
    <div className="Checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form
              onSubmit={(e) => {
                if (
                  MobileValid &&
                  FNameValid &&
                  LNameValid &&
                  AddressoneValid &&
                  AddresstwoValid &&
                  ZipValid &&
                  CityValid &&
                  CountryValid &&
                  EmailValid &&
                  DateValid
                ) {
                  setsucceddedsubmit(address + date);
                  e.preventDefault();
                } else {
                  console.log(
                    "MobileValid",
                    MobileValid,
                    "FNameValid",
                    FNameValid,
                    "LNameValid",
                    LNameValid,
                    "AddressoneValid",
                    AddressoneValid,
                    "AddresstwoValid",
                    AddresstwoValid,
                    "ZipValid",
                    ZipValid,
                    "CityValid",
                    CityValid,
                    "CountryValid",
                    CountryValid,
                    "EmailValid",
                    EmailValid,
                    "DateValid",
                    DateValid
                  );
                  e.preventDefault();
                }
              }}
            >
              <h2>املا البيانات</h2>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="First Name"
                  onChange={(e) => {
                    if (e.target.value.length >= 3) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setFNameValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setFNameValid(false);
                    }
                  }}
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={(e) => {
                    if (e.target.value.length >= 3) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setLNameValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setLNameValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => {
                    if (e.target.value.length >= 10) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setEmailValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setEmailValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Mobile No"
                  onChange={(e) => {
                    if (e.target.value.length >= 10) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setMobileValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setMobileValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 1"
                  onChange={(e) => {
                    if (e.target.value.length >= 5) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setAddressoneValid(true);
                      setaddress(e.target.value);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setAddressoneValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address Line 2"
                  onChange={(e) => {
                    if (e.target.value.length >= 5) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setAddresstwoValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setAddresstwoValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  onChange={(e) => {
                    if (e.target.value.length >= 3) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setCountryValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setCountryValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={(e) => {
                    if (e.target.value.length >= 3) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setCityValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setCityValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  onChange={(e) => {
                    if (e.target.value.length >= 3) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ZIP Code"
                  onChange={(e) => {
                    if (e.target.value.length >= 4) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setZipValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setZipValid(false);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-md-6 form_Line">
                <select className="form-select" required>
                  <option>PayPal</option>
                  <option>Direct Check</option>
                  <option>Bank Transfer</option>
                  <option>Pay by Visa</option>
                </select>
              </div>
              <div className="col-md-6 form_Line">
                <p>تاريخ الوصول</p>
                <input
                  type="datetime-local"
                  className="form-control"
                  onChange={(e) => {
                    if (e.target.value.length >= 3) {
                      e.target.classList.add("true");
                      e.target.classList.remove("false");
                      setdate(e.target.value);
                      setDateValid(true);
                    } else {
                      e.target.classList.add("false");
                      e.target.classList.remove("true");
                      setDateValid(false);
                    }
                  }}
                  required
                />
              </div>
              <input
                type="submit"
                value="تأكيد الطلب"
                className="form-control btn-outline-dark"
                id="submit"
              />
            </form>
            <Modal isOpen={succeddedsubmit} onRequestClose={CloseModal}>
              <div className="ModalItem">
                <i className="bi bi-x ModalClose" onClick={CloseModal}></i>
                <h1 className="ModalHead">تم تسجيل طلبك بنجاح</h1>
                <i class="bi bi-check-circle-fill subtrue"></i>
                <h1 className="ModalHead">علي العنوان : {address}</h1>
                <h4 className="ModalDesc">
                  يصلك بعد :{moment(new Date(date)).fromNow()}
                </h4>
              </div>
            </Modal>
          </div>
          <div className="col-md-4 bill">
            <h2 className="head"> الفاتوره</h2>
            {CartItem.map((item) => {
              return (
                <div className="prdo_detail">
                  <p>
                    {item.title} × {item.qty}
                  </p>

                  <p>{item.price} جنيه</p>
                </div>
              );
            })}
            <hr />
            <div className="prdo_detail">
              <p>الاجمالي</p>
              <p>{totlaPrice} جنيه</p>
            </div>
            <div className="prdo_detail">
              <p>الخصم</p>
              <p>0 جنيه</p>
            </div>
            <hr />
            <div className="prdo_detail">
              <p>الاجمالي</p>
              <p>{totlaPrice} جنيه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
