import React, { useEffect, useState } from "react";
import axios from "axios";

import SideBar from "./core/layout/SideBar";
import Header from "./core/layout/Header";
import ContentBody from "./components/ContentBody";
import useElementSize from "./core/hooks/useElementSize";
import { requests_weather } from "./core/service/api";

const App = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [headerRef, { height }] = useElementSize();
  const [region, setRegion] = useState("tehran");
  const [weatherData, setWeatherData] = useState({});

  const search = (tyedRegion) => {
    new Promise((res, rej) => {
      requests_weather.requests_search(tyedRegion).
        then(resp => {
          if (resp?.data?.length > 0) {
            res(list.map(it => ({ label: it.name, value: it.name })))
          }
          else {
            res([])
          }
        }).catch(() => { res([]) })
    })
  }

  const getForecast = async (region) => requests_weather.requests_forecast(region).then(resp=>{
    console.log(resp);
  })

  useEffect(() => {
    if (region)
      getForecast(region);
  }, [region]);

  return (
    <div className="weather-app">
      <Header
        ref={headerRef}
        city={region}
        loadOptions={search}
        handleCityChange={(c) => {
          setRegion(c.value)
        }}
      />
      <div
        className="d-flex flex-row justify-content-start align-items-stretch m-0 p-0"
        style={{
          height: `calc(100vh - ${height}px)`,
        }}
      >
        <SideBar
          selectedDayIndex={selectedDayIndex}
          setSelectedDayIndex={setSelectedDayIndex}
          days={weatherData?.forecast?.forecastday ?? []}
        />
        {weatherData?.forecast?.forecastday?.length > 0 &&
          <ContentBody selectedDay={weatherData?.forecast?.forecastday[selectedDayIndex]} />}
      </div>
    </div>
  );
};

export default App;
