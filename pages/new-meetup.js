import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetup() {
  function addMeetupHandler(enteredMeetup) {
    console.log(enteredMeetup);
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
