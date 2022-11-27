package com.example.esd_again.Bean;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Course {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int capacity;

    @Column
    private String course_code;

    @Column
    private int credits;

    @Column
    private String description;

    @Column
    private String name;

    @Column
    private int term;

    @Column
    private int year;

    @ManyToOne
    @JsonManagedReference
    private Faculty facultyId;

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Student> students;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "course")
    @JsonManagedReference
    private List<CouseSchedule> schedules;

    @ManyToOne()
    @JsonManagedReference
    private Specialisation spl;

    public Course() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getCourse_code() {
        return course_code;
    }

    public void setCourse_code(String course_code) {
        this.course_code = course_code;
    }

    public int getCredits() {
        return credits;
    }

    public void setCredits(int credits) {
        this.credits = credits;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTerm() {
        return term;
    }

    public void setTerm(int term) {
        this.term = term;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Faculty getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(Faculty facultyId) {
        this.facultyId = facultyId;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public List<CouseSchedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<CouseSchedule> schedules) {
        this.schedules = schedules;
    }

    public Course(int id, int capacity, String course_code, int credits, String description, String name, int term, int year, Faculty facultyId, List<Student> students, List<CouseSchedule> schedules, Specialisation spl) {
        this.id = id;
        this.capacity = capacity;
        this.course_code = course_code;
        this.credits = credits;
        this.description = description;
        this.name = name;
        this.term = term;
        this.year = year;
        this.facultyId = facultyId;
        this.students = students;
        this.schedules = schedules;
        this.spl = spl;
    }

    public Specialisation getSpl() {
        return spl;
    }

    public void setSpl(Specialisation spl) {
        this.spl = spl;
    }
}
