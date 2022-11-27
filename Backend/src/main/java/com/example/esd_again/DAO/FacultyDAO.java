package com.example.esd_again.DAO;

import com.example.esd_again.Bean.Course;
import com.example.esd_again.Bean.CouseSchedule;
import com.example.esd_again.Bean.Faculty;

import java.util.List;

public interface FacultyDAO {
    int verify(Faculty faculty);
    List<Course> getCousesbyFaculty(int id);

}
