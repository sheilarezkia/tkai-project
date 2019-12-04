package com.healthdiary.foodtracker.service;

import com.healthdiary.foodtracker.model.FoodTracker;

import java.util.List;

public interface FoodTrackerServiceInterface {

    List<FoodTracker> findAll();

    FoodTracker saveFoodData(String date, String foodname, String calory, String recipe);
}
