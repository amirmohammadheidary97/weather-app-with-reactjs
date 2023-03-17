import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";
/////////// icons
import { IoIosRainy } from "react-icons/io";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { BsFillCloudSnowFill } from 'react-icons/bs'
///////////// utils
import { locateActiveElement } from "../core/utils/domUtils";
///////////// styles
import "./styles/ContentBody.scss";
import HoursScroller from "./hoursScroller";
//////////////////////////////////////////
const ContentBody = ({ selectedDay }) => {

  const [currentHourData, setCurrentHourData] = useState(null)
  ////////////////////
  const allHours = selectedDay?.hour
  const handleSelectHour = index => setCurrentHourData(allHours?.[index] ?? null)
  ////////////////////
  useEffect(() => {
    if (allHours?.length > 0) {
      setCurrentHourData(allHours?.[new Date().getHours()]);
    }
  }, [allHours])
  ////////////////////
  return (
    <div className="content-body d-flex flex-column overflow-hidden">
      <div className="w-100 p-0 m-0" >
          <HoursScroller
            allHours={allHours}
            selectedHour={currentHourData}
            handleSelectHour={handleSelectHour}
          />
      </div>
      <div className="py-2 head-content d-flex justify-content-between align-items-center">
        <div>
          <h2>{currentHourData?.temp_c ?? ''} °C</h2>
        </div>
        <img
          style={{
            width: "80px",
          }}
          src={currentHourData?.condition?.icon ?? ""}
          alt=""
        />
      </div>
      <div className="head-body mt-5 d-flex justify-content-between align-items-end">
        <div className="content-info">
          <h4>
            <IoIosRainy
              style={{
                fontSize: "23px",
                marginLeft: "5px",
              }}
            />{" "}
            {currentHourData?.chance_of_rain}% احتمال بارش باران
          </h4>
          <h4>
            <BsFillCloudSnowFill
              style={{
                fontSize: "23px",
                marginLeft: "5px",
              }}
            />{" "}
            {currentHourData?.chance_of_snow}% احتمال بارش برف
          </h4>
          <h4>
            <FiWind
              style={{
                fontSize: "23px",
                marginLeft: "5px",
              }}
            />{" "}
            {currentHourData?.wind_kph} کیلومتر بر ساعت وزش باد
          </h4>
          <h4>
            <WiHumidity
              style={{
                fontSize: "23px",
                marginLeft: "5px",
              }}
            />{" "}
            {currentHourData?.humidity}% رطوبت
          </h4>
        </div>

      </div>
    </div>
  );
};

export default ContentBody;
