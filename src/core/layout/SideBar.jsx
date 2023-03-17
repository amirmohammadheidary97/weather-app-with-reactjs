import React from "react";
import { convertDate } from "../utils/dateUtils";
import "./Header.scss";
///
const SideBar = ({
  setSelectedDayIndex,
  selectedDayIndex,
  days
}) => {
  //////
  /////
  return (
    <div className="side-bar d-flex">
      <ul className="d-flex flex-column justify-content-center">
        {days?.length > 0 &&
          days.map((d, index) =>
            <li key={d.date} onClick={() => setSelectedDayIndex(index)} className={["vazir-font", selectedDayIndex === index ? "side-active" : null]
              .filter(Boolean)
              .join(" ") + " d-flex flex-column justify-content-start align-items-start"}>
              <span className="fs-6 fw-bold">{
                index === 0
                  ? "امروز "
                  : index === 1
                    ? " فردا "
                    : index === 2
                      ? " پسفردا "
                      : ""
              }</span>
              <span
                className="fs-7 text-nowrap"
              >
                {convertDate(d.date)}
              </span>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default SideBar;
