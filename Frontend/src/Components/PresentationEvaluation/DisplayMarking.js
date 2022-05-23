import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DisplayMarking() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/markings/")
      .then((res) => {
        console.log(res.data);
        setRequest(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const setData = (data) => {
    let { _id } = data;

    localStorage.setItem("mid", _id);
  };

  return (
    <div>
      <div className="container">
        <table className="table" style={{ backgroundColor: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">specialization</th>
              <th scope="col">projectName</th>
              <th scope="col">totalMarks</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {request.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.specialization}</td>

                <td>{data.projectName}</td>
                <td>
                  <b>{data.totalMarks}</b>
                </td>
                <td>
                  <a
                    className="btn btn-warning"
                    href="/evaluatePresentation"
                    onClick={() => setData(data)}
                    style={{ textDecoration: "none" }}
                  >
                    &nbsp;Evaluate
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
