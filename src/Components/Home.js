import logo from './nanny.jpg';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const HomePage = () => {
    const navigate = useNavigate();

    const handleParentButtonClick = () => {
      navigate('/parent');
    };

    const handleScheduleButtonClick = () => {
      navigate('/schedule');
    }

    const [showParentHelp, setShowParentHelp] = useState(false);

    const [showScheduleHelp, setShowScheduleHelp] = useState(false);

    const toggleScheduleHelp = () => {
      setShowScheduleHelp(!showScheduleHelp);
    }

    const toggleParentHelp = () => {
      setShowParentHelp(!showParentHelp);
    }
    
    /* Fix me add a home button that takes it back to the HomePage */
    return (
      <div>
        <h0> 
          Welcome to the NannyHelper.<FontAwesomeIcon icon={faUmbrella} className="icon" size="1x"/>
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
          
          <button class="button-62" onClick={() => setShowParentHelp(!showParentHelp)}>
            <FontAwesomeIcon icon={faLightbulb} size="1x" color="yellow"/>
          </button>

          {showParentHelp && (
            <div style={{
              position: 'absolute',
              backgroundColor: 'yellow',
              border: '4px solid black',
              padding: '10px',
              width: '300px',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              <FontAwesomeIcon icon={faCircleInfo} color="purple" size="1x" />

              The parent page lets the parent set the nanny's awesome schedule for the day.

              <button class="xButton" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleParentHelp}> X </button>
            </div>
          )}
        </div>

        <div>
          <button class="button-62"
            role="button"
            onClick={handleScheduleButtonClick}>
            View schedule
            <br></br>
            <FontAwesomeIcon icon={faCalendarCheck} size="2x"/>              
          </button>

          <button class="button-62" onClick={() => setShowScheduleHelp(!showScheduleHelp)}>
            <FontAwesomeIcon icon={faLightbulb} size="1x" color="yellow"/>
          </button>

          {showScheduleHelp && (
            <div style={{
              position: 'absolute',
              backgroundColor: 'yellow',
              border: '4px solid black',
              padding: '10px',
              width: '300px',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              <FontAwesomeIcon icon={faCircleInfo} color="purple" size="1x" />
              The schedule page lets the nanny view their schedule for the day. How cool is that?
        
              <button class="xButton" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleScheduleHelp}> X </button>
            </div>
          )}
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