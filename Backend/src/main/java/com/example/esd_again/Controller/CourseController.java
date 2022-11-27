package com.example.esd_again.Controller;

import com.example.esd_again.Bean.Course;
import com.example.esd_again.Bean.Student;
import com.example.esd_again.DAO.CourseDAO;
import com.example.esd_again.DAO.DAOImplementation.CourseDAOImpl;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.hibernate.usertype.CompositeUserType;
import org.json.JSONArray;
import org.json.JSONObject;

import java.net.URISyntaxException;
import java.util.List;

@Path("/course")
public class CourseController {
    CourseDAO course = new CourseDAOImpl();

    @GET
    @Path("/get/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCoursesByFaculty(@PathParam("id") String id) throws URISyntaxException {
        System.out.println("ASD" + id);
        List<Course> courses = course.getAllCourses(Integer.parseInt(id));
        if (courses != null) {
            JSONArray jsonNames = new JSONArray();

            for(Course course : courses){
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("id",course.getId());
                jsonObject.put("name",course.getName());
                jsonNames.put(jsonObject);
            }

            return Response.ok().entity(jsonNames.toString()).build();
        } else{
            System.out.println("Courses is NULL");
            return Response.status(203).build();
        }
    }

    @GET
    @Path("/getstudents/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getStudents(@PathParam("id") String id) throws URISyntaxException {
        List<Student> students=course.getStudentByCourse(Integer.parseInt(id));
        if (students != null) {
            JSONArray jsonNames = new JSONArray();

            for(Student student : students){
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("rollnumber",student.getRollnumber());
                jsonObject.put("name",student.getFirstName());
                jsonObject.put("email",student.getEmail());
                jsonObject.put("cgpa",student.getCgpa());
                jsonObject.put("totalCredits",student.getTotalCredits());
                jsonObject.put("graduationYear",student.getGraduationYear());
                jsonNames.put(jsonObject);
            }

            return Response.ok().entity(jsonNames.toString()).build();
        } else{
            System.out.println("Courses is NULL");
            return Response.status(203).build();
        }
    }



}
