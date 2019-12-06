import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 
class WaterConsumption extends Component {
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
            showPopperArrow={false}
            selected={this.state.startDate}
            onChange={this.handleChange}/>
        </div>
        <div className="form">
          <p className="attribute">Amount</p>
          <input className="weight"></input>
          <p className="satuan">L</p>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}
 
export default WaterConsumption;