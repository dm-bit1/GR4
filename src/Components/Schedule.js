import React, { Component, useContext, useEffect, useState } from 'react';
import logo from './nanny.jpg';
import {FormDataContext} from "./FormDataContext";
import noteImage from "./note.JPG";  // doctors note for testing
import { CircleMenu, CircleMenuItem, CircleMenuToggle } from "react-circular-menu";
import nannyImage from "./nanny3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrescription, faCircleInfo, faUser, faClock, faUsers, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { DemoApp } from './demoapp';
/*https://www.npmjs.com/package/@fullcalendar/react*/

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
    <div className="schedulePage">
      <div className="schedule_text">
        <h1>
          This page is intended to be used by the nanny to view their schedule for the day.
        </h1>
        <h2> 
          Welcome &nbsp;
          <FontAwesomeIcon icon={faUser} color="pink" size="2x" />
          {formData.nannyName}, here is your schedule for {formData.date} as requested by &nbsp;
          <FontAwesomeIcon icon={faUser} color="lightblue" size="2x" /> {formData.name}
          <br></br>
          <FontAwesomeIcon icon={faUmbrella} className="icon" size="2x"/>
          We hope you're excited for an awesome day full of fun activities.
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
                width: '600px',
                color: 'black',
                size: 20
              }}>

                <FontAwesomeIcon icon={faCircleInfo} color="purple" size="2x" />
                The calendar shows the schedule for {formData.nannyName} 
                &nbsp;
                including activities sent by {formData.name}

                <button class="xButton" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleHelp}> X </button>
              </div>
            )}
          </div>

          <span className="users">
            <FontAwesomeIcon icon={faUsers} color="white"/>
            {formData.name} {formData.nannyName}
          </span>

          { /* <img src={nannyImage} alt="nanny image" className="nannyImage"/> */ }
        </h2>

      </div>

      <div className='demo'>

         <DemoApp/>

      </div>
    </div>
  );
}

export default SchedulePage;
