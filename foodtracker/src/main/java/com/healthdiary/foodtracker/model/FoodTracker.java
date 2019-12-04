package com.healthdiary.foodtracker.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "foodtracker")
public class FoodTracker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "timest", nullable = false)
    private Date date;

    @Column(name = "foodname", nullable = false)
    private String foodname;

    @Column(name = "calory")
    private Long calory;

    @Column(name = "recipe")
    private String recipe;

    public FoodTracker(Date date, String foodname, Long calory, String recipe) {
        this.date = date;
        this.foodname = foodname;
        this.calory = calory;
        this.recipe = recipe;
    }

    public FoodTracker() {
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getFoodname() {
        return foodname;
    }

    public void setFoodname(String foodname) {
        this.foodname = foodname;
    }

    public Long getCalory() {
        return calory;
    }

    public void setCalory(Long calory) {
        this.calory = calory;
    }

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }
}
