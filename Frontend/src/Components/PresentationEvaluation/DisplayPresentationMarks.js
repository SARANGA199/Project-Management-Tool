import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../TopicAcceptance/topicAccept.css";

export default function DisplayPresentationMarks() {
  let navigate = useNavigate();
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const type = "Proposal Presentation";
    axios
      .get(`http://localhost:8070/presentationMarks/marks/${type}`)
      .then((res) => {
        console.log(res.data);
        setRequest(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
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
          <div className="topicNam">PROPOSAL PRESENTATIONS</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">GroupID</th>
                <th scope="col">Total Marks</th>
              </tr>
            </thead>
            <tbody>
              {request.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.projectId}</td>
                  <td>{data.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
