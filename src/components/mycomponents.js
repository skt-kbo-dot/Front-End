import React, { useState, forwardRef } from "react";
import DatePicker, {getYear , getMonth, getDay} from "react-datepicker";
import { Link, useLocation} from 'react-router-dom'
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Datepick = () => {

    const location = useLocation();
    const queryString = location.pathname;

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const formatToYYYYMMDD = (date) => {
        if (!date) return '';
    
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
    
        return `${year}${month}${day}`;
      };
    

    return (
        <div className="Datepick">
            <DatePicker locale={ko} selected={selectedDate} onChange={handleDateChange} dateFormat="yyyyMMdd" className="w-[100%]" />
            <Link to={queryString + "?date=" + `${formatToYYYYMMDD(selectedDate)}`}/>
        </div>
  );
};

export function Item_list(image,text) {
    return(
        <div className="w-96 h-60 relative">
            <img className="w-80 h-44 left-[25px] top-[24px] absolute bg-zinc-300 rounded-2xl" src={image}/>
            <div className="left-[381px] top-[55px] absolute text-black text-5xl font-normal">{text}</div>
        </div>
    )
}