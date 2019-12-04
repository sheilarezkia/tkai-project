package com.healthtracker.waterdiary.repository;

import com.healthtracker.waterdiary.model.DailyWaterIntake;
import com.healthtracker.waterdiary.model.WaterIntake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface WaterIntakeRepository extends JpaRepository<WaterIntake, Long> {

    @Query("SELECT " +
    "new com.healthtracker.waterdiary.model.DailyWaterIntake(record.date, SUM(record.amount))" +
    "FROM WaterIntake record " +
    "GROUP BY " + "record.date")
    List<DailyWaterIntake> findDailyIntake();
}
