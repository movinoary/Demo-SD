import React from "react";
import * as cssModule from "../../styles/index";

const CardNews = ({ image, date, month, title, category, onclick }) => {
  return (
    <div className={cssModule.Components.cardNews} onClick={onclick}>
      <div className={cssModule.Components.image}>
        <img src={image} alt="sample52" />
      </div>
      <figcaption>
        <div className={cssModule.Components.date}>
          <p>{date}</p>
          <span>{month}</span>
        </div>
        <h3>{title}</h3>
      </figcaption>
      <footer>
        <div>{category}</div>
      </footer>
    </div>
  );
};

export default CardNews;
