import './TimelineCard.css';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function TimelineCard({ Monthprophecy }) {
  const { id, title, text} = Monthprophecy
  
useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return (
    <div className="timeline-item" id={id}>
        <div className="timeline-item-content">
            <span className="tag">
                {}
            </span>
            <p>{title}</p>
            <span className="message">{text}</span>
            <span className="circle" data-aos="flip-up">
            Challenge
            </span>
        </div>
    </div>
    
    )

}