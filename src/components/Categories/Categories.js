import React, { useState } from "react";
import { Catigories } from "../../data";
import Zoom from "react-reveal/Zoom";
function Categories() {
  let [Cats, setCats] = useState(Catigories);
  console.log(Cats);
  return (
    <div className="Catigories">
      <div className="container">
        <div className="row">
          <div className="head">الفئات</div>
          {Cats.map((item) => {
            return (
              <Zoom right cascade key={item.id}>
                <div className="catigory col-md-3">
                  <img src={item.img} className="img-fluid" alt="" />
                  <div>
                    <div className="title">{item.title}</div>
                    <p className="cat_num"> عدد الكتب {item.num}</p>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
