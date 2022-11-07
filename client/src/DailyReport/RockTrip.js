import React, { useEffect } from "react";
import "../stylesheets/rocktrip.scss";

const Rocktrip = (props) => {
  //Month has to be filtered in the backend
  const dateString = new Date(String(props.rocktrip.Date));
  const enUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  //Only render date if it has the month selected by user
  return (
    <tr className="Rocktrip_TR">
      <td>{enUSFormatter.format(dateString)}</td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "2A1" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "2A1" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "2A2" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "2A2" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "2B" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "2B" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "3A" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "3A" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "3B" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "3B" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "3C" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "3C" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Dayshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "Oversize Rocks" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
      <td>
        {props.rocktrip.Shift === "Nightshift" ? (
          <div>
            {props.rocktrip.rocktrip &&
              props.rocktrip.rocktrip?.map((item, index) => {
                return (
                  <div>
                    {item.RockType == "Oversize Rocks" ? (
                      <div>{item.Number_Of_Trips}</div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default Rocktrip;
