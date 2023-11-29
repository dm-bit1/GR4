import logo from './nanny.jpg';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb, faPenToSquare, faPenNib, faClipboardQuestion, faLaptopCode, faHeart } from "@fortawesome/free-solid-svg-icons";

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
      <div className="homePage">
        <h0>
          <FontAwesomeIcon icon={faUmbrella} className="icon" size="2x"/>
          Welcome to the NannyHelper
        </h0>

        <h3>
          <FontAwesomeIcon icon={faClipboardQuestion} color="white" size="2x" />
          What's Group 17's problem statement? Read below
          <br></br>
          <br></br>
          <FontAwesomeIcon icon={faPenNib} color="white" size="2x" />
          We have found that nannies struggle to keep up with their duties that the children's parents want them to do each day.
          <br></br>
          <br></br>
          <FontAwesomeIcon icon={faLaptopCode} color="white" size="2x" />
          <FontAwesomeIcon icon={faHeart} color="pink" size="2x" />
          Which is why Group 17 decided to make this application, to help struggling nannies
          and parents.
          <br></br>
          <br></br>
          <FontAwesomeIcon icon = { faCircleInfo } color="white" size="2x" />
          Parents can enter a form to set the nanny's schedule in the parent page. And, the nanny can view their schedule in the nanny page. 
        </h3>
        
        
        
        <header className="App-header">
          <h4>
            <FontAwesomeIcon icon={faUmbrella} style={{ color: 'rgb(9, 108, 238)' }} className="icon" size="2x" />
            NannyHelper by {' '}
            <FontAwesomeIcon icon={faLaptopCode} style={{ color: 'rgb(9, 108, 238)' }} className="icon" size="2x" />
            {' '}
            Group 17
            {' '}
            <FontAwesomeIcon icon={faSquareCheck} style={{ color: 'rgb(9, 108, 238)' }} className="icon" size="2x"/>
          </h4>

          <div className="Buttons">
            <div>
              <button class="button-62" 
                role="button"
                onClick={handleParentButtonClick}>
                <FontAwesomeIcon icon = {faFileLines} size="3x"/>

                <span> 
                  Parent
                </span>

                <br></br>

              </button>
          
              <button class="button-62" onClick={() => setShowParentHelp(!showParentHelp)}>
                <FontAwesomeIcon icon={faLightbulb} size="2x" color="yellow"/>
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

              <FontAwesomeIcon icon={faCircleInfo} color="purple" size="2x" />

              We made the parent page to allow parents to set the schedule for the nanny.

              <button class="xButton" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleParentHelp}> X </button>
            </div>
          )}
        </div>

        <div>
            <button class="button-62"
              role="button"
              onClick={handleScheduleButtonClick}>
              <FontAwesomeIcon icon={faCalendarCheck} size="3x"/> 
              <br></br>
              Nanny             
            </button>

            <button class="button-62" onClick={() => setShowScheduleHelp(!showScheduleHelp)}>
              <FontAwesomeIcon icon={faLightbulb} size="2x" color="yellow"/>
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
              <FontAwesomeIcon icon={faCircleInfo} color="purple" size="2x" />
              
                We made the nanny page so the nanny can view their schedule. How cool is that?
        
              <button class="xButton" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleScheduleHelp}> X </button>
            </div>
            )}
            </div>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <p className="React">
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> 
      </div>
    );
  }