import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ViewMarkingSchemes() {
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

  function deleteMarking(id) {
    let ans = window.confirm(
      "Do you really want to delete this Marking Scheme ?"
    );

    if (ans) {
      axios
        .delete(`http://localhost:8070/markings/${id}`)
        .then(() => {
          alert("Marking Scheme Deleted successfully");
          window.location.reload(false);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

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
                    href="/updateMarking"
                    className="btn btn-warning"
                    onClick={() => setData(data)}
                  >
                    &nbsp;update
                  </a>

                  <a
                    className="btn btn-danger ms-3"
                    onClick={() => deleteMarking(data._id)}
                  >
                    &nbsp;Delete
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
