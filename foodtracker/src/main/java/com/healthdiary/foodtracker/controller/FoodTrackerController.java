package com.healthdiary.foodtracker.controller;

import com.healthdiary.foodtracker.model.FoodTracker;
import com.healthdiary.foodtracker.service.FoodTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Controller
public class FoodTrackerController {

    @Autowired
    private FoodTrackerService service;

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/foodTrackerRecs", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Collection<FoodTracker>> getAllRecords() {
        List<FoodTracker> record = service.findAll();
        return ResponseEntity.ok(record);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/addFoodTracker", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Object> addFood(@RequestBody Map<String, String> body) {
        FoodTracker newFoodTrack = service.saveFoodData(body.get("date"), body.get("foodname"), body.get("calory"), body.get("recipe"));
        return ResponseEntity.ok(newFoodTrack);
    }

}
