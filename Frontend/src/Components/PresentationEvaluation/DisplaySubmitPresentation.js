import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DisplaySubmitPresentation() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const type = "Presentation";
    axios
      .get(`http://localhost:8070/stdSubmitDoc/${type}`)
      .then((res) => {
        console.log(res.data);
        setRequest(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const setData = (data) => {
    let { _id, groupID, typeName, SubmitDoc } = data;

    localStorage.setItem("mid", _id);
    localStorage.setItem("groupID", groupID);
    localStorage.setItem("typeName", typeName);
    localStorage.setItem("SubmitDoc", SubmitDoc);
  };

  return (
    <div>
      <div className="container">
        <table className="table" style={{ backgroundColor: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">GroupID</th>
              <th scope="col">GroupLeader Email</th>
              <th scope="col">Type Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {request.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.groupID}</td>

                <td>{data.groupLeaderEmail}</td>
                <td>
                  <b>{data.typeName}</b>
                </td>
                <td>
                  <a
                    href="/evaluatePresentation"
                    className="btn btn-warning"
                    onClick={() => setData(data)}
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
