import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import IndividualDataService from '../../services/IndividualService';
import BasicDetails from './BasicDetails';
import EventDetails from './EventDetails';
import ContactDetails from './ContactDetails';

const AddIndividual = () => {
  const initialIndividualState = {
  basicDetails: '',
   eventDetails: '',
   contactDetails: ''
  };
  const [individual, setIndividual] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const addBasicDetailsHandler = (...props) => {
    console.log("Basic Details", props);
    let newIndiv = {
      ...individual,...props[0]
    };
    setIndividual(newIndiv);
  }
  const addEventDetailsHandler = (...props) => {
    setIndividual({
      ...individual, ...props[0]
    })
  }
  const saveIndividual = () => {
    console.log("Basic Details at save", individual);
    console.log("Event Details at save", individual);

/*     var data = {
      basicDetails: individual.basicDetails,
      eventDetails: individual.eventDetails
    };  */
    console.log("Data Details at save", individual);
    IndividualDataService.create(individual)
      .then(response => {
        setIndividual({
          name: response.data.name,
          gender: response.data.gender
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newIndividual = () => {
    setIndividual(null);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newIndividual}>
            Add
          </button>
        </div>
      ) : (
          <div>
            <div className="form-group">
              <Tabs defaultActiveKey="basic" transition={false} id="noanim-tab-example">
                <Tab eventKey="basic" title="Basic">
                  <BasicDetails onAddBasicDetails={addBasicDetailsHandler} />
                </Tab>
                <Tab eventKey="events" title="Events">
                  <EventDetails onAddEventDetails={addEventDetailsHandler} />
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                  <ContactDetails />
                </Tab>
              </Tabs>
              <button onClick={saveIndividual} className="btn btn-success">
                Submit
              </button>
            </div>

          </div>
        )}
    </div>
  );
};

export default AddIndividual;