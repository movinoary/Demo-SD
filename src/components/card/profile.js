import React from "react";
import * as cssModule from "../../styles/index";

const CardProfileLeft = ({
  title,
  descOne,
  descTwo,
  descThree,
  descFour,
  descFive,
  descSix,
  descSeven,
  descEight,
  descNine,
  descTen,
}) => {
  return (
    <div className={cssModule.Components.cardProfile}>
      <h3>{title}</h3>
      <div>
        <p>{descOne}</p>
        <p>{descTwo}</p>
        <p>{descThree}</p>
        <p>{descFour}</p>
        <p>{descFive}</p>
        <p>{descSix}</p>
        <p>{descSeven}</p>
        <p>{descEight}</p>
        <p>{descNine}</p>
        <p>{descTen}</p>
      </div>
    </div>
  );
};

const CardProfileRight = ({
  title,
  descOne,
  descTwo,
  descThree,
  descFour,
  descFive,
  descSix,
  descSeven,
  descEight,
  descNine,
  descTen,
}) => {
  return (
    <div className={cssModule.Components.cardProfile}>
      <h3>{title}</h3>
      <div>
        <p>{descOne}</p>
        <p>{descTwo}</p>
        <p>{descThree}</p>
        <p>{descFour}</p>
        <p>{descFive}</p>
        <p>{descSix}</p>
        <p>{descSeven}</p>
        <p>{descEight}</p>
        <p>{descNine}</p>
        <p>{descTen}</p>
      </div>
    </div>
  );
};

export { CardProfileLeft, CardProfileRight };
