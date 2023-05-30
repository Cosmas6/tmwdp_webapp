import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import "../stylesheets/report-calendar.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import ModalContext from "../Dashboard/ModalContext";

const localizer = momentLocalizer(moment);

const ReportCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMonthView, setIsMonthView] = useState(true);
  const navigate = useNavigate();
  const calendarRef = useRef(null);
  const { openModal, closeModal } = useContext(ModalContext);

  console.log(selectedDate, "selectedDate");

  const departments = [
    { name: "Spillway", path: "/dashboard/spillway/create" },
    { name: "Tunnels", path: "/dashboard/tunnels/create" },
    { name: "Dams", path: "/dashboard/dams/create" },
    { name: "Employer's Camp", path: "/dashboard/employerscamp/create" },
    { name: "Instrumentation", path: "/dashboard/instrumentation/create" },
  ];

  const openCreateReportModal = () => {
    const content = (
      <div className="report-modal-content">
        <h2>Select Department</h2>
        <ul>
          {departments.map((department) => (
            <li
              key={department.name}
              onClick={() => {
                navigate(department.path, { state: { selectedDate } });
                closeModal();
              }}
            >
              {department.name}
            </li>
          ))}
        </ul>
        <button className="close" onClick={closeModal}>
          Close
        </button>
      </div>
    );
    openModal(content);
  };

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
          `http://localhost:4001/UserReportRoute/user?user=${encodeURIComponent(
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
        const clickTime = new Date(); // Get current date and time
        date.setHours(
          clickTime.getHours(),
          clickTime.getMinutes(),
          clickTime.getSeconds(),
          clickTime.getMilliseconds()
        );
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
      {selectedDate && !isMonthView && (
        <button className="submit-button" onClick={openCreateReportModal}>
          Create Report
        </button>
      )}
      <Calendar
        className={selectedDate && !isMonthView ? "day-view" : ""}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        views={["month", "day"]}
        messages={{
          month: "Month-View",
          agenda: "Details",
        }}
        onView={(view) => {
          setIsMonthView(view === "month");
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

export default ReportCalendar;
