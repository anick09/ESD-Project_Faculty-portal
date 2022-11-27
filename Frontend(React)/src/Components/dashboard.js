import React, { useState } from "react";
import Students from "./students";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Link from "react";

export default function Dashboard(props) {

  console.log("Dashboard");
  console.log(props.user.data);
  let id = props.user.data;
  console.log(id);
  const [students, setStudents] = useState(false);
  return (
    <div className="row text-center">
      <div className="col col-sm-4">
        <button type="submit" className="btn btn-primary px-5 mb-5 w-100">
          Time Table
        </button>
      </div>
      <div className="col col-sm-4">
        <button
            type="submit" className="btn btn-primary px-5 mb-5 w-100">Students</button>
      </div>
    </div>

  );
}
