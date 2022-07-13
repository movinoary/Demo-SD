import React, { useEffect, useState } from "react";
import * as cssModule from "../../styles/index";

const WidgetCalendar = () => {
  let dateTime = new Date();
  const [years] = useState(dateTime.getFullYear());
  const [dates] = useState(dateTime.getDate());
  const [months] = useState(dateTime.getMonth());
  const [days] = useState(dateTime.getDay());
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

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
