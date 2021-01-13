import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class Members extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,

    }
  }

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  }

  sendMember = (id) => {
    console.log("Id", id);
    this.props.getMember(id);
  }


  render() {
    console.log("At members", this.props.members, this.props.open);
    return(
      
      <div>
        {this.props.open ? (
        <Button variant="primary" onClick={this.openModal}>
          Show Members
        </Button>) : null
      }
        
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Select Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="card" >
              <ul class="list-group list-group-flush">
                {this.props.members.map((member) => {
                  console.log(member.name.firstName);
                  return (
                    <li class="list-group-item" onClick={this.sendMember(member._id)} key={member._id}>{member.name.firstName} {member.name.lastName} ({member.name.nickName})</li>
                  )
                })}

              </ul>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
          </Button>
            <Button variant="primary" onClick={this.closeModal}>
              OK
          </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}