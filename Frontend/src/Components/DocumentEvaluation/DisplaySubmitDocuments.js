import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../TopicAcceptance/topicAccept.css";

export default function DisplaySubmitDocuments() {
  let navigate = useNavigate();
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const type = "Documentation";
    axios
      .get(`http://localhost:8070/stdSubmitDoc/stdSubmitDoc/${type}`)
      .then((res) => {
        console.log(res.data);
        setRequest(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const setData = async (data) => {
    let { _id, groupID, groupLeaderName,typeName, SubmitDoc } = data;

    localStorage.setItem("mid", _id);
    localStorage.setItem("groupID", groupID);
    localStorage.setItem("Leader", groupLeaderName);
    localStorage.setItem("typeName", typeName);
    localStorage.setItem("SubmitDoc", SubmitDoc);

    navigate("/evaluatedocument");
  };

  return (
    <div>
      <div className="topicContainer">
        <div className="leftTopic">
          <div className="topicTop">
            SLIIT <br />
            RESEARCH
          </div>
        </div>
        <div className="container">
          <div className="topicNam">DOCUMENTATION</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">GroupID</th>
                <th scope="col">GroupLeader Email</th>
                <th scope="col">Type Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {request.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.groupID}</td>

                  <td>{data.groupLeaderEmail}</td>
                  <td>{data.typeName}</td>
                  <td>
                    <b className="submitColor">{data.evaluateStatus}</b>
                  </td>
                  <td>
                    <button
                      disabled={data.evaluateStatus === "Evaluated"}
                      className="btn btn-warning"
                      onClick={() => setData(data)}
                    >
                      &nbsp;Evaluate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}