import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'


const BasicDetails = React.memo (props => {

  const initialBasicDetails = {
    firstName: '',
    middleName: '',
    lastName: '',
    nickName: '',
    gender: 'other'
  };
  const [basicDetails, setBasicDetails] = useState(initialBasicDetails);

  useEffect(() => { 
    props.onAddBasicDetails(basicDetails) 
  }, [basicDetails]) //add the state in dependency array and this useEffect will run whenever state changes//

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBasicDetails({ ...basicDetails, [name]: value }
  )};

    return (
      <div>
        <div class="form-row mb-4">
          <div class="col">
            <input type="text" id="firstName" class="form-control" required placeholder="First name" value={basicDetails.firstName} onChange={handleInputChange} name='firstName' />
          </div>
          <div class="col">
            <input type="text" id="middleName" class="form-control" placeholder="Middle Name" value={basicDetails.middleName} onChange={handleInputChange} name='middleName' />
          </div>
          <div class="col">
            <input type="text" id="lastName" class="form-control" required placeholder="Last Name" value={basicDetails.lastName} onChange={handleInputChange} name='lastName' />
          </div>
          <div class="col">
            <input type="text" id="nickName" class="form-control" placeholder="Nick Name" value={basicDetails.nickName} onChange={handleInputChange} name='nickName' />
          </div>
        </div>
        <div> Gender
          <div class="form-check form-check-inline">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={basicDetails.gender === "male"}
                onChange={handleInputChange}
                className="form-check-input"
              />
                  Male
                </label>
          </div>
          <div class="form-check form-check-inline">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={basicDetails.gender === "female"}
                onChange={handleInputChange}
                className="form-check-input"
              />
                  Female
                </label>
          </div>
          <div class="form-check form-check-inline">
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={basicDetails.gender === "other"}
                onChange={handleInputChange}
                className="form-check-input"
              />
                  Other
                </label>
          </div>
        </div>
        {/*         <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
          </div> */}
        {/*           <div class="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01" onChange={this.onChangeFileHandler} />
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div> */}
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Choose file" />
          </Form.Group>
        </Form>
        {/* </div> */}
      </div>
    )
})


export default BasicDetails;