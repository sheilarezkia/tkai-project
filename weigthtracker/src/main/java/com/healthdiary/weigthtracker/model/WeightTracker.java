package com.healthdiary.weigthtracker.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "weighttracker")
public class WeightTracker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "timest", nullable = false, unique = true)
    private Date date;

    @Column(name = "weight", nullable = false)
    private Long weight;

    public WeightTracker(Date date, Long weight) {
        this.date = date;
        this.weight = weight;
    }

    public WeightTracker() {
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getWeight() {
        return weight;
    }

    public void setWeight(Long weight) {
        this.weight = weight;
    }
}
