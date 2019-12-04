package com.healthdiary.weigthtracker.repository;

import com.healthdiary.weigthtracker.model.WeightTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightTrackerRepository extends JpaRepository<WeightTracker, Long> {
}
