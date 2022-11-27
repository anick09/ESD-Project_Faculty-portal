package com.example.esd_again.Controller;

import com.example.esd_again.Bean.Faculty;
import com.example.esd_again.DAO.DAOImplementation.FacultyDAOImpl;
import com.example.esd_again.DAO.FacultyDAO;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.json.JSONArray;

import java.net.URISyntaxException;

    @Path("/faculty")
    public class FacultyController {
        FacultyDAO faculty= new FacultyDAOImpl();
        @POST
        @Path("/verify")
        @Produces(MediaType.APPLICATION_JSON)
        @Consumes(MediaType.APPLICATION_JSON)
        public Response verifyFaculty(Faculty f) throws URISyntaxException {
            Integer facultyId = faculty.verify(f);
            if(facultyId != null && facultyId!=-1){

                return Response.ok(facultyId).build();
            }else{
                return Response.status(400).build();
            }
        }
        @GET
        @Path("/getschedule/{id}/values")
        @Produces(MediaType.APPLICATION_JSON)
        public Response getSchedule(@PathParam("id") int id, @QueryParam("year") int year, @QueryParam("term") int term) throws URISyntaxException {
            System.out.println("Controller facultyId : "+id);
            System.out.println("Controller year : "+year);
            System.out.println("Controller term : "+term);
            GetSchedule g=new GetSchedule();
            JSONArray jsonArray = g.getCourseSchedule(id,year,term);
            if(jsonArray != null){

                System.out.println(jsonArray.toString());
                //System.out.println("controller : "+Arrays.toString(courseArray));
                return Response.ok().entity(jsonArray.toString()).build();
            }else{
                return Response.status(400).build();
            }
        }

}
