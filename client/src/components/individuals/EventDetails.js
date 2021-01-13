import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Birth from './events/Birth';
import Death from './events/Death';
import Wedding from './events/Wedding';
import Divorce from './events/Divorce';


const EventDetails = React.memo (props => {

  let otherEvents; 
  const [eventDetails, setEventDetails] = useState(null);
  const [selected, setSelected] = useState('');
  const [isAlive, setIsAlive] = useState(true);
  //const [otherEvents, setotherEvents] = useState(null);
  

  useEffect(() => {
    props.onAddEventDetails(eventDetails)
  }, [eventDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const addBirthDetailsHandler = (...props) => {
    console.log("at birth details handle in event handler",props);
    setEventDetails({
      ...eventDetails,...props[0]
    });

  }

  const addDeathDetailsHandler = (...props) => {
    console.log("at death details handle in event handler", props);
    setEventDetails({
      ...eventDetails,...props[0]
    });
  }

  const onChangeAliveHandler = e => {
    //const alive = this.state.isAlive;
    setIsAlive (!isAlive);
    // this.sendGeneralDetails();
  }


  const addWeddingDetailsHandler = (...props) => {
    //console.log("at wedding details handle in event handler", props);
    setEventDetails({
      weddingDetails: props[0]
    });

  }
  
  const addDivorceDetailsHandler = (...props) => {
    console.log("at divorce details handle in event handler", props);
    setEventDetails({
      divorceDetails: props[0]
    });

  }



  const handleSelect = e => {
    setSelected(e);
  }

  
  //console.log("selected", selected);
 // console.log("other events", otherEvents);

  if (selected === "wedding") {
      
      otherEvents = <Wedding onAddWeddingDetails={addWeddingDetailsHandler} />;
    //console.log("reached wedding");
    //console.log("other events", otherEvents);
    }
  else if (selected === "divorce") {
    otherEvents = <Divorce onAddDivorceDetails={addDivorceDetailsHandler} />;
    //console.log("reached divorce");
   // console.log("other events", otherEvents);

  }
  else {
    otherEvents = <div></div>;
    //console.log("reached other");
    //console.log("other events", otherEvents);
  } 

/*   if (selected === "wedding") {

    console.log("reached wedding");
  }
  else if (selected === "divorce") {
    console.log("reached divorce");
  }
  else {
    console.log("reached other");
  } */
  return (
    
    <div>
      <div class='card'>
        <div class="card-body">
          <h5 class="card-title">Events</h5>
          <Birth onAddBirthDetails={addBirthDetailsHandler} />
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="defaultChecked2" id="defaultChecked2" checked={isAlive} onChange={onChangeAliveHandler} />
            <label class="custom-control-label" for="defaultChecked2">Alive</label>
          </div>
          {isAlive ?
            (
              <div></div>
            ) : (
              <Death onAddDeathDetails={addDeathDetailsHandler} />
            )
          }
         
          <DropdownButton
            alignRight
            title="Other Events"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="wedding">Wedding</Dropdown.Item>
            <Dropdown.Item eventKey="divorce">Divorce</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="other">Other</Dropdown.Item>
          </DropdownButton>
          {otherEvents}

        </div>
      </div>
    </div>
  )


})

export default EventDetails;