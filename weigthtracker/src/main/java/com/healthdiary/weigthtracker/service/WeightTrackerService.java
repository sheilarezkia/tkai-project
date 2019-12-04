package com.healthdiary.weigthtracker.service;

import com.healthdiary.weigthtracker.model.WeightTracker;
import com.healthdiary.weigthtracker.repository.WeightTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class WeightTrackerService implements WeightTrackerServiceInterface {

    @Autowired
    private WeightTrackerRepository repository;

    @Override
    public List<WeightTracker> findAll() {
        List<WeightTracker> allData = repository.findAll();

        return allData;
    }

    @Override
    public WeightTracker saveWeightData(String date, String weight) {
        try {
            Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse(date);
            java.sql.Date sqlDate = new java.sql.Date(date1.getTime());
            Long weight1 = Long.parseLong(weight);
            WeightTracker weightTracker = new WeightTracker(sqlDate, weight1);
            return repository.save(weightTracker);
        } catch (ParseException e) {
            return null;
        }
    }
}
