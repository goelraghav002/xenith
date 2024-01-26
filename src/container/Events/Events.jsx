import React, { useRef } from "react";
import "./Events.scss";
import { events } from "../../constants";
// import poster from '../../assets/coupon-fr.png'
import { codebreak } from '../../pages/index';
import { color } from "framer-motion";

const EachEvent = ({ img, title, date, about, rules, qr }) => {
    const dialogRef = useRef();
    return (
        <div class="container">
            <div class="card">
                <div class="image">
                    <img href="" src={img} />
                </div>
                <div class="content">
                    <h3>{title}</h3>
                    <h4>{date}</h4>
                    <button onClick={() => dialogRef.current.showModal()}>Details...</button>
                </div>

                <dialog ref={dialogRef} className="dialogContent">
                    {/* {title}
                    {date}
                    <span onClick={()=>dialogRef.current.close()}>close</span> */}
                    <div className='EventPage'>
                        <h1 className='vim'>{title}</h1>
                        <span onClick={() => dialogRef.current.close()} style={{ color: 'black' }}>close</span>
                        <div className="cluedo_quest">
                            <img className='poster' src={img} alt="Event Banner" />
                            <div className="main_content">
                                <div className='mycontent'>
                                    <p>{about}</p>
                                    <p>{rules}</p>
                                </div>
                                <div className='Event_img'>
                                    <img className='qr' src={qr} alt="QR Code" />
                                </div>
                            </div>
                            <a src="" target='_blank'><button className='glow-on-hover'>Register</button></a>
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
                        return <EachEvent img={event.poster} title={event.name} date={event.date} about={event.about} rules={event.rules} qr={event.qr} />
                    })}
                </div>
            </div >
        </div>
    )
}

export default Events;