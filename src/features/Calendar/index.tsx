import eventApi from "@/api/eventApi";
import type { EventType } from "@/types/event";
import viLocale from "@fullcalendar/core/locales/vi";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import solarlunar from "solarlunar";
import "./style.scss";

function Calendar() {
    const [events, setEvents] = useState<EventType[]>([]);

    const [selectedDayEvents, setSelectedDayEvents] = useState<EventType[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await eventApi.getEvents();

                console.log(response.data);
                

                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    const handleDateClick = (arg: any) => {
        const clickedDate = new Date(arg.dateStr);
        clickedDate.setHours(0, 0, 0, 0);
        
        const endOfClickedDate = new Date(arg.dateStr);
        endOfClickedDate.setHours(23, 59, 59, 999);

        const filtered = events.filter((event) => {
            const eventStart = new Date(event.start);
            const eventEnd = event.end ? new Date(event.end) : eventStart;

            return (
                (eventStart <= endOfClickedDate && eventEnd >= clickedDate)
            );
        });

        setSelectedDayEvents(filtered);
    };

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale={viLocale}
                height="auto"
                events={events}
                dayMaxEvents={2}
                dateClick={handleDateClick}
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
                eventContent={(arg) => {
                    const { event } = arg;

                    if (event.allDay || !event.start) {
                        return true;
                    }

                    const isMultiDay = event.end && event.start.toDateString() !== event.end.toDateString();

                    const formatTime = (date: Date) =>
                        date.toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                        });

                    const startTime = formatTime(event.start);
                    const endTime = event.end ? formatTime(event.end) : "";

                    // EVENT DÀI NGÀY
                    if (isMultiDay) {
                        return (
                            <div className="fc-event-multiday">
                                <div className="fc-event-time">{endTime ? `${startTime} - ${endTime}` : startTime}</div>
                                <div className="fc-event-title">
                                    {event.title}
                                </div>
                            </div>
                        );
                    }

                    // EVENT NGẮN NGÀY
                    return (
                        <>
                            <div className="fc-event-wrap">
                                <div
                                    className="fc-daygrid-event-dot"
                                    style={{
                                        "--dot-color": event.backgroundColor || "#3788d8",
                                    } as React.CSSProperties}
                                />
                                <div className="fc-event-time">
                                    {endTime ? `${startTime} - ${endTime}` : startTime}
                                </div>
                            </div>
                            <div className="fc-event-title">
                                {event.title}
                            </div>
                        </>
                    );
                }}
            />
            {selectedDayEvents.length > 0 && (
                <div id="events_list">
                    <h3 className="event-list__title">Sự kiện trong ngày</h3>

                    {selectedDayEvents.map((event) => {
                        const formatTime = (date: Date) =>
                            date.toLocaleTimeString("en-US", {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                            });

                        const start = event.start ? formatTime(new Date(event.start)) : "";
                        const end = event.end ? formatTime(new Date(event.end)) : "";

                        return (
                            <a href={event.url} key={event.id}>
                                <div className="item-event">
                                    <div className="item-event-wrap">
                                        <div
                                            className="item-event__dot"
                                            style={{ "--dot-color": event.color || "#3788d8" } as React.CSSProperties}
                                        />
                                        <div className="item-event__time">
                                            {end ? `${start} - ${end}` : start}
                                        </div>
                                    </div>
                                    <div className="item-event__title">
                                        {event.title}
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default Calendar;