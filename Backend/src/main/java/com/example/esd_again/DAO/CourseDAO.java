package com.example.esd_again.DAO;

import com.example.esd_again.Bean.Course;
import com.example.esd_again.Bean.CouseSchedule;
import com.example.esd_again.Bean.Student;

import java.util.List;

public interface CourseDAO {
    List<Course> getAllCourses(int id);
    List<Student> getStudentByCourse(int id);
    List<CouseSchedule> getSchedule(int id);
}
