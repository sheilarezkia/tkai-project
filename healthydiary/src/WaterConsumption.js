import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

 
class WaterConsumption extends Component {
  constructor(props) {
    super();
    this.state = { amount: 0, startDate: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    var finalDate = this.state.startDate.getFullYear() + "-"+ parseInt(this.state.startDate.getMonth()+1) +"-"+this.state.startDate.getDate();

    axios.post(`http://localhost:8082/"/addIntakeData`, { 
      'date': finalDate,
      'amount': this.state.weight
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response)
      });
   
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value })
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
    return (
      <div>
        {/* <h2 onClick={() => this.handlePencet()}>STUFF</h2> */}
        <div className="form">
          <p className="attribute">Date</p>
          <DatePicker className="date-picker"
            dateFormat="yyyy-dd-MM"
            showPopperArrow={false}
            selected={this.state.startDate}
            onChange={this.handleChange}
            name='sartDate'/>
        </div>
        <div className="form">
          <p className="attribute">Amount</p>
          <input className="weight" type='text' name='weight' onChange={this.handleAmountChange}></input>
          <p className="satuan">ml</p>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}
 
export default WaterConsumption;