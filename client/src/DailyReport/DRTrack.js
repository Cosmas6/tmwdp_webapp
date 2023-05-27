import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import "../stylesheets/drtrack.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const DRTrack = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const calendarRef = useRef(null);

  console.log(selectedDate);

  useEffect(() => {
    async function getReports() {
      const cookies = new Cookies();
      const token = cookies.get("TOKEN");
      if (!token) {
        navigate("/auth/login");
      } else {
        const decodedToken = jwt_decode(token);
        const userFirstName = decodedToken.userFirstName;
        const userLastName = decodedToken.userLastName;
        // Create a full name by joining first name and last name with a space
        const username = `${userFirstName} ${userLastName}`;

        console.log(username);
        const response = await fetch(
          `http://localhost:4000/UserReportRoute/user?user=${encodeURIComponent(
            username
          )}`
        );

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }

        const reportsJson = await response.json();

        const events = reportsJson.map((report) => {
          const eventDate = new Date(report.Date);
          return {
            id: report._id,
            title: `${report.Section} Report `,
            start: eventDate,
            end: eventDate,
            section: report.Section.toLowerCase(),
          };
        });

        setEvents(events);
      }
    }

    getReports();
  }, []);

  useEffect(() => {
    const ref = calendarRef.current;
    const listenSlotClick = (event) => {
      const elements = document.elementsFromPoint(event.clientX, event.clientY);
      const dayElement = elements.find((element) =>
        element.matches(".rbc-day-bg")
      );
      if (dayElement) {
        const date = new Date(dayElement.getAttribute("data-date"));
        setSelectedDate(date);
      }
    };
    if (calendarRef && ref) {
      ref.addEventListener("click", listenSlotClick);
      return () => {
        ref.removeEventListener("click", listenSlotClick);
      };
    }
  }, []);

  return (
    <div ref={calendarRef} className="drtrack-container">
      {selectedDate && (
        <button
          className="submit-button"
          onClick={() =>
            navigate("/report-creation-path", { state: { selectedDate } })
          }
        >
          Create Report
        </button>
      )}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        messages={{
          month: "Month-View",
          week: "Week-View",
          day: "Day-View",
          agenda: "Details",
        }}
        components={{
          dateCellWrapper: ({ children, value }) =>
            React.cloneElement(children, { "data-date": value }),
        }}
        onSelectEvent={(event) => {
          navigate(`/dashboard/${event.section}/display/${event.id}`);
        }}
      />
    </div>
  );
};

export default DRTrack;
