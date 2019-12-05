import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class WeightTracker extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { pencet: 0, coba: "" };
  // }
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  // handlePencet() {
  //   this.setState({ coba: this.state.coba + " kepencet " });
  // }

  render() {
    // const { coba } = this.state
  
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
          <p className="attribute">Weight</p>
          <input className="weight"></input>
          <p className="satuan">kg</p>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default WeightTracker;