import React, { Component } from "react";
import IndividualDataService from "../services/IndividualService";
import { Link } from "react-router-dom";

export default class MembersList extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchFirstName = this.onChangeSearchFirstName.bind(this);
    //this.searchFirstName = this.searchFirstName.bind(this);
    
    this.onChangeSearchLastName = this.onChangeSearchLastName.bind(this);
    this.searchName = this.searchName.bind(this);

    this.setActiveMember = this.setActiveMember.bind(this);
    this.retrieveMembers = this.retrieveMembers.bind(this);
    this.removeAllMembers = this.removeAllMembers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = {
      members: [],
      currentMember: null,
      currentIndex: -1,

      searchFirstName: "",
      searchLastName: ""


    };
  }
  componentDidMount() {
    //this.retrieveMembers();
  }

  onChangeSearchFirstName(e) {
    const searchFirstName = e.target.value;
    this.setState({
      searchFirstName: searchFirstName
    });
  }

/*   searchFirstName() {
    IndividualDataService.findByFirstName("Mathew")
      .then(response => {
        this.setState({
          members: response.data
        });
        console.log("Printing response searchbyFirstName");
        console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      })
  } */

  onChangeSearchLastName(e) {
    const searchLastName = e.target.value;

    this.setState({
      searchLastName: searchLastName
    });
  }

  searchName() {
    console.log("Searchname calling", this.state.searchFirstName + this.state.searchLastName);
    IndividualDataService.findByName(this.state.searchFirstName,this.state.searchLastName)
      .then(response => {
        this.setState({
          members: response.data
        });
        console.log("Printing response searchName");
        console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      })
  }

  setActiveMember(member, index)  {
    this.setState({
      currentMember: member,
      currentIndex: index
    });
  }

  retrieveMembers() {
    IndividualDataService.getAll()
      .then(response => {
        this.setState({
          members: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }

  removeAllMembers() {
    IndividualDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      })
  }

  refreshList() {
    this.retrieveMembers();
    this.setState({
      currentMember: null,
      currentIndex: -1
    })
  }
  

  render() {
    const { searchFirstName, searchLastName, members, currentMember, currentIndex} = this.state;
    return(
      <div className="list row">
{/*         <div className="col-md--8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by first Name"
              value={searchFirstName}
              onChange={this.onChangeSearchFirstName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchFirstName}
              >
                Search
              </button>
            </div>
          </div>
        </div> */}
        <div className="col-md--8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by first Name"
              value={searchFirstName}
              onChange={this.onChangeSearchFirstName}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Search by Last Name"
              value={searchLastName}
              onChange={this.onChangeSearchLastName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Members List</h4>
          <ul className="list-group">
            {members &&
              members.map((member, index) => (
                
                <li
                  className={"list-group-item" + (index === currentIndex ? "active" : "")}
                  onClick={() => this.setActiveMember(member, index)}
                  key={index}
                >
                  {member.name.firstName} {" "} {member.name.lastName}
                </li>
              ))}
            </ul>
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllMembers}
            >
              Remove All
            </button>
        </div>
        <div className="col-md-6">
          {currentMember ? (
            <div>
              <h4>Member</h4>
              <div>
                <label>
                  <strong>First Name:</strong>
                </label>{" "}
                {currentMember.fname}
              </div>
              <div>
                <label>
                  <strong>Last Name:</strong>
                </label> {" "}
                {currentMember.lastName}
              </div>
              <Link
                to={"/members/" + currentMember.id}
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a member</p>
            </div>

          )}
        </div>
      </div>
    )
  }
}