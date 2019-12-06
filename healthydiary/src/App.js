import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import WeightTracker from "./WeightTracker";
import FoodDiary from "./FoodDiary";
import WaterConsumption from "./WaterConsumption";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="page-title center">Health Diary</h1>
          <h1 className="page-title center">Health Diary</h1>
          <div className="card">
            <div className="header">
              <NavLink to="/weight" className="item">Weight Tracker</NavLink>
              <NavLink to="/food" className="item">Food Diary</NavLink>
              <NavLink to="/water" className="item">Water Consumption</NavLink>
            </div>
            <div className="content">
              <Route path="/weight" component={WeightTracker}/>
              <Route path="/food" component={FoodDiary}/>
              <Route path="/water" component={WaterConsumption}/>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;