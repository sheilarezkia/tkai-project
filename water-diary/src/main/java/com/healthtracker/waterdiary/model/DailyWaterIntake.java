package com.healthtracker.waterdiary.model;


import java.util.Date;

public class DailyWaterIntake {
    private Date date;
    private Long totalWaterMl;

    public DailyWaterIntake(Date date, Long totalWaterMl) {
        this.date = date;
        this.totalWaterMl = totalWaterMl;
    }

    public DailyWaterIntake() {
    }

    public Date getDate() {
        return date;
    }

    public Long getTotalWaterMl() {
        return totalWaterMl;
    }
}
