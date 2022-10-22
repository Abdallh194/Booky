import React, { useState } from "react";
import { AllStories } from "../../data";
function Stories() {
  let [Story] = useState(AllStories);
  return (
    <div className="Stories">
      <div className="container">
        {Story.map((item) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-md-6 StoryCard">
                <img src={item.img} className="img-fluid" alt={item.title} />
              </div>
              <div className="col-md-6 StoryCard">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stories;
