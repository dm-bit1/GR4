// The parent page is used to input the daily schedule for the nanny. And, it should send that schedule
// information to the nanny page.
import BasicFormValidation from "../Components/BasicFormValidation";
import React, { useState, useContext } from 'react';
import {FormDataContext} from "./FormDataContext";
import logo from "./nanny2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPenToSquare, faCalendarPlus, faUmbrella, faHandsHoldingChild } from "@fortawesome/free-solid-svg-icons";

export const ParentPage = () => {
  const [showForm, setShowForm] = useState(false);

  const [updateForm, setUpdateForm] = useState(false);

  const { formData } = useContext(FormDataContext); // access the data in read-only mode

  const emptyInitialValue = {
    name: "",
    email: "",
    phoneNumber: "",
    nannyName:"",
    date: "",
    allergy: "", // allergy information
    activity1: "",  // simple layout that allows up to 4 activities and their duration
    time1: "",
    activity2: "",
    time2: "",
    activity3: "",
    time3: "",
    activity4: "",
    time4: "",
    image: "" // Optional image. Example use can be a doctor's note.
  };

  const initialValue = showForm ? emptyInitialValue : formData;

  return (
    <div className = "parentPage">
        <div className="parentHeader" style={{ position: 'relative' }}>
            <div>
              <h2>
                <FontAwesomeIcon icon={faHandsHoldingChild} color="white" size="2x" />
                {' '}
                Parent Page of the
                {' '}
                <FontAwesomeIcon icon={faUmbrella} color="white" size="2x" />
                {' '}
                NannyHelper
              </h2>
              <img src={logo} alt="Logo" style={{ width: '800px', height: '800px'}} />
            </div>


            <div className="parentButtons" style={{ position: 'absolute', top: '70px', left: '70px', display: 'flex', gap: '200px' }}>
                <button class="button-62" onClick={() => setShowForm(!showForm)}>
                  <FontAwesomeIcon icon={faCalendarPlus} color="white" size="5x" />

                  {showForm ? 'Hide form' : <div> Add a new schedule </div>}
                </button>

                <button class="button-62" onClick={() => setUpdateForm(!updateForm)}>
                  <FontAwesomeIcon icon={faPenToSquare} color="white" size="5x" />

                  {updateForm ? 'Hide update form' : <div>Update schedule set by {formData.name} {formData.date}</div> }
                </button>

            </div>

        </div>

      {showForm && (
        <div>
          <div className = "parentText">
          <h1>
            This page shall be done by the parent which results in the 
            <br></br>
            schedule that gets sent to the nanny.
            <br></br>
            The nanny can then access their schedule in the schedule page.
          </h1>
          </div>


          <div className="basicForm">
            <BasicFormValidation initialValue={initialValue} />
          </div>

        </div>
      )}

      {updateForm && (
        <div>
          {/* {JSON.stringify(formData, null, 2)} */}
          <BasicFormValidation initialValue={initialValue} />
        </div>
      
      )}

    </div>
  );
}


