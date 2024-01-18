import React from "react";
import "./Events.scss";
import { events } from "../../constants";

const EachEvent = ({ img, title, date }) => {
    return (
        <div class="container">
            <div class="card">
                <div class="image">
                    <img href="" src={img} />
                </div>
                <div class="content">
                    <h3>{title}</h3>
                    <h4>{date}</h4>
                </div>
            </div>
        </div>
    )
}

const Events = () => {
    return (
        <div className="events">
            <h1>Events</h1>
            <div className="allEvents">
                {events.map(event => {
                    return <EachEvent img={event.img} title={event.name} date={event.date} />
                })}
            </div>
        </div >
    )
}

export default Events;