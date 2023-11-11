// This component shows the nanny page which displays the schedule sent by the parent.
// Schedule.js
import React, { Component, useContext, useEffect } from 'react';
import logo from './nanny.jpg';
import {FormDataContext} from "./FormDataContext";
import noteImage from "./note.JPG";  // doctors note for testing
import { CircleMenu, CircleMenuItem, CircleMenuToggle } from "react-circular-menu";
import nannyImage from "./nanny3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";

/* urgent fix; Make the div that holds the menu have enough space at the top
so as to not overlap with the text when the menu is opened. */
export const SchedulePage = () => {
  // this formData basically uses a preloaded form for easy testing.
  const formData = {
    name: "Jane Doe",
    email: "jane@gmail.com",
    phoneNumber: "773-777-3333",
    nannyName: "Amanda McPhee",
    date: "2023-11-06",
    allergy: "Jake has peanut allergy, Jill has milk allergy",
    activity1: "Reading",
    time1: "12:00-14:00",
    activity2: "Playtime",
    time2: "15:00-16:00",
    activity3: "Nap",
    time3: "16:00-16:30",
    activity4: "Snack",
    time4: "16:30-17:00",
    image: noteImage
  };
  // Save to local storage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]); // this will save formData to localStorage whenever formData changes

  // Generate the helpBox
  window.onload = function() {
    const helpBox = document.getElementById('helpBox');
    helpBox.innerText = 'Test';
    helpBox.style.display = 'none';
    // Set other initial styles if needed
  };

  // Handle the Help button
  const handleHelpClick = () => {
    const helpBox = document.getElementById('helpBox');
    if (helpBox.style.display === 'none') {
        helpBox.style.display = 'block';
        // Optionally set the position of the box
        helpBox.style.left = '100px'; // X-coordinate
        helpBox.style.top = '100px';  // Y-coordinate
    } else {
        helpBox.style.display = 'none';
    }
  }

  return (
    <div>
      <div className="schedule_text">
        <h1>
          This page is intended to be used by the nanny to view their schedule for the day.
        </h1>
        <h2> 
          { /* <pre>{JSON.stringify(formData, null, 2)}</pre> */ }
          Welcome {formData.nannyName}, here is your schedule for {formData.date} as requested by {formData.name}
          <br></br>
          We hope you're excited for an awesome day full of fun activities.
          <FontAwesomeIcon icon={faParachuteBox} className="icon" size="2x"/>
          <br></br>

          <div className="help-container">
            <button class="button-62" role="button" onClick={handleHelpClick}>
              Help
            </button>
            <div id="helpBox" className="helpBox">
              Press the circle menu to view your schedule for the specified day.
            </div>
          </div>

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
/* 
If you want to change the formData to use the form from the Parent page use the code below instead.
const { formData } = useContext(FormDataContext); // access the data in read-only mode
*/