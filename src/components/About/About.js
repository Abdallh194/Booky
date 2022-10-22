import React from "react";

function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ImageBox"></div>
          <div className="col-md-6 TextBox">
            <div className="content">
              <div className="head">معلومات حول مكتبتي</div>
              <p className="desc">
                مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
                القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
                مجانا
              </p>
              <div className="shop">تسوق الكتب</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
