package com.healthdiary.weigthtracker.service;

import com.healthdiary.weigthtracker.model.WeightTracker;

import java.util.List;

public interface WeightTrackerServiceInterface {
    List<WeightTracker> findAll();

    WeightTracker saveWeightData(String date, String weight);
}
