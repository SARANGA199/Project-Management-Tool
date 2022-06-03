import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

export default function DisplayCoSupervisors() {
  let navigate = useNavigate();
  const [RequestCoSupervisors, setRequestCoSupervisors] = useState([]);
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.UserAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  useEffect(() => {
    getRequestSV();
  }, []);

  const getRequestSV = async () => {
    const response = await axios.get("http://localhost:8070/requestSV");
    setRequestCoSupervisors(response.data);
  };
  const setCData = (data) => {
    let { _id } = data;

    localStorage.setItem("RID", _id);
    navigate("/updateCoSupervisorStatus");
  };

  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-body">
          <center>
            <h2>Co-Supervisors Requests</h2>
          </center>

          <br />

          <table className="table table-bordered table-striped table-responsive-stack">
            <tr>
              <th scope="col">Request No </th>
              <th scope="col">Research Supervisor </th>
              <th scope="col">Research Category </th>
              <th scope="col">Group ID </th>
              <th scope="col">Group Leader Email</th>
              <th scope="col">Research Topic Name </th>
              <th scope="col">Comments </th>
              <th scope="col">Co-Supervisor </th>
              <th scope="col">Request Status </th>
              <th scope="col">Action </th>
            </tr>

            <tbody>
              {RequestCoSupervisors.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.researchSupervisor}</td>
                  <td>{data.researchCategory}</td>
                  <td>{data.groupID}</td>
                  <td>{data.groupLeaderEmail}</td>
                  <td>{data.researchTopicName}</td>
                  <td>{data.comments}</td>
                  <td>{data.coSupervisor}</td>
                  <td>{data.coSupervisorStatus}</td>
                  <td>

                    {crrUser.role === "Co-Supervisor" ? (
                      <button
                        className="btn btn-warning"
                        disabled={
                          data.coSupervisorStatus === "Accepted" ||
                          data.coSupervisorStatus === "Rejected"
                        }
                        onClick={() => setCData(data)}
                      >
                        &nbsp;update
                      </button>
                    ) : (
                      ""
                    )}
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
