package com.healthtracker.waterdiary.service;

import com.healthtracker.waterdiary.model.DailyWaterIntake;
import com.healthtracker.waterdiary.model.WaterIntake;

import java.util.List;

public interface IWaterIntakeSvc {
    List<WaterIntake> findAll();

    List<DailyWaterIntake> findDailyIntake();

    WaterIntake saveIntakeData(String date, String amount);
}
