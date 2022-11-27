package com.example.esd_again.Bean;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import com.example.esd_again.Bean.Course;
import java.util.*;

@Entity
public class Specialisation {
    @Id
    @Column(name="specialisation_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String code;

    private String description;

    private int year;

    private int credit;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "spl")
    @JsonBackReference
    private List<Course> courses;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public Specialisation(int id, String name, String code, String description, int year, int credit, List<Course> courses) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.year = year;
        this.credit = credit;
        this.courses = courses;
    }

    public Specialisation() {
    }
}
