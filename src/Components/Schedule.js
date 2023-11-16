import React, { Component, useContext, useEffect, useState } from 'react';
import logo from './nanny.jpg';
import {FormDataContext} from "./FormDataContext";
import noteImage from "./note.JPG";  // doctors note for testing
import { CircleMenu, CircleMenuItem, CircleMenuToggle } from "react-circular-menu";
import nannyImage from "./nanny3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export const SchedulePage = () => {
  const { formData } = useContext(FormDataContext); // access the data in read-only mode

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  }

  return (
    <div>
      <div className="schedule_text">
        <h1>
          This page is intended to be used by the nanny to view their schedule for the day.
        </h1>
        <h2> 
          Welcome {formData.nannyName}, here is your schedule for {formData.date} as requested by {formData.name}
          <br></br>
          We hope you're excited for an awesome day full of fun activities.
          <FontAwesomeIcon icon={faUmbrella} className="icon" size="1x"/>
          <br></br>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button class="button-62" onClick={toggleHelp}> Help </button>

            {showHelp && (
              <div style={{
                position: 'absolute',
                bottom: '100%',
                backgroundColor: 'yellow',
                border: '4px solid black',
                padding: '10px',
                width: '1000px',
                size: 20
              }}>
                Press the circle menu to open up the schedule for {formData.nannyName}. <br></br>
                Click check when done to send a notification to {formData.name}. <br></br>
                Enter a note to send to {formData.name}.
                <button class="xButton" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleHelp}> X </button>
              </div>
            )}
          </div>

          <span className="users">
            <FontAwesomeIcon icon={faUsers} color="white"/>
            {formData.name} {formData.nannyName}
          </span>

          <img src={nannyImage} alt="nanny image" className="nannyImage"/>
        </h2>

      </div>
      <div>
      <CircleMenu startAngle={-90} rotationAngle={270} itemSize={15} radius="20">
          <CircleMenuItem className="circleItem" tooltip="activity 1" onClick={() => console.log("activity 1")}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span><FontAwesomeIcon icon={faClock} size="2x" /> {formData.time1} </span>
              <span>{formData.activity1}</span>
              <label>
                <input type="checkbox" className="checkboxClass"/>
                  Check when done
              </label>
              <span>
                <input type ="text"/>
              </span>
              <span>
                <button> submit to parent </button>
              </span>
            </div>
          </CircleMenuItem>

          <CircleMenuItem className="circleItem" tooltip="activity 2" onClick={() => console.log("activity 2")}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span><FontAwesomeIcon icon={faClock} size="2x" /> {formData.time2} </span>
              <span>{formData.activity2}</span>
              <label>
                <input type="checkbox" className="checkboxClass"/>
                  Check when done
              </label>
              <span>
                <input type ="text"/>
              </span>
              <span>
                <button> submit to parent </button>
              </span>
            </div>
          </CircleMenuItem>

          <CircleMenuItem className="circleItem" tooltip="activity 3" onClick={() => console.log("activity 3")}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span><FontAwesomeIcon icon={faClock} size="2x" /> {formData.time3} </span>
              <span>{formData.activity3}</span>
              <label>
                <input type="checkbox" className="checkboxClass"/>
                  Check when done
              </label>
              <span>
                <input type ="text"/>
              </span>
              <span>
                <button> submit to parent </button>
              </span>
            </div>
          </CircleMenuItem>

          <CircleMenuItem className="circleItem" tooltip="activity 4" onClick={() => console.log("activity 4")}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <span><FontAwesomeIcon icon={faClock} size="2x" /> {formData.time4} </span>
              <span>{formData.activity4}</span>
              <label>
                <input type="checkbox" className="checkboxClass"/>
                  Check when done
              </label>
              <span>
                <input type ="text"/>
              </span>
              <span>
                <button> submit to parent </button>
              </span>
            </div>
          </CircleMenuItem>

          <CircleMenuItem className="circleItem" tooltip="allergy info" onClick={() => console.log("allergy info")}><FontAwesomeIcon icon={faPrescription} size="2x"/>{formData.allergy}</CircleMenuItem>
        </CircleMenu>
      </div>
    </div>
  );
}

export default SchedulePage;
