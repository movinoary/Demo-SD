import React, { useEffect, useState } from "react";
import * as cssModule from "../../styles/index";

const DashCalendar = () => {
  let dateTime = new Date();
  const [years] = useState(dateTime.getFullYear());
  const [dates, setDates] = useState(dateTime.getDate());
  const [months, setMonths] = useState(dateTime.getMonth());
  const [days, setDays] = useState(dateTime.getDay());
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);

    switch (months) {
      case 0:
        setMonths("January");
        break;
      case 1:
        setMonths("February");
        break;
      case 2:
        setMonths("March");
        break;
      case 3:
        setMonths("April");
        break;
      case 4:
        setMonths("May");
        break;
      case 5:
        setMonths("June");
        break;
      case 6:
        setMonths("July");
        break;
      case 7:
        setMonths("August");
        break;
      case 8:
        setMonths("September");
        break;
      case 9:
        setMonths("October");
        break;
      case 10:
        setMonths("November");
        break;
      case 11:
        setMonths("December");
        break;
    }

    switch (days) {
      case 0:
        setDays("Sunday");
        break;
      case 1:
        setDays("Monday");
        break;
      case 2:
        setDays("Tuesday");
        break;
      case 3:
        setDays("Wesnesday");
        break;
      case 4:
        setDays("Thuesday");
        break;
      case 5:
        setDays("Friday");
        break;
      case 6:
        setDays("Saturday");
        break;
    }

    if (dates < 10) {
      setDates("0" + dates);
    }
  }, []);

  return (
    <div className={cssModule.Components.calendar}>
      <h1 className={cssModule.Components.clock}>{clockState}</h1>
      <div className={cssModule.Components.date}>
        <h1 className={cssModule.Components.day}>{days}</h1>
        <p className={cssModule.Components.date}>{dates}</p>
        <div>
          <h1 className={cssModule.Components.month}>{months}</h1>
          <p className={cssModule.Components.year}>{years}</p>
        </div>
      </div>
    </div>
  );
};

export default DashCalendar;
