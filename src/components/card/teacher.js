import React from "react";
import * as cssModule from "../../styles/index";

const CardTeacher = ({ image, mapel, nama, desc }) => {
  return (
    <figure className={cssModule.Components.cardTeacher}>
      <img src={image} alt="Kelas" />
      <div className={cssModule.Components.title}>
        <div>
          <h2>{mapel}</h2>
          <h4>{nama}</h4>
        </div>
      </div>
      <figcaption>
        <p>{desc}</p>
      </figcaption>
    </figure>
  );
};

export default CardTeacher;
