// The parent page is used to input the daily schedule for the nanny. And, it should send that schedule
// information to the nanny page.
import BasicFormValidation from "../Components/BasicFormValidation";

export const ParentPage = () => {
  return (
    <div>
      <h1>
        This page shall be done by the parent which results in the 
        <br></br>
        schedule that gets sent to the nanny's schedule page.
        <br></br>
        The nanny can then access their schedule in the schedule page.
      </h1>
      <BasicFormValidation />
    </div>
  );
}


