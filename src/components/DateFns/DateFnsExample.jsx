import React, { useRef, useState } from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/ko';


import {add, format, sub, differenceInHours} from 'date-fns';
import {format as timezoneFormat} from 'date-fns-tz';
import addWeeks from 'date-fns/addWeeks';
import {ko} from 'date-fns/locale';



export default function DateFnsExample() {

    const dayFnsDate = new Date();
    const newDayFnsDate = add(dayFnsDate, {weeks:1});
    const newDayFnsDate2 = addWeeks(newDayFnsDate, 1);

    const [day, setDay] = useState("");
    const birthDayRef = useRef(null);
    const handleBirthDayChange = (event)=>{
        setDay(format(new Date(event.target.value),"EEEE", {locale: ko}));
    }

  return (
    <div>
        <h1>date - Fns</h1>
        <div>Immutable Check</div>
        <div>
            {format(dayFnsDate, "yyyy-MM-dd")}
            <br></br>
            {format(newDayFnsDate, "yyyy-MM-dd")}
            <br></br>
            {format(newDayFnsDate2, "yyyy-MM-dd")}
            <br></br>
        </div>
        <div>Summer Time (New-york)</div>
        <div>{dayjs.tz.guess()}</div>
        <div>
            2018년 3월 10일 13시에 하루 더하기:
            {timezoneFormat(add( new Date("2018-03-09 13:00:00"),{days:1}),
            'yyy-MM-dd HH:mm:ssXXX',{
                timeZone:"America/New_York"
                })}
        </div>
        <br></br>
        <div>
        2018년 3월 10일 13시에 하루 더하기:
            {timezoneFormat(add( new Date("2018-03-10 13:00:00"),{hours:24}),
            'yyy-MM-dd HH:mm:ssXXX',{
                timeZone:"America/New_York"
                })}
        </div>
        <br></br>
        <div>Leap year (Korea)</div>
        <div>
            2017년 1월 1일에 1년 빼기:
            {format(sub(new Date("2017-01-01"),{years:1}), "yyyy-MM-dd")}
        </div>
        <div>
            2017년 1월 1일에 365일 빼기:
            {format(sub(new Date("2017-01-01"),{days:365}), "yyyy-MM-dd")}
        </div>
        <br></br>
        <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
        <div> {format(new Date("07-17-2021"),"yyyy년 M월 d일")}</div>
        <br></br>
        <div>자기생일 요일 찾기</div>
        <div>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}></input>
            <div>무슨요일이엿을까?</div>
            <div>{day}</div>
        </div>
        <div>두 날짜 비교</div>
        <div>2021-07-17 03:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
        <div>{`${differenceInHours(new Date("2021-07-17 03:00"),new Date("2021-07-18 02:00"))}시간`}</div>
    </div>
  )
}
