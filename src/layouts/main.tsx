import { useEffect, useState } from "react";

export default function MainLayout() {
    const [days, setDays] = useState<string>("");
    const [hours, setHours] = useState<string>("");
    const [minutes, setMinutes] = useState<string>("");
    const [seconds, setSeconds] = useState<string>("");

    useEffect(() => {
        // Set the date we're counting down 
        const countDownDate = new Date("May 7, 2027 00:00:00").getTime();

        // Get current date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Set the states and pad with 0 if less than 10 and not a day
        setDays(days.toString());
        setHours(hours < 10 ? `0${hours}` : hours.toString());
        setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
        setSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());

        // Update the countdown every 1 second
        const interval = setInterval(() => {
            // Get current date and time
            const now = new Date().getTime();
            // Find the distance between now and the count down date
            const distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Set the states, pad with 0 if less than 10 unless it's a day
            setDays(days.toString());
            setHours(hours < 10 ? `0${hours}` : hours.toString());
            setMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
            setSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
      <div className="container main-font">
        <div className="inner-container">
          <span style={{fontSize: '4.5em'}}>
            <div className="counter-row">
                <div className="day-counter">{days}</div> days
            </div>
            <div className="counter-row">
                <div className="counter">{hours}</div> hours
            </div>
            <div className="counter-row">
                <div className="counter">{minutes}</div> minutes
            </div>
            <div className="counter-row">
                <div className="counter">{seconds}</div> seconds
            </div>
          </span>
          <div className="counter-description">
            <p>until Ironman returns</p>
            <p>in Avengers Secret Wars</p>
          </div>
        </div>
      </div>
)}