import React, { Component } from 'react';

export default class Partner extends Component {
  constructor(props) {
    super(props);
    this.onChangeRelationship = this.onChangeRelationship.bind(this);
    this.onChangePartnerName = this.onChangePartnerName.bind(this);
    this.createPartner = this.createPartner.bind(this);
    this.sendPartnerDetails = this.sendPartnerDetails.bind(this); 
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);


    this.state = {
      partner : '',
      name: '',
      status: '',
      from: '',
      to: '',
      reason: '',
    }
    
  }

  createPartner = () => {
    console.log("Create Partner");
    let partner = {
      name: this.state.name,
      status: this.state.status,
      to: this.state.to,
      from: this.state.from,
      reason: this.state.reason
    }

    this.setState({
      partner: partner
    },
      this.props.partnerDetails(partner)
    );
  }

  sendPartnerDetails = () => {
    this.props.partnerDetails(this.state.partner);
  } 

  onChangePartnerName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onChangeTo = (e) => {
    this.setState({
      to: e.target.value
    })
  }

  onChangeFrom = (e) => {
    this.setState({
      from: e.target.value
    })
  }

  onChangeRelationship = (e) => {
    this.setState({
      status: e.target.value
    },
      this.sendPartnersDetails
    );
    console.log(e.target.value)
    console.log(this.state);
  }
  render() {
    return(
      <div>
        <input type="text" id="partnerName" class="form-control" required placeholder="Name" value={this.state.partnerName} onChange={this.onChangePartnerName} name='partnerName' />
        <div class="form-check form-check-inline">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="married"
              checked={this.state.status === "married"}
              onChange={this.onChangeRelationship}
              className="form-check-input"
            />
            Married
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="livingTogether"
              checked={this.state.status === "livingTogether"}
              onChange={this.onChangeRelationship}
              className="form-check-input"
            />
            Living Together
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="other"
              checked={this.state.status === "other"}
              onChange={this.onChangeRelationship}
              className="form-check-input"
            />
            Other
          </label>
        </div>
        <div class="form-group row">
          <div class="col"> From
            <input class="form-control" type="date" value={this.state.from} id="from" placeholder="From" onChange={this.onChangeFrom} />
          </div>
          <div class="col"> To
            <input class="form-control" type="date" value={this.state.to} id="to" placeholder="To" onChange={this.onChangeTo} />
          </div>
        </div>
        <button type="button" class="btn btn-light" onClick={this.createPartner}>OK</button>
      </div>
    )
  }
}