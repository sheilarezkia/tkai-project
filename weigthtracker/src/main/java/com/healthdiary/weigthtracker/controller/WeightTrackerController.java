package com.healthdiary.weigthtracker.controller;

import com.healthdiary.weigthtracker.model.WeightTracker;
import com.healthdiary.weigthtracker.service.WeightTrackerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Controller
public class WeightTrackerController {

    @Autowired
    private WeightTrackerService service;

    @GetMapping(value = "/weightTrackerRecs", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Collection<WeightTracker>> getAllRecords() {
        List<WeightTracker> record = service.findAll();
        return ResponseEntity.ok(record);
    }

    @PostMapping(value = "/addWeightTracker", produces = "application/json")
    @ResponseBody
    public  ResponseEntity<Object> addWeight(@RequestBody Map<String, String> body) {
        WeightTracker weightTracker = service.saveWeightData(body.get("date"), body.get("weight"));
        return ResponseEntity.ok(weightTracker);
    }

}
