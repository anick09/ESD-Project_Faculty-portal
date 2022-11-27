import logo from "./logo.svg";
import "./App.css";
import ServiceLogin from "./Service/ServiceLogin";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Dashboard from "./Components/dashboard";
import Students from "./Components/students";
import TimeTable from "./Components/TimeTable";
import Notification from "./Components/Notification";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [gotos, setgotos] = useState(false);
  const [gotoTime, setgotoTime] = useState(false);
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)
  
  const notificationHandler = (message, type) => {
    setNotification(message);
    setNotificationType(type);

    setTimeout(() => {
      setNotificationType(null);
      setNotification(null);
    }, 3000);
  };

  const handleback=()=>{
    console.log("back");
    setgotoTime(false);
    setgotos(false);
  }
  const StartLogin = async (credentials) => {
    try {
      console.log(credentials);
      const userObject = await ServiceLogin.login(credentials);
      setUser(userObject);
      window.localStorage.setItem("loggedInUser", JSON.stringify(userObject));

      notificationHandler(
        `Logged in successfully`,
        "success"
      );
      //setBills([]);
      console.log("Login Success");
    } catch (exception) {
      console.log("Login Failed");
      notificationHandler(
        `Log in failed, check username and password entered`,
        "error"
      );
    }
  };

  const handleStudentAction = () => {
    setgotos(true);
  };

  const handletimetable = () => {
    setgotoTime(true);
  };

  const handleTimeback = () =>{
    console.log("back");
    setgotoTime(false);
    setgotos(false);
  }

  return (
    <>
      <NavBar title="IIIT Bangalore" />

      {user === null && <Login startLogin={StartLogin} />}

      {/* {
        user !== null && 
      <Dashboard user={user} setUser={setUser}/>
      } */}
      {/* <Notification notification={notification} type={notificationType} /> */}

      {gotoTime == false && gotos == false && user != null && (
        <>
          <div className="text-center">
            <h1><u><b>FACULTY ID: {user.data}</b></u></h1>
            <div className="row">
            <div className="col text-center">
              <button
                onClick={handletimetable}
                className="btn btn-primary px-5 mb-5"
              >
                Time Table
              </button>
            </div>
            <div className="col text-center">
              <button
                onClick={handleStudentAction}
                className="btn btn-primary px-5 mb-5"
              >
                Students 
              </button>
              </div>
            </div>
          </div>
          </>
      )}

      {gotoTime == false && gotos == true && user != null && (
        <Students id={user.data} handleback={handleback} />
      )}
      {gotoTime == true && gotos == false && user != null && (
        <TimeTable id={user.data} handleTimeback={handleTimeback}/>
      )}
    </>
  );
}

export default App;
