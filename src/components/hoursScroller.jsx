import React, { useEffect, useRef } from 'react';
import { locateActiveElement } from '../core/utils/domUtils';

const HoursScroller = ({ allHours, selectedHour, handleSelectHour }) => {
    const sliderRef = useRef()
    useEffect(() => {
        if (allHours?.length > 0 && sliderRef.current && selectedHour) {
            locateActiveElement(sliderRef.current, allHours.indexOf(selectedHour));
        }
    }, [allHours, sliderRef, selectedHour])
    return (
        <div
            dir="ltr"
            ref={sliderRef}
            className="pb-2 w-100 tiny-scrollbar d-flex flex-row justify-content-start align-items-center">
            {allHours?.length > 0 &&
                allHours?.map((hour, index) => (
                    <button
                        key={hour.time}
                        className=" d-inline-block rounded m-0 py-1 px-3"
                        style={{
                            border: "2px solid #42068d",
                            transition: "0.2s",
                            ...index === allHours.indexOf(selectedHour) ? {
                                backgroundColor: '#7b3ec8',
                                color: "#fff"
                            } : {}
                        }}
                        onClick={() => handleSelectHour(index)}>{hour.time.split(" ")[1]}</button>
                ))}
        </div>
    );
}

export default HoursScroller;