import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <Fade top cascade>
            <div className="col-md-8 rightBox">
              <div className="overlay">
                <div className="content">
                  <div className="head">الكتاب الأحمر</div>
                  <p>
                    يعد كتاب «مقتطفات من أقوال ماو تسي تونغ» أو الكتاب الأحمر
                    كما يطلق عليه في العالم هو أكثر الكتب التي يقرأها العالم
                    حاليا، الكتاب صدر بين عامي 1964 و1976 ويضم خطب الرئيس الصيني
                    الراحل ماوتسي تونغ وأقواله، ويعتبر أحد رموز الثورة الثقافية
                    التي قامت بها في الصين.
                  </p>
                  <Link to="/Shop">اقرا اكتر</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 leftBox">
              <div className="col-md-4 leftBox-TopBox">
                <div className="overlay">
                  <div className="content">
                    <div className="head">العروض المميزه</div>
                    <p>وفر اكتر من 20%</p>
                    <Link to="/Shop">تسوق الان</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 leftBox-BtmBox">
                <div className="overlay">
                  <div className="content">
                    <div className="head">العروض المميزه</div>
                    <p>وفر اكتر من 20%</p>
                    <Link to="/Shop">تسوق الان</Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="row featuers">
        <div className="col-md-3 featBox">
          <i class="bi bi-check">كتب سليمه 100%</i>
        </div>
        <div className="col-md-3 featBox">
          <i class="bi bi-speedometer2"> سرعة التوصيل </i>
        </div>
        <div className="col-md-3 featBox">
          <i class="bi bi-arrow-left-right"> استعاره حتي 30 يوم </i>
        </div>
        <div className="col-md-3 featBox">
          <i class="bi bi-headset"> خدمة عملاء </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
