import React from "react";
import * as cssModule from "../../styles/index";

const CardCountDown = () => {
  var project = setInterval(projectDone, 10);
  var clients = setInterval(happyClients, 10);
  var coffee = setInterval(cupsCoffee, 10);
  let count1 = 1;
  let count2 = 1;
  let count3 = 1;

  function projectDone() {
    count1++;
    document.querySelector("#number1").innerHTML = count1;
    if (count1 === 500) {
      clearInterval(project);
    }
  }

  function happyClients() {
    count2++;
    document.querySelector("#number2").innerHTML = count2;
    if (count2 === 89) {
      clearInterval(clients);
    }
  }

  function cupsCoffee() {
    count3++;
    document.querySelector("#number3").innerHTML = count3;
    if (count3 === 359) {
      clearInterval(coffee);
    }
  }

  return (
    <div className={cssModule.Page.grid}>
      <div className={cssModule.Page.statistics}>
        <div>
          <p id="number1"></p>
          <h3>siswa</h3>
        </div>
        <div>
          <p id="number2"></p>
          <h3>siswa</h3>
        </div>
        <div>
          <p id="number3"></p>
          <h3>siswa</h3>
        </div>
        <div>
          <p>100</p>
          <h3>siswa</h3>
        </div>
      </div>
    </div>
  );
};

export default CardCountDown;
