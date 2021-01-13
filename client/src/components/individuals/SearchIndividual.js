import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import IndividualDataService from '../../services/IndividualService';



const SearchIndividual = React.memo(props => {

  const initialSearchDetails = {
    firstName: '',
    middleName: '',
    lastName: '',
    nickName: '',
  };
  const [searchDetails, setSearchDetails] = useState(initialSearchDetails);
  const [individuals, setIndividuals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [show, setShow] = useState(true);
  //setShow(true);
  console.log("showing", show);
  const [selectedIndividual, setSelectedIndividual] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setSearchDetails({ ...searchDetails, [name]: value }
    )
  };

  const setActiveIndividual = (individual, index) => {
    console.log("setActive Indiv", individual);
    setCurrentIndex(currentIndex);
    setSelectedIndividual(individual);
  }

  const selectIndividual = () => {
    props.setSelectedIndividual(selectedIndividual);
    setShow(false);
  }

  const searchName = () => {
    setShow(true);
    console.log("Searchname calling", searchDetails.firstName + searchDetails.lastName);
    IndividualDataService.findByName(searchDetails.firstName, searchDetails.lastName)
      .then(response => {
        setIndividuals(response.data);
      console.log("Printing response searchName");
      console.log(response.data);
      console.log("indiv", individuals);

    })
    .catch(e => {
      console.log(e);
    }) 

  }
  return (
    <div>
      
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Partner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-row mb-4">
            <div class="col">
              <input type="text" id="firstName" class="form-control" required placeholder="First name" value={searchDetails.firstName} onChange={handleInputChange} name='firstName' />
            </div>
            <div class="col">
              <input type="text" id="middleName" class="form-control" placeholder="Middle Name" value={searchDetails.middleName} onChange={handleInputChange} name='middleName' />
            </div>
            <div class="col">
              <input type="text" id="lastName" class="form-control" required placeholder="Last Name" value={searchDetails.lastName} onChange={handleInputChange} name='lastName' />
            </div>
            <div class="col">
              <input type="text" id="nickName" class="form-control" placeholder="Nick Name" value={searchDetails.nickName} onChange={handleInputChange} name='nickName' />
            </div>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={searchName}
            >
              Search
          </button>
          </div>
          <div class='card'>
            <div class='card-body'>
              {/* <div class='card-title'>Select your partner</div> */}
              {individuals &&
                individuals.map((individual, index) => (

                  <li
                    className={"list-group-item" + (index === currentIndex ? "active" : "")}
                    onClick={() => setActiveIndividual(individual, index)}
                    key={index}
                  >
                    {individual.name.firstName} {" "} {individual.name.lastName}
                  </li>
                ))}
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={selectIndividual}>Select</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
  

})

export default SearchIndividual;