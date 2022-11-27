package com.example.esd_again.DAO.DAOImplementation;

import com.example.esd_again.Bean.Course;
import com.example.esd_again.Bean.CouseSchedule;
import com.example.esd_again.Bean.Faculty;
import com.example.esd_again.DAO.FacultyDAO;
import com.example.esd_again.Util.SessionUtil;
import jakarta.persistence.*;
import org.hibernate.HibernateException;
import org.hibernate.Session;

import java.util.ArrayList;
import java.util.List;

public class FacultyDAOImpl implements FacultyDAO {
    @Override
    public int verify(Faculty faculty) {
        Session session = SessionUtil.getSession();
        try {
            Query query = session.createQuery("from Faculty where email=:email and password=:password");
            query.setParameter("email", faculty.getEmail());
            query.setParameter("password", faculty.getPassword());

            if (query.getResultList().size() == 1) {
                Faculty faculty1 = (Faculty) query.getResultList().get(0);
                return faculty1.getId();
            }
        } catch (HibernateException ex) {
            System.out.println(ex);
        } finally {
            session.close();
        }
        return -1;
    }

    @Override
    public List<Course> getCousesbyFaculty(int id) {
        List<Course> c;
        Session session= SessionUtil.getSession();
        try{
            Query query=session.createQuery("from Faculty where id=: id");
            query.setParameter("id",id);
            if(query.getResultList().size()==1){
                Faculty f=(Faculty) query.getResultList().get(0);
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

}