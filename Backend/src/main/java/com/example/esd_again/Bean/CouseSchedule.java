package com.example.esd_again.Bean;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "course_schedule")
public class CouseSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Time time;

    @Column(nullable = false)
    private String day;

    @Column(nullable = false)
    private Integer room;

    private String building;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    private Course course;

    public CouseSchedule() {
    }

    public CouseSchedule(Time time, String day, Integer room, String building) {
        this.time = time;
        this.day = day;
        this.room = room;
        this.building = building;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Integer getRoom() {
        return room;
    }

    public void setRoom(Integer room) {
        this.room = room;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}