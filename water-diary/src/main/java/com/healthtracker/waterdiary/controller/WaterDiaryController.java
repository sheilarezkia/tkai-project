package com.healthtracker.waterdiary.controller;

import com.healthtracker.waterdiary.model.DailyWaterIntake;
import com.healthtracker.waterdiary.model.WaterIntake;
import com.healthtracker.waterdiary.service.WaterIntakeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Controller
public class WaterDiaryController {
    @Autowired
    private WaterIntakeService service;
    @CrossOrigin(origins = "*")
    @GetMapping(value = "/waterIntakeRecs", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Collection<WaterIntake>> getAllRecords() {
        List<WaterIntake> recs = service.findAll();
        return ResponseEntity.ok(recs);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/dailyIntake", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Collection<DailyWaterIntake>> getDailyIntake() {
        List<DailyWaterIntake> dailyIntake = service.findDailyIntake();
        return ResponseEntity.ok(dailyIntake);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/addIntakeData", produces = "application/json")
    @ResponseBody
    public ResponseEntity<Object> addWaterIntake(@RequestBody Map<String, String> body) {
        WaterIntake newIntake = service.saveIntakeData(body.get("date"), body.get("amount"));
        return ResponseEntity.ok(newIntake);
    }
}
