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
      setMonths("Januari");
      break;
    case 1:
      setMonths("Februari");
      break;
    case 2:
      setMonths("Maret");
      break;
    case 3:
      setMonths("April");
      break;
    case 4:
      setMonths("Mei");
      break;
    case 5:
      setMonths("Juni");
      break;
    case 6:
      setMonths("Juli");
      break;
    case 7:
      setMonths("Agustus");
      break;
    case 8:
      setMonths("September");
      break;
    case 9:
      setMonths("Oktober");
      break;
    case 10:
      setMonths("November");
      break;
    case 11:
      setMonths("Desember");
      break;
  }

  switch (days) {
    case 0:
      return setDays(() => "Senin");
    case 1:
      return setDays(() => "Selasa");
    case 2:
      return setDays(() => "Rabu");
    case 3:
      return setDays(() => "Kamis");
    case 4:
      return setDays(() => "Jumat");
    case 5:
      return setDays(() => "Sabtu");
    case 6:
      return setDays(() => "Minggu");
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
