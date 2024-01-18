import React from "react";
import "./Team.scss";
import { teamMembers } from "../../constants"

const Canvas = ({ imgSrc, titles, details }) => {
    return (
        <a href="#" className="canvas">
            <div className="canvas_border">
                <svg>
                    <defs>
                        <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'rgb(253,137,68)', stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: 'rgb(153,75,23)', stopOpacity: 1 }}></stop>
                        </linearGradient>
                        <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D34F48"></stop>
                            <stop offset="100%" stopColor="#772522"></stop>
                        </linearGradient>
                    </defs>
                    <rect
                        id="rect-grad"
                        className="rect-gradient"
                        fill="none"
                        stroke="url(#grad-orange)"
                        strokeLinecap="square"
                        strokeWidth="4"
                        strokeMiterlimit="30"
                        width="100%"
                        height="100%"
                    ></rect>
                </svg>
            </div>
            <div className="canvas_img-wrapper">
                <img className="canvas_img" src={imgSrc} alt="" />
            </div>
            <div className="canvas_copy">
                <strong className="canvas_copy_title">
                    {titles}
                </strong>
                <span className="canvas_copy_details">{details}</span>
            </div>
        </a>
    );
};

const Team = () => {

    return (
        <div className="team">
            <div className="heading">
                <h1>Organizing Team</h1>
            </div>
            <div className="allTeam">
            {teamMembers.map(member => {
                return <Canvas
                    imgSrc={member.img}
                    titles={member.name}
                    details={member.designation}
                />
            })}
            </div>
        </div>
    )
}

export default Team;