import React from 'react'
import './Timeline.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {timeline} from "./TimelineData";
import {AiFillCalendar} from "react-icons/ai"

const Timeline = () => {


  return (
    <div className="timeline-section" id='TimeLine'>
      <h3 className='text vim' style={{color:"white",display:"flex",justifyContent:"center",fontSize:"2.5rem"}}>Timeline</h3>
      <VerticalTimeline lineColor='white'>

        {timeline.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#f5f5f5', color: '#333333' }}
              contentArrowStyle={{ borderRight: '7px solid  #f5f5f5 ' }}
              iconStyle={{ background: 'DarkSlateGrey', color: '#fff' }}        
              icon={<AiFillCalendar />}
              // style={{width:"auto", maxwidth:"100%"}}
            >
              <h2 className="vertical-timeline-element-title"><b>Event:</b> {item.event}</h2>              
              <p style={{color:" #777777"}} className='para'>
               <b>Date:</b> {item.date}, <b>Time:</b> {item.time}
              </p>
            </VerticalTimelineElement>
          )
        })
      } 
      </VerticalTimeline>
    </div>
  );
}




export default Timeline