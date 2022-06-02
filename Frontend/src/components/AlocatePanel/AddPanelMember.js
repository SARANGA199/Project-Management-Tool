import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../TopicAcceptance/topicAccept.css";

export default function AddPanelMember() {
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

  // const setData = async (data) => {
  //   let { _id,groupID } = data;

  //   localStorage.setItem("tid", _id);
  //   localStorage.setItem("groupid", groupID);
  //   navigate("/acceptTopic");

  //   // const value = {
  //   //   topicStatus,
  //   // };

  //   // const update = await axios
  //   //   .put(`http://localhost:8070/topics/${_id}`, value)
  //   //   .then(() => {
  //   //     swal(`Topic is ${topicStatus}ed`);
  //   //     window.location.reload(false);
  //   //   })
  //   //   .catch((err) => {
  //   //     swal(`Something went to wrong !!!`);
  //   //   });
  // };


  const setMember = async (data) => {
    let { _id,groupID,topicCategory,topicName } = data;

    localStorage.setItem("tid", _id);
    localStorage.setItem("groupid", groupID);
    localStorage.setItem("category", topicCategory);
    localStorage.setItem("topic", topicName);
    navigate("/addMember");
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
          <div className="topicName">ADD  PANEL  MEMBERS</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col"><center>#</center></th>
                <th scope="col"><center>topicName</center></th>
                <th scope="col"><center>topicCategory</center></th>
                <th scope="col"><center>groupID</center></th>
                <th scope="col"><center>topicStatus</center></th>
                <th scope="col"><center>Action</center></th>
              </tr>
            </thead>
            <tbody>
              {request.map((data, index) => (
                <tr key={index}>
                  <th scope="row"><center>{index + 1}</center></th>
                  <td><center>{data.topicName}</center></td>

                  <td><center>{data.topicCategory}</center></td>
                  <td><center>{data.groupID}</center></td>
                  <td>
                    <b className="statusUp"><center>{data.topicStatus}</center></b>
                  </td>
                  <td>
                    <center>  
                    <button
                      disabled={
                        data.topicStatus === "pending" ||
                        data.topicStatus === "Rejected"
                      }
                      onClick={() => setMember(data)}
                      className="btn btn-warning ms-3"
                    >
                      <b>View Members</b>
                    </button>
                    </center>
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
