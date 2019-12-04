package com.healthtracker.waterdiary.controller;

import com.healthtracker.waterdiary.model.DailyWaterIntake;
import com.healthtracker.waterdiary.model.WaterIntake;
import com.healthtracker.waterdiary.service.WaterIntakeService;
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
public class WaterDiaryController {
    @Autowired
    private WaterIntakeService service;

    @GetMapping(value = "/waterIntakeRecs", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Collection<WaterIntake>> getAllRecords() {
        List<WaterIntake> recs = service.findAll();
        return ResponseEntity.ok(recs);
    }

    @GetMapping(value = "/dailyIntake", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Collection<DailyWaterIntake>> getDailyIntake() {
        List<DailyWaterIntake> dailyIntake = service.findDailyIntake();
        return ResponseEntity.ok(dailyIntake);
    }

    @PostMapping(value = "/addIntakeData", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Object> addWaterIntake(@RequestBody Map<String, String> body) {
        WaterIntake newIntake = service.saveIntakeData(body.get("date"), body.get("amount"));
        return ResponseEntity.ok(newIntake);
    }
}
