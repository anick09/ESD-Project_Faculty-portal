package com.example.esd_again.DAO.DAOImplementation;

import com.example.esd_again.Bean.Course;
import com.example.esd_again.Bean.CouseSchedule;
import com.example.esd_again.Bean.Faculty;
import com.example.esd_again.Bean.Student;
import com.example.esd_again.DAO.CourseDAO;
import com.example.esd_again.Util.SessionUtil;
import jakarta.persistence.Query;
import org.hibernate.HibernateException;
import org.hibernate.Session;

import java.util.List;

public class CourseDAOImpl implements CourseDAO {
    @Override
    public List<Course> getAllCourses(int id){
        List<Course> c;
        Session session= SessionUtil.getSession();
        try {
            Query query=session.createQuery("from Faculty where id="+id);
//            query.setParameter("id",id);
            if(query.getResultList().size()==1){
                Faculty f=(Faculty)query.getResultList().get(0);
                System.out.println("Found Faculty");
                c=f.getCourses();
                return c;
            }
        }
        catch (HibernateException ex){
            System.out.println(ex);
        }
        finally {
            session.close();
        }
        return null;
    }

    @Override
    public List<Student> getStudentByCourse(int id){
        List<Student> students;
        Session session= SessionUtil.getSession();
        try{
            Query query= session.createQuery("from Course where id=:id");
            query.setParameter("id",id);
            if(query.getResultList().size()==1){
                Course c=(Course)query.getResultList().get(0);
                students=c.getStudents();
                return students;
            }
        }
        catch (HibernateException ex)
        {
            System.out.println(ex);
        }
        finally {
            session.close();
        }
        return null;
    }

    @Override
    public List<CouseSchedule> getSchedule(int id){
        List<CouseSchedule> schedules;
        Session session= SessionUtil.getSession();
        try{
            Query query=session.createQuery("from Course where id=:id");
            query.setParameter("id",id);
            if(query.getResultList().size()==1){
                Course c=(Course)query.getResultList().get(0);
                schedules=c.getSchedules();
                return schedules;
            }
        }
        catch(HibernateException ex){
            System.out.println(ex);
        }
        finally {
            session.close();
        }
        return null;
    }

}
