import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';




class WeightTracker extends Component {

  constructor(props) {
    super();
    this.state = { weight: 0, startDate: null, listWeight: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // lifecycle
  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    var url = "http://"+window.location.hostname+":32082/weightTrackerRecs";
    console.log("the value of url : ", url);
    axios.get(url)
      .then(res => {
        this.setState({ listWeight: res.data })
        //  var currWeight = listWeight[listWeight.length-1]
        //  this.setState({ currWeight })

      })
      .catch(error => {
        console.log(error.response)
      });;
  }


  handleSubmit(event) {
    event.preventDefault();

    var finalDate = this.state.startDate.getFullYear() + "-" + parseInt(this.state.startDate.getMonth() + 1) + "-" + this.state.startDate.getDate();

    var url = "http://"+window.location.hostname+":32082/addWeightTracker";
    console.log("the value of url : ", url);
    axios.post(url, {
      'date': finalDate,
      'weight': this.state.weight
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getUsers();
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value })
  }

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    // const { coba } = this.state
    // const { weight } = this.state
    var dates = "";
    var weights = "";
    const { listWeight } = this.state;
    
    if (listWeight) {
      var last = listWeight[listWeight.length - 1];
      var finalDate = last.date.split("T");
      console.log(finalDate)
      dates += (finalDate[0]);
      weights += (last.weight + " Kg");

    }

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {/* <h2 onClick={() => this.handlePencet()}>STUFF</h2> */}
          <div className="form">
            <p className="attribute">Date</p>
            <DatePicker className="date-picker"
              dateFormat="yyyy-dd-MM"
              showPopperArrow={false}
              selected={this.state.startDate}
              onChange={this.handleChange}
              name='sartDate'
            />
          </div>
          <div className="form">
            <p className="attribute">Weight</p>
            <input className="weight" type='text' name='weight' onChange={this.handleWeightChange}></input>
            <p className="satuan">kg</p>
          </div>
          <button>Submit</button>
        </form>
        <h3 className="center">Weight Tracker</h3>
        <span className="display-inline">
          <p>Date : {dates}</p>
          <p>Current Weight : {weights}</p>
        </span>
        
        
      </React.Fragment>
    );
  }
}

export default WeightTracker;