package com.healthtracker.waterdiary.service;

import com.healthtracker.waterdiary.model.DailyWaterIntake;
import com.healthtracker.waterdiary.model.WaterIntake;
import com.healthtracker.waterdiary.repository.WaterIntakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class WaterIntakeService implements IWaterIntakeSvc{

    @Autowired
    private WaterIntakeRepository repository;


    @Override
    public List<WaterIntake> findAll() {
        List<WaterIntake> allData = repository.findAll();

        return allData;
    }

    @Override
    public List<DailyWaterIntake> findDailyIntake() {
        List<DailyWaterIntake> dailyIntake = repository.findDailyIntake();
        return dailyIntake;
    }

    @Override
    public WaterIntake saveIntakeData(String date, String amount) {
        try {
            Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse(date);
            java.sql.Date sqlDate = new java.sql.Date(date1.getTime());
            Long waterAmount = Long.parseLong(amount);
            WaterIntake waterIntake = new WaterIntake(sqlDate, waterAmount);
            return repository.save(waterIntake);
        } catch (ParseException e) {
            return null;
        }
    }
}
