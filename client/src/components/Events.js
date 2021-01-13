import React, { Component } from 'react';

import Birth from './events/Birth';
import Death from './events/Death';
import Wedding from './events/Wedding';
import Divorce from './events/Divorce';
import Partnership from './events/Partnership';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.getBirthDetails = this.getBirthDetails.bind(this);
    this.getDeathDetails = this.getDeathDetails.bind(this);
    this.getWeddingDetails = this.getWeddingDetails.bind(this);
    this.sendEventDetails = this.sendEventDetails.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      dateOfBirth: "",
      father: "",
      mother: "",
      placeOfBirth: "",
      dateOfDeath: "",
      placeOfDeath: "",
      dateOfMarriage: "",
      partner: "",
      placeOfMarriage: "",
      selected:""
    }
  }

  handleSelect = (e) => {
    this.setState({
      selected: e
    })
  }

  sendEventDetails = () => {
    this.props.eventDetails(this.state);
  }

  getBirthDetails = (dob, father, mother, pob) => {
    this.setState({
      dateOfBirth: dob,
      father: father,
      mother: mother,
      placeOfBirth: pob
    },
      this.sendEventDetails
    );
  }

  getDeathDetails = (...props) => {
    this.setState({
      dateOfDeath: props[0].dateOfDeath,
      placeOfDeath: props[0].placeOfDeath
    },
      this.sendEventDetails
    );
  }
/* 
  getPartnershipDetails = (partners) => {
    console.log("Reached getpartner at Events", partners);
    this.setState({
      partners: [...this.state.partners, partners]
    },
      this.sendEventDetails
    );
  } */

  getWeddingDetails = (...props) => {
    this.setState({
      dateOfMarriage: props[0].date,
      placeOfMarriage: props[0].place,
      partner: props[0].partner
    },
      this.sendEventDetails
    );
  }

  
  render(){

    let otherEvents = null;

    if (this.state.selected === "wedding") {
      otherEvents = (
        <Wedding weddingDetails={this.getWeddingDetails} />
      )
    }
    else if (this.state.selected === "divorce") {
      otherEvents = (
        <Divorce divorceDetails={this.getDivorceDetails} />
      )
    }
    else {
      otherEvents = (
        <div></div>
      )
 
    }

    return(
      <div>
        <div class='card'>
          <div class="card-body">
          <h5 class="card-title">Events</h5>
            <Birth birthDetails={this.getBirthDetails} />
            <Death deathDetails={this.getDeathDetails} />
            <DropdownButton
              alignRight
              title="Other Events"
              id="dropdown-menu-align-right"
              onSelect={this.handleSelect}
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
  }
}

