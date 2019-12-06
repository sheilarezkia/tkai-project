import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


class WeightTracker extends Component {

  constructor(props) {
    super();
    this.state = { weight: 0, startDate: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    var finalDate = this.state.startDate.getFullYear() + "-"+ parseInt(this.state.startDate.getMonth()+1) +"-"+this.state.startDate.getDate();

    axios.post(`http://localhost:8082/addWeightTracker`, { 
      'date': finalDate,
      'weight': this.state.weight
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
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
    // const { date } = this.state

    return (
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
    );
  }
}

export default WeightTracker;