import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import "../stylesheets/drtrack.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const DRTrack = () => {
  const [reports, setReports] = useState([]);
  const [events, setEvents] = useState([]);

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
        setReports(reportsJson);

        // const events = reportsJson.map((report) => {
        //   const eventDate = new Date(report.Date);
        //   return {
        //     title: `Report by ${username}`,
        //     start: eventDate,
        //     end: eventDate,
        //   };
        // });

        setEvents(events);
      }
    }

    getReports();
  }, []);

  const dayPropGetter = (date) => {
    const dateFormat = moment(date).format("YYYY-MM-DD");
    const reportForDateExists = reports.some(
      (report) => moment(report.Date).format("YYYY-MM-DD") === dateFormat
    );

    return {
      className: reportForDateExists ? "reportExists" : "reportDoesntExist",
    };
  };

  // const myEvent = {
  //   title: "My cool event",
  //   start: new Date(2023, 4, 20, 10, 30),
  //   end: new Date(2023, 4, 20, 14, 30),
  // };

  // const myEventsList = [myEvent];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        dayPropGetter={dayPropGetter}
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default DRTrack;
