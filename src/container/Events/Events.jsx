import React, { useRef } from "react";
import "./Events.scss";
import { events } from "../../constants";
import { color } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const EachEvent = ({ img, title, date, about, rules, qr, url }) => {
    const dialogRef = useRef();
    return (
        <div className="container">
            <div className="card">
                <div className="image">
                    <img href="" src={img} />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <h4>{date}</h4>
                    <button onClick={() => dialogRef.current.showModal()}>Details...</button>
                    <a href={url}><button>Register</button></a>
                </div>

                <dialog ref={dialogRef} className="dialogContent">
                    {/* {title}
                    {date}
                    <span onClick={()=>dialogRef.current.close()}>close</span> */}
                    <div className='EventPage'>
                        <span className="close_btn" onClick={() => dialogRef.current.close()}><IoMdClose /></span>
                        <div className="event_heading">
                            <h1 className='vim'>{title}</h1>
                        </div>
                        <div className="event_container">
                            <img className="event_poster" src={img} alt="Event Banner" />
                            <div className="event_content">
                                <div className="event_qr">
                                    <img src={qr} alt="QR Code" />
                                </div>
                                <div className='about_rules'>
                                    {/* <h3>About</h3>
                                    <p>{about}</p>
                                    <h3>Rules</h3>
                                    <p>{rules}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="event_register_btn">
                            <a href={url} target='_blank' rel="noreferrer"><button>REGISTER</button></a>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

const Events = () => {
    return (
        <div id="Events">
            <div className="events">
                <h1 className="vim">Events</h1>
                <div className="allEvents">
                    {events.map(event => {
                        return <EachEvent img={event.poster} title={event.name} date={event.date} about={event.about} rules={event.rules} qr={event.qr} url={event.url} />
                    })}
                </div>
            </div >
        </div>
    )
}

export default Events;