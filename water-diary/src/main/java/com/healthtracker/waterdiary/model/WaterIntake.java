package com.healthtracker.waterdiary.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name= "waterintake")
public class WaterIntake {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "timest")
    private Date date;

    @Column(name = "millilitres")
    private Long amount;

    public WaterIntake(Date date, Long amount) {
        this.date = date;
        this.amount = amount;
    }

    public WaterIntake() {
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public Long getAmount() {
        return amount;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }
}
