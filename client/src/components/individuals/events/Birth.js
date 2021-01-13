import React, { useState, useEffect } from 'react';
import { Search } from 'react-bootstrap-icons';

import SearchIndividual from '../SearchIndividual.js';

const Birth = (props) => {

  const initialBirthDetails = {
    father: '',
    mother: '',
    placeOfBirth: '',
    dateOfBirth: '',
    
  };

  const [birthDetails, setBirthDetails] = useState(initialBirthDetails);
  const [indivSearch, setIndivSearch] = useState(null);
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');

  useEffect(() => {
    props.onAddBirthDetails(birthDetails)
  }, [birthDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBirthDetails({ ...birthDetails, [name]: value }
    )
  };
  const searchFather = () => {
    setIndivSearch("father");

  }

  const searchMother = () => {
    setIndivSearch("mother");

  }


  const setSelectedIndividualHandler = (...props) => {
    console.log("Person Selected", props[0]);
    if (indivSearch==="father") {
      setFather(props[0]);
      setBirthDetails({ ...birthDetails, father: father });
      setFatherName(props[0].name.firstName + " " + props[0].name.lastName);
    }
    else if (indivSearch === "mother"){
      setMother(props[0]);
      setBirthDetails({ ...birthDetails, mother: mother });
      setMotherName(props[0].name.firstName + " " + props[0].name.lastName);
    }

    else 
      console.log("Unexpected Indiv Search", indivSearch);
    
    setIndivSearch(null);
    
    
  }


  return (
    <div >
      <div class='card'>
        <div class='card-body'>
          <h5 class="card-title">Birth</h5>

          <div class="form-group row">
            <div class="col">
              <input class="form-control" type="date" value={birthDetails.dateOfBirth} id="dateOfBirth" placeholder="Date of Birth" onChange={handleInputChange} name='dateOfBirth' />
            </div>
            <div class="col">
              <input type="text" readOnly id="father" class="form-control" required placeholder="Father" value={fatherName} onChange={handleInputChange} name='father' />
              <Search onClick={searchFather} />
            </div>
            <div class="col">
              <input type="text" readOnly id="mother" class="form-control" required placeholder="Mother" value={motherName} onChange={handleInputChange} name='mother' />
              <Search onClick={searchMother} />
            </div>
            <div class="col">
              <input type="text" id="placeOfBirth" class="form-control" required placeholder="Place Of Birth" value={birthDetails.placeOfBirth} onChange={handleInputChange} name='placeOfBirth' />
            </div>
            <div class="col">
              {indivSearch  && <SearchIndividual setSelectedIndividual={setSelectedIndividualHandler} />}
            </div>
          </div>
        </div>
      </div>

 
    </div>
  )
}

export default Birth;