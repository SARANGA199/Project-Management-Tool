import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "./topicAccept.css";

export default function Topics() {
  let navigate = useNavigate();
  const [request, setRequest] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8070/topics/")
      .then((res) => {
        console.log(res.data);
        setRequest(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const setData = async (data) => {
    let { _id } = data;

    localStorage.setItem("tid", _id);
    navigate("/acceptTopic");

    // const value = {
    //   topicStatus,
    // };

    // const update = await axios
    //   .put(`http://localhost:8070/topics/${_id}`, value)
    //   .then(() => {
    //     swal(`Topic is ${topicStatus}ed`);
    //     window.location.reload(false);
    //   })
    //   .catch((err) => {
    //     swal(`Something went to wrong !!!`);
    //   });
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
          <div className="topicNam">TOPICS</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">topicName</th>
                <th scope="col">topicCategory</th>
                <th scope="col">groupID</th>
                <th scope="col">topicStatus</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {request.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.topicName}</td>

                  <td>{data.topicCategory}</td>
                  <td>{data.groupID}</td>
                  <td>
                    <b className="statusUp">{data.topicStatus}</b>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      disabled={
                        data.topicStatus === "Accepted" ||
                        data.topicStatus === "Rejected"
                      }
                      onClick={() => setData(data)}
                    >
                      &nbsp;Acceptance
                    </button>

                    <button
                      disabled={
                        data.topicStatus === "pending" ||
                        data.topicStatus === "Rejected"
                      }
                      className="btn btn-warning ms-3"
                    >
                      &nbsp;Document Upload
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <a href="/displayChat" className="btn btn-warning ms-3">
            {" "}
            Chats
          </a>
        </div>
      </div>
    </div>
  );
}
