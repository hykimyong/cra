import React, { useRef, useState } from 'react'
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
    const dayjsDate = dayjs();
    const newDayjstDate = dayjsDate.add(1,'week');
    const cloneNewDayjsDate = newDayjstDate.clone().add(1,'week');

    const [day, setDay] = useState("");
    const birthDayRef = useRef(null);
    const handleBirthDayChange = (event)=>{
        setDay(dayjs(event.target.value,"YYYY-MM-DD").format("dddd"));
    }

  return (
    <div>
        <h1>Day.js</h1>
        <div>Immutable Check</div>
        <div>
            {dayjsDate.format()}
            <br></br>
            {newDayjstDate.format()}
            <br></br>
            {cloneNewDayjsDate.format()}
            <br></br>
        </div>
        <div>Summer Time (New-york)</div>
        <div>{dayjs.tz.guess()}</div>
        <div>
            2018년 3월 10일 13시에 하루 더하기:
            {dayjs.tz("2018-03-13 13:00:00",'America/New_York').add(1,"day").format()}
        </div>
        <div>
            2018년 3월 10일 13시에 24시간 더하기:
            {dayjs.tz("2018-03-13 13:00:00",'America/New_York').add(24,"hours").format()}
        </div>
        <br></br>
        <div>Leap year (Korea)</div>
        <div>
            2017년 1월 1일에 1년 빼기:
            {dayjs("2017-01-01").subtract(1,"year").format()}
        </div>
        <div>
            2017년 1월 1일에 365일 빼기:
            {dayjs("2017-01-01").subtract(365,"day").format()}
        </div>
        <br></br>
        <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
        <div>{dayjs("07-17-2021").format("YYYY년 M월 DD일")}</div>
        <br></br>
        <div>자기생일 요일 찾기</div>
        <div>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}></input>
            <div>무슨요일이엿을까?</div>
            <div>{day}</div>
        </div>
        <div>두 날짜 비교</div>
        <div>2021-07-17 03:00와 2021-07-18 02:00는 몇시간 차이인가?</div>
        <div>{`${dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}시간`}</div>
    </div>
  )
}
