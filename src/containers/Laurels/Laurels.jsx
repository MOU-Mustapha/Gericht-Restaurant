import React from "react";
import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels-awards_card">
    <img src={imgUrl} alt={title} />
    <div className="app__laurels-awards_card-content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant" style={{ fontSize: "16px" }}>
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div
      className="app__bg app__wrapper section__padding"
      id="awards"
      style={{ position: "relative" }}
    >
      <img src={images.logo} alt="laurels-logo" className="app__laurels-logo" />
      <div className="app__wrapper-info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels-awards">
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={index} />
          ))}
        </div>
      </div>
      <div className="app__wrapper-img-la">
        <img src={images.laurels} alt="laurels-img" />
      </div>
    </div>
  );
};

export default Laurels;
