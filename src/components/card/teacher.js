import React from "react";
import * as cssModule from "../../styles/index";

const CardTeacher = props => {
  return (
    <figure className={cssModule.Components.cardTeacher}>
      <img src={props.img} alt="Kelas" />
      <div className={cssModule.Components.title}>
        <div>
          <h2>{props.kat}</h2>
          <h4>{props.kls}</h4>
        </div>
      </div>
      <figcaption>
        <p>{props.desc}</p>
      </figcaption>
    </figure>
  );
};

CardTeacher.defaultProps = {
  img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg",
  kat: "Wajib",
  kls: "Pramuka",
  desc: "Which is worse, that everyone has his price, or that the price is always so low",
};

export default CardTeacher;
