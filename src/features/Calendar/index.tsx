import { useEffect, useState } from "react";
import solarlunar from "solarlunar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import viLocale from "@fullcalendar/core/locales/vi";
import "./style.scss";

function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://date.nager.at/api/v3/PublicHolidays/2026/VN")
            .then(res => res.json())
            .then(data => {
                const holidayEvents = data.map((item: any) => ({
                    title: item.localName,
                    start: item.date,
                    allDay: true,
                }));
                
                setEvents(holidayEvents);
            })
            .catch(err => console.error("Holiday API error:", err));
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale={viLocale}
            height="auto"
            events={events}
            dayMaxEvents={2}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "",
            }}
            dayCellContent={(arg) => {
                const date = arg.date;
                const lunar = solarlunar.solar2lunar(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()
                );

                return (
                    <div className="fc-daygrid-day-number-wrap">
                        <div className="calendar-date">{date.getDate()}</div>
                        <div className="lunar-date">
                            {lunar.lDay}/{lunar.lMonth}
                        </div>
                    </div>
                );
            }}
        />
    );
}

export default Calendar;