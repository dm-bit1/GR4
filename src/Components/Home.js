import logo from './nanny.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
    const navigate = useNavigate();

    const handleParentButtonClick = () => {
      navigate('/parent');
    };

    const handleScheduleButtonClick = () => {
      navigate('/schedule');
    }
    /* Fix me add a home button that takes it back to the HomePage */
    return (
      <div>
        <h0> 
          Welcome to the NannyHelper!
        </h0>
        <h3>
          We have found through many interviews that nannies struggle to keep up with their duties that the children's parents want them to do each day.
          <br></br>
          Which is why Group 17 decided to make this application, to help struggling nannies
          and parents.
        </h3>
        <div className="Buttons">
          <div>
            <button class="button-62" 
              role="button"
              onClick={handleParentButtonClick}> 
              Parent
              <br></br>
              <FontAwesomeIcon icon = {faFileLines} size="2x"/>
            </button>
            
            <button class="button-62"
              role="button" 
              data-tooltip="The parent page allows the parent to enter a schedule for the nanny. How cool is that?">
              ?
            </button>

          </div>
          <div>
            <button class="button-62"
              role="button"
              onClick={handleScheduleButtonClick}>
              View schedule
              <br></br>
              <FontAwesomeIcon icon={faCalendarCheck} size="2x"/>              
            </button>

            <button class="button-62"
              role="button" 
              data-tooltip="The schedule page allows the nanny to view her schedule for the day, awesome right?">
              ?
              </button>

          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="React">
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> 
      </div>
    );
  }