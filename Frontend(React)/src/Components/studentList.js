import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentList(props) {
  const Url = "http://localhost:8080/api/course/getstudents/";
  const [studentlist, setstudentList] = useState(null);

  useEffect(() => {
    loadStudents(props.id);
  }, []);

  const loadStudents = async (id) => {
    const response = await axios.get(Url + id);
    //console.log(response.data);
    setstudentList(response.data);
  };
  //console.log(setstudentList);

  if (studentlist == null) return null;

  return (
    <div>
      <h1>Student List</h1>
      <table className="table table-success table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Roll</th>
            <th scope="col">Nmae</th>
            <th scope="col">Email</th>
            <th scope="col">Graduation Year</th>
            <th scope="col">CGPA</th>
            <th scope="col">Total Credit</th>
          </tr>
        </thead>
        <tbody>
          {studentlist.map((domain, index) => (
            <tr key={domain.rollnumber}>
              <td>{domain.rollnumber}</td>
              <td>{domain.name}</td>
              <td>{domain.email}</td>
              <td>{domain.graduationYear}</td>
              <td>{domain.cgpa}</td>
              <td>{domain.totalCredits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div>
          <div className="col-md-12 text-center">
            <button
              onClick={props.handleListback}
              type="button"
              className="btn btn-primary"
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
