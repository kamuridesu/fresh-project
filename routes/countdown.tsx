import Countdown from "../islands/Countdown.tsx";

export default function Page() {
    const date = new Date();
    date.setSeconds(date.getSeconds() + 5);
    // date.setHours(date.getHours() + 1);
    return (
        <p>
            The big event is happening <Countdown target={date.toISOString()} />
        </p>
    )
}