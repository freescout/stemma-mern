import React, { useState, useEffect } from 'react';
import { Search } from 'react-bootstrap-icons';

import SearchIndividual from '../SearchIndividual.js';

const Wedding = (props) => {
  const initialWeddingDetails = {
    dateOfWedding: '',
    partner: '',
    placeOfWedding: ''
  }

  const [weddingDetails, setWeddingDetails] = useState(initialWeddingDetails);
  const [isSearching, setSearching] = useState(false);
  const [partner, setPartner] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    props.onAddWeddingDetails(weddingDetails)
  }, [weddingDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const handleInputChange = event => {
    const { name, value } = event.target;
    setWeddingDetails({ ...weddingDetails, [name]: value }
    )
  };

  const searchIndividual = () => {
    console.log('reached searchIndiv', weddingDetails.partner);
    setSearching(!isSearching);

  }

  const setSelectedIndividualHandler = (...props) => {
    //setWeddingDetails({ ...weddingDetails, partner: props[0]})
    console.log("Partner Selected", props[0]);
    setPartner(props[0]);
    setName(props[0].name.firstName + " " + props[0].name.lastName);
    setWeddingDetails({...weddingDetails, partner: partner});
  }

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Wedding</h5>
          <div class="col">
            <input type="text" readOnly value={name} id="partner" placeholder="Enter Partner's name and search" onChange={handleInputChange} name='partner'/>
            <Search onClick={searchIndividual} />
          </div>
          <div class="col">
            <input type="date" value={weddingDetails.dateOfWedding} id="dateOfWedding" placeholder="Date Of Wedding" onChange={handleInputChange} name='dateOfWedding'/>
          </div>
          <div class="col">
            <input type="text" id="placeOfWedding" value={weddingDetails.placeOfWedding} placeholder="Place of Wedding" onChange={handleInputChange} name='placeOfWedding' />
          </div>
          <div class="col">
            {isSearching && <SearchIndividual setSelectedIndividual={setSelectedIndividualHandler} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wedding;