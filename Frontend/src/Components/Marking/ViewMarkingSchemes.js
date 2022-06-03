import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getMarkingScheme } from "../../../../Backend/controllers/markingControllers/markingController";
import getMarkingScheme from "../PresentationMarks/GetMarkingSchemes";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import "../TopicAcceptance/topicAccept.css";

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
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8070/markings/${id}`)
          .then(() => {
            swal("Marking Scheme Deleted successfully", {
              icon: "success",
            });
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        swal("Deletion canceled!");
      }
    });
  }

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
          <div className="topicNam">MARKING SCHEMES</div>
          <hr className="topicHr" />
          <table className="table frame">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">specialization</th>
                <th scope="col">SchemaName</th>
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
                    <button
                      className="btn btn-success ms-3"
                      onClick={() =>
                        getMarkingScheme(
                          data.specialization,
                          data.totalMarks,
                          data.criteria
                        )
                      }
                    >
                      <DownloadOutlinedIcon /> &nbsp;Marking Scheme
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
