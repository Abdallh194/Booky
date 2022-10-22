import React, { useState } from "react";

function Contact() {
  let [submit, setsubmit] = useState(null);
  return (
    <div className="Contact">
      <div className="container">
        <div className="row">
          <div className="col-md-7 form-Box">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setsubmit(true);
              }}
            >
              <h1>تواصل معنا</h1>
              <input
                type="text"
                className="form-control"
                placeholder="اسم المستخدم"
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="البريد الالكتروني"
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="الموضوع"
                required
              />
              <textarea
                type="text"
                className="form-control "
                placeholder="الرساله"
                id="msg"
                required
              />
              <input
                type="submit"
                value="تسجيل"
                className="form-control btn-outline-dark"
                onClick={(e) => {
                  if (submit) {
                    e.target.value = " ✓ تم التسجيل";
                  }
                }}
              />
            </form>
          </div>
          <div className="col-md-5">
            <div className="col-md-5 MapDesc">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.95132511647665!2d30.927288197445552!3d31.014711175459933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7b3636f286365%3A0x493978db634c94dc!2z2LXYqNix2Yog2KjZhNiq2KfYrNmKINix2K7Ypw!5e0!3m2!1sar!2seg!4v1666173069116!5m2!1sar!2seg"
                className="mapGogle"
              ></iframe>
            </div>
            <div className="col-md-12 Details">
              <i className="bi bi-geo-alt-fill"> Atawa , Tanta , Egy</i>
              <i className="bi bi-telephone-fill"> 01091415560 </i>
              <i className="bi bi-envelope-fill info">
                {"  "}
                Abdallhsabry194@gmail.com
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
