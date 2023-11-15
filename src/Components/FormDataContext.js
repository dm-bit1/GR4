// FormDataContext.js
import React from 'react';

/*
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
*/

export const FormDataContext = React.createContext({
  formData: {},
  setFormData: () => {
  }
});
