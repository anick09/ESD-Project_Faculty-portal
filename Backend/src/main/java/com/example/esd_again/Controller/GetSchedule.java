package com.example.esd_again.Controller;

import com.example.esd_again.Bean.Course;
import com.example.esd_again.Bean.CouseSchedule;
import com.example.esd_again.DAO.DAOImplementation.FacultyDAOImpl;
import com.example.esd_again.DAO.FacultyDAO;
import org.json.JSONArray;
import org.json.JSONObject;


import java.sql.Time;
import java.util.HashMap;
import java.util.List;

public class GetSchedule {
    public JSONArray getCourseSchedule(int facultyId, int year, int term){
        FacultyDAO g=new FacultyDAOImpl();
        List<Course> courses = g.getCousesbyFaculty(facultyId);
        String[][] schedule = new String[4][5];
        //Arrays.fill(schedule,"");
        HashMap<String,Integer> hashMap = new HashMap<>();
        hashMap.put("MON",0);
        hashMap.put("TUE",1);
        hashMap.put("WED",2);
        hashMap.put("THU",3);
        hashMap.put("FRI",4);
        for(int i=0;i<4;i++){
            for(int j=0;j<5;j++){
                schedule[i][j]="";
            }
        }
        for(Course course:courses){
            if(course.getTerm() == term && course.getYear() == year){
                List<CouseSchedule> courseSchedules = course.getSchedules();
                System.out.println("asd"+courseSchedules.size());
                for(CouseSchedule courseSchedule : courseSchedules){
                    Time time = courseSchedule.getTime();
                    String timeStr = time.toString();
                    switch(timeStr) {
                        case "09:00:00":
                            schedule[0][hashMap.get(courseSchedule.getDay())] = course.getName()+"("+courseSchedule.getBuilding()+","+courseSchedule.getRoom()+")"+" specialisation:"+course.getSpl().getCode();
                            break;
                        case "11:00:00":
                            schedule[1][hashMap.get(courseSchedule.getDay())] = course.getName()+"("+courseSchedule.getBuilding()+","+courseSchedule.getRoom()+")"+" specialisation:"+course.getSpl().getCode();
                            break;
                        case "14:00:00":
                            schedule[2][hashMap.get(courseSchedule.getDay())] = course.getName()+"("+courseSchedule.getBuilding()+","+courseSchedule.getRoom()+")"+" specialisation:"+course.getSpl().getCode();
                            break;
                        case "16:00:00":
                            schedule[3][hashMap.get(courseSchedule.getDay())] = course.getName()+"("+courseSchedule.getBuilding()+","+courseSchedule.getRoom()+")"+" specialisation:"+course.getSpl().getCode();
                            break;
                    }
                }
            }

        }

        JSONArray jsonArray = new JSONArray();
        JSONObject jsonObject;
        for(int i=0;i<4;i++){
            jsonObject = new JSONObject();
            jsonObject.put("MON",schedule[i][0]);
            jsonObject.put("TUE",schedule[i][1]);
            jsonObject.put("WED",schedule[i][2]);
            jsonObject.put("THU",schedule[i][3]);
            jsonObject.put("FRI",schedule[i][4]);
            jsonArray.put(jsonObject);
        }
        return jsonArray;
    }
}