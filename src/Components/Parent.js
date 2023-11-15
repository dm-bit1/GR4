// The parent page is used to input the daily schedule for the nanny. And, it should send that schedule
// information to the nanny page.
import BasicFormValidation from "../Components/BasicFormValidation";
import React, { useState, useContext } from 'react';
import {FormDataContext} from "./FormDataContext";
import logo from "./nanny_read.jpg"; 

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
    <img src={logo} alt="Logo" style={{ width: '100%' }} />

    <div style={{ position: 'absolute', top: '70px', left: '70px', display: 'flex', gap: '70px' }}>
      <button class="button-62" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide form' : 'Add a new schedule'}
      </button>

      <button class="button-62" onClick={() => setUpdateForm(!updateForm)}>
        {updateForm ? 'Hide update form' : <p> Update schedule by {formData.name} {formData.date} </p>}
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


