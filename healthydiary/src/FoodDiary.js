import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class FoodDiary extends Component {
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
            <div className="display">
                {/* <h2 onClick={() => this.handlePencet()}>STUFF</h2> */}
                <div className="form">
                    <p className="attribute">Date</p>
                    <DatePicker className="date-picker"
                        showPopperArrow={false}
                        selected={this.state.startDate}
                        onChange={this.handleChange}/>
                </div>
                <div className="form">
                    <p className="attribute">Food Name</p>
                    <input></input>
                </div>
                <div className="form">
                    <p className="attribute">Calories</p>
                    <input className="weight"></input>
                    <p className="satuan">Kcal</p>
                </div>
                <div className="form">
                    <p className="attribute">Recipe</p>
                    <textarea rows="5" cols="55"></textarea>
                </div>
                <button className="margin-none">Submit</button>
            </div>
            
        );
    }
}

export default FoodDiary;