package com.healthdiary.foodtracker.service;

import com.healthdiary.foodtracker.model.FoodTracker;
import com.healthdiary.foodtracker.repository.FoodTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type.Int;

@Service
public class FoodTrackerService implements FoodTrackerServiceInterface {
    @Autowired
    private FoodTrackerRepository repository;


    @Override
    public List<FoodTracker> findAll() {
        List<FoodTracker> allData = repository.findAll();

        return allData;
    }

    @Override
    public FoodTracker saveFoodData(String date, String foodname, String calory, String recipe) {
        try {
            Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse(date);
            java.sql.Date sqlDate = new java.sql.Date(date1.getTime());
            Long cal = Long.parseLong(calory);
            FoodTracker foodTracker = new FoodTracker(sqlDate, foodname, cal, recipe);
            return repository.save(foodTracker);
        } catch (ParseException e) {
            return null;
        }
    }
}
