package com.healthdiary.foodtracker.repository;

import com.healthdiary.foodtracker.model.FoodTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodTrackerRepository extends JpaRepository<FoodTracker, Long> {
}
