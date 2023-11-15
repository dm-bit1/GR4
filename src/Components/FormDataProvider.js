import React, { useState } from 'react';
import {FormDataContext} from './FormDataContext';

/*
Change the initialFormData to get rid of the preloaded form by using the code below.
const initialValue = {
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
*/

const initialFormData = {
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
  image: ""
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
