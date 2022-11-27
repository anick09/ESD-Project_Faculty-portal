import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentList from "./studentList";
import Login from "./Login";
import App from "/Users/anick_168/Frontend(React)/src/App";

export default function Students(props) {
  const [gotosList, setgotosList] = useState(false);
  const [newid, setnewid] = useState(-1);
  const [back, setback] = useState(false);

  const studentListAction = (id) => {
    console.log(id);
    setnewid(id);
    setgotosList(true);
    setback(false);
  };

  const loginBaseUrl = "http://localhost:8080/api/course/get/";
  const [courses, setCourses] = useState([]);

  let id = props.id;
  useEffect(() => {
    loadCourses(id);
  }, []);

  

  console.log(newid);
  const loadCourses = async (id) => {
    const response = await axios.get(loginBaseUrl + id);
    // console.log(response.data);
    setCourses(response.data);

    //console.log("From function");
    // return response.data;
  };
  // let courses1 = loadCourses(id);
  //console.log(courses.length);

  if (courses.length == 0) return null;
  //console.log(courses);

  const handleListback=()=>{
    console.log("back");
    setgotosList(false);
    setback(false);
  }

  return (
    <>
      {gotosList == false && back== false&&(
        <>
          <div>
            <table className="table table-warning shadow table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">Course ID</th>
                  <th scope="col">Course Name</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {courses.map((domain, index) => (
                  <tr key={domain.id}>
                    <td>{domain.id}</td>
                    <td>{domain.name}</td>
                    <td>
                      <button
                        onClick={() => studentListAction(domain.id)}
                        className="btn btn-primary"
                      >
                        View Students
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Center Align Buttons in Bootstrap</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    /* Style to center grid column */\n    .col-centered{\n        float: none;\n        margin: 0 auto;\n    }\n    \n    /* Some custom styles to beautify this example */\n    .row{\n        background: #dbdfe5;\n    }\n    .demo-content{\n        padding: 25px;\n        font-size: 18px;\n        background: #abb1b8;\n    }\n",
              }}
            />
            <div >
              <div className="col-md-12 text-center">
                <button
                  onClick={props.handleback}
                  type="button"
                  className="btn btn-primary"
                >
                  BACK
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {back==false && gotosList == true && <StudentList id={newid} handleListback={handleListback}/>}
      {/* {back==true && gotosList == false && <App/>} */}
    </>
  );
}

//     {/* <div>{}</div> */}
//     <select className="form-select" aria-label="Default select example">
//       {/* {courses.map(course =>{
//             <option>course.name</option>
//       })} */}
//     </select>
//   </div>
//   <div className="col col-sm-4">
//     <button type="submit" className="btn btn-primary px-5 mb-5 w-100">
//       SUBMIT
//     </button>
