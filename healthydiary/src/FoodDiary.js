import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class FoodDiary extends Component {
  constructor(props) {
    super();
    this.state = { foodname: "", startDate: null, calory: 0, recipe: "", listRecipe: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // lifecycle
  componentDidMount() {
    this.getAllRecipe();
  }

  getAllRecipe() {
    axios.get(`http://localhost:8081/foodTrackerRecs`)
      .then(res => {
        this.setState({ listRecipe: res.data })
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

    axios.post(`http://localhost:8081/addFoodTracker`, {
      'date': finalDate,
      'foodname': this.state.foodname,
      'calory': this.state.calory,
      'recipe': this.state.recipe
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.getAllRecipe();
        this.refresh();
      })
      .catch(error => {
        console.log(error.response)
      });

  }

  handleMenuChange = (event) => {
    this.setState({ foodname: event.target.value })
  }

  handleCaloryChange = (event) => {
    this.setState({ calory: event.target.value })
  }

  handleRecipeChange = (event) => {
    this.setState({ recipe: event.target.value })
  }

  refresh() {
    this.setState({ foodname: "", startDate: null, calory: 0, recipe: "" })
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
  
    const { listRecipe } = this.state;
    const listItems = listRecipe.map((data) =>
      <React.Fragment>
        <div className="food-group">
          <li><b>Date : </b>{data.date}</li>
          <li><b>Food Name : </b>{data.foodname}</li>
          <li><b>Calory : </b>{data.calory}</li>
          <li><b>Recipe : </b>{data.recipe}</li>
        </div>
      </React.Fragment>
    );

    // if (listRecipe) {
    //   var last = listWeight[listWeight.length - 1];
    //   var finalDate = last.date.split("T");
    //   console.log(finalDate)
    //   dates += (finalDate[0]);
    //   weights += (last.weight + " Kg");

    // }

    return (
      <React.Fragment>
        <form className="display" onSubmit={this.handleSubmit}>
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
            <p className="attribute">Food Name</p>
            <input type='text' name='foodname' value={this.state.foodname} onChange={this.handleMenuChange}></input>
          </div>
          <div className="form">
            <p className="attribute">Calories</p>
            <input className="weight" type='text' name='calory' value={this.state.calory} onChange={this.handleCaloryChange}></input>
            <p className="satuan">Kcal</p>
          </div>
          <div className="form">
            <p className="attribute">Recipe</p>
            <textarea rows="5" cols="100" type='text' name='recipe' value={this.state.recipe} onChange={this.handleRecipeChange}></textarea>
          </div>
          <button className="margin-none">Submit</button>
        </form>
        <h3 className="center">Food Tracker</h3>
        <div className="report">
          <span>
            <p>{listItems}</p>
          </span>
        </div>
      </React.Fragment>

    );
  }
}

export default FoodDiary;