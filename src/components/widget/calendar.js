import React, { useEffect, useState } from "react";
import * as cssModule from "../../styles/index";

const WidgetCalendar = () => {
  let dateTime = new Date();
  const [years] = useState(dateTime.getFullYear());
  const [dates] = useState(dateTime.getDate());
  const [months, setMonths] = useState(dateTime.getMonth());
  const [days, setDays] = useState(dateTime.getDay());
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

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
      return setDays(() => "Sunday");
    case 1:
      return setDays(() => "Monday");
    case 2:
      return setDays(() => "Tuesday");
    case 3:
      return setDays(() => "Wesnesday");
    case 4:
      return setDays(() => "Thuesday");
    case 5:
      return setDays(() => "Friday");
    case 6:
      return setDays(() => "Saturday");
  }

  return (
    <div className={cssModule.Widget.calendar}>
      <h1 className={cssModule.Widget.clock}>{clockState}</h1>
      <div className={cssModule.Widget.date}>
        <h1 className={cssModule.Widget.day}>{days}</h1>
        <p className={cssModule.Widget.date}>{dates}</p>
        <div>
          <h1 className={cssModule.Widget.month}>{months}</h1>
          <p className={cssModule.Widget.year}>{years}</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetCalendar;
