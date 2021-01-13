import React, { useState, useEffect } from 'react';

const Death = (props) => {
  const initialDeathDetails = {
    dateOfDeath: '',
    placeOfDeath: ''
  };
  const [deathDetails, setDeathDetails] = useState(initialDeathDetails);
  useEffect(() => {
    props.onAddDeathDetails(deathDetails)
  }, [deathDetails])
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setDeathDetails({ ...deathDetails, [name]: value }
    )
  };

  return (
    <div>
      <div class='card'>
        <div class='card-body'>
          <h5 class='card-title'>Death</h5>
          <div class="form-group row">
            <div class="col">
              <input class="form-control" type="date" value={deathDetails.dateOfDeath} id="dateofDeath" placeholder="Date of Death" onChange={handleInputChange} name='dateOfDeath' />
            </div>
            <div class="col">
              <input type="text" id="placeOfDeath" class="form-control" placeholder="Place" value={deathDetails.placeOfDeath} onChange={handleInputChange} name='placeOfDeath' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Death;