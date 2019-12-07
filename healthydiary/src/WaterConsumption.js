import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


class WaterConsumption extends Component {
  constructor(props) {
    super();
    this.state = { amount: 0, startDate: null, listAmount: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getAmount();
  }

  getAmount() {
    var url = "http://"+window.location.hostname+":32080/waterIntakeRecs";
    console.log("the value of url : ", url);
    axios.get(url)
      .then(res => {
        this.setState({ listAmount: res.data })
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

    var url = "http://"+window.location.hostname+":32080/addIntakeData";
    console.log("the value of url : ", url);
    axios.post(url, {
      'date': finalDate,
      'amount': this.state.amount
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getAmount();
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
    const { listAmount } = this.state;
    const listWater = listAmount.map((amt) =>
      <React.Fragment>
        <div className="food-group">
          <li><b>Date : </b>{amt.date}</li>
          <li><b>Amount : </b>{amt.amount}</li>
        </div>
      </React.Fragment>
    );

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
              name='sartDate' />
          </div>
          <div className="form">
            <p className="attribute">Amount</p>
            <input className="weight" type='text' name='amount' onChange={this.handleAmountChange}></input>
            <p className="satuan">ml</p>
          </div>
          <button>Submit</button>
        </form>
        <h3 className="center">Water Tracker</h3>
        <div className="report">
          <span>
            <p>{listWater}</p>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default WaterConsumption;