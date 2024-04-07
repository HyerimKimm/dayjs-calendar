import React, { useEffect, useMemo } from "react";
import classes from "./Calendar.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Header from "./header/Header";
import Item from "./item/Item";
import { calendarStore } from "./calenderStore";
import DayOfWeekLable from "./dayOfWeekLable/DayOfWeekLable";

dayjs.locale("ko");

const Calendar = ({ defaultDate }) => {
  //선택한 날짜
  const { selectedDay, setSelectedDay } = calendarStore();
  // 선택한 날짜의 월
  const daysInMonth = selectedDay.daysInMonth();
  // 선택한 날짜 월의 첫번쨰 날짜
  const firstDayOfMonth = dayjs(selectedDay).startOf("month").locale("ko");
  // 선택한 날짜 월의 전체 날자를 저장하는 배열
  const dates = useMemo(
    () => makeDates(daysInMonth, firstDayOfMonth),
    [daysInMonth, firstDayOfMonth]
  );

  // 해당 월의 시작일을 받아서 해당 월의 전체 일자 배열을 반환하는 함수
  function makeDates(daysInMonth, firstDayOfMonth) {
    const dates = [];

    for (let i = 0; i < daysInMonth; i++) {
      const date = dayjs(firstDayOfMonth).add(i, "day");
      dates.push(date);
    }

    switch (firstDayOfMonth.format("ddd")) {
      case "일":
        break;
      case "토":
        dates.unshift("");
      case "금":
        dates.unshift("");
      case "목":
        dates.unshift("");
      case "수":
        dates.unshift("");
      case "화":
        dates.unshift("");
      case "월":
        dates.unshift("");
        break;
      default:
        break;
    }

    return dates;
  }

  useEffect(() => {
    defaultDate && setSelectedDay(defaultDate);
  }, []);

  return (
    <div className={classes.calendar_wrapper}>
      <Header />
      <DayOfWeekLable />
      <main className={classes.calendar_main_wrapper}>
        {dates.map((date, index) => {
          return <Item key={index} date={date} />;
        })}
      </main>
    </div>
  );
};

export default Calendar;