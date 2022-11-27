import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TimeTable(props) {
  const [form, setform] = useState(true);
  const [year, setyear] = useState(1);
  const [term, setterm] = useState(1);
  const [schedule, setschedule] = useState(null);

  const baseUrl = "http://localhost:8080/api/faculty/getschedule/";
  const callAPI = async (id, y, t) => {
    const url = baseUrl + id + "/values?year=" + y + "&term=" + t;
    const response = await axios.get(url);
    setschedule(response.data);
  };

  if (form == false && schedule == null) return;
  console.log(schedule);

  const handleback = () => {
    setform(true);
  };

  const handleSubmit = (y, t) => {
    setform(false);
    setyear(y);
    setterm(t);
    callAPI(props.id, year, term);
    console.log("Cliked");
  };
  const obj = JSON.stringify(schedule);
  return (
    <div>
      <br></br><br></br>
      {form == true && (
        <div className="container-sm text-center">
          <select
            className="form-select mb-5"
            aria-label="Default select example"
            onChange={(e) => {
              setyear(e.target.value);
            }}
          >
            <option selected="">Year</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
          </select>
          <select
            className="form-select mb-5"
            aria-label="Default select example"
            onChange={(e) => {
              setterm(e.target.value);
            }}
          >
            <option selected="">Term</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
          </select>
          <button
            onClick={() => handleSubmit(year, term)}
            type="submit"
            className="btn btn-success px-5 mb-5"
          >
            Submit
          </button>
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
                  onClick={props.handleTimeback}
                  type="button"
                  className="btn btn-primary"
                >
                  BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {form == false && (
        <>
          <div className="row text-center">
            <h2>Time Table</h2>
            <table className="table table-fixed table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">TIME</th>
                  <th style={{ width: "20%" }} scope="col">
                    MONDAY
                  </th>
                  <th style={{ width: "20%" }} scope="col">
                    TUESDAY
                  </th>
                  <th style={{ width: "20%" }} scope="col">
                    WEDNESDAY
                  </th>
                  <th style={{ width: "20%" }} scope="col">
                    THURSDAY
                  </th>
                  <th style={{ width: "20%" }} scope="col">
                    FRI
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">9AM-11AM</th>
                  <td>{schedule[0].MON}</td>
                  <td>{schedule[0].TUE}</td>
                  <td>{schedule[0].WED}</td>
                  <td>{schedule[0].THU}</td>
                  <td>{schedule[0].FRI}</td>
                </tr>
                <tr>
                  <th scope="row">11AM-1PM</th>
                  <td>{schedule[1].MON}</td>
                  <td>{schedule[1].TUE}</td>
                  <td>{schedule[1].WED}</td>
                  <td>{schedule[1].THU}</td>
                  <td>{schedule[1].FRI}</td>
                </tr>
                <tr>
                  <th scope="row">2PM-4PM</th>
                  <td>{schedule[2].MON}</td>
                  <td>{schedule[2].TUE}</td>
                  <td>{schedule[2].WED}</td>
                  <td>{schedule[2].THU}</td>
                  <td>{schedule[2].FRI}</td>
                </tr>
                <tr>
                  <th scope="row">4PM-6PM</th>
                  <td>{schedule[3].MON}</td>
                  <td>{schedule[3].TUE}</td>
                  <td>{schedule[3].WED}</td>
                  <td>{schedule[3].THU}</td>
                  <td>{schedule[3].FRI}</td>
                </tr>
              </tbody>
            </table>
            {/* <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table> */}
          </div>
          {/* <button
            onClick={handleback}
            className="btn btn-primary row-text-center"
          >
            back
          </button> */}
          <>
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
            <div>
              <div className="col-md-12 text-center">
                <button
                  onClick={handleback}
                  type="button"
                  className="btn btn-primary"
                >
                  BACK
                </button>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
}
