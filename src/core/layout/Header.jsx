import React from "react";

import AsyncSelect from 'react-select/async';

import Logo from "../../assets/images/logo.png";

import "./Header.scss";

const Header = React.forwardRef(({ city, loadOptions, handleCityChange }, ref) => (
  <div ref={ref} className="header d-flex justify-content-between align-items-center">
    <div className="d-flex flex-column jsutify-content-start align-items-strech">
      <h2 >
        {city}
      </h2>
      <div className="">
        <AsyncSelect 
        cacheOptions 
        defaultOptions 
        loadOptions={loadOptions} 
        defaultValue={{ value: "tehran", label: "tehran" }} 
        onChange={handleCityChange} loadingMessage={() => "در حال جستجو ..."} 
        noOptionsMessage={() => "موردی یافت نشد ."} 
        styles={{
          container: (baseStyles, props) => {
            return { ...baseStyles, width: "300px" }
          },
        }} />
      </div>
    </div>
    <img
      style={{
        width: "80px",
      }}
      src={Logo}
      alt="هواشناسی"
    />
  </div>
));

export default Header;
