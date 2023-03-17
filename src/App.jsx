import React, { useEffect, useState } from "react";
import axios from "axios";

import SideBar from "./core/layout/SideBar";
import Header from "./core/layout/Header";
import ContentBody from "./components/ContentBody";
import useElementSize from "./core/hooks/useElementSize";

const App = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [headerRef, { height }] = useElementSize();
  const [region, setRegion] = useState("tehran");
  const [weatherData, setWeatherData] = useState({});

  const getApiUrl = (city = "tehran") => {
    return `${import.meta.env.BASE_URL}/v1/forecast.json?key=${import.meta.env.API_KEY}&q=${city}&days=3&aqi=no&alerts=no
    `;
  };
  useEffect(()=>{
    console.log(import.meta);
  },[])

  const search = (tyedCity) => {
    return new Promise(async (res) => {
      try {
        const list = await fetch(`${import.meta.env.BASE_URL}/v1/search.json?key=${import.meta.env.API_KEY}&q=${tyedCity}`,
          { method: "GET" }).then(res => res.json())
        if (list.length > 0) {
          res(list.map(it => ({ label: it.name, value: it.name })))
        }
        else {
          res([])
        }

      } catch { res([]) }
    })
  }

  const getCallApi = async (c) => {
    fetch(getApiUrl(c), { method: "GET" })
      .then(resp => resp.json())
      .then(resp => {
        setWeatherData(resp)
      })
      .catch(res => {
        console.log(res);
      })
  };


  useEffect(() => {
    if (region)
      getCallApi(region);
    else getCallApi("tehran");
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
