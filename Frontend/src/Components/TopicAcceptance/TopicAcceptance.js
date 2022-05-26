import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

export default function TopicAcceptance() {
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

  const setData = async (data, topicStatus) => {
    let { _id } = data;

    console.log(topicStatus);

    const value = {
      topicStatus,
    };

    const update = await axios
      .put(`http://localhost:8070/topics/${_id}`, value)
      .then(() => {
        swal(`Topic is ${topicStatus}ed`);
        window.location.reload(false);
      })
      .catch((err) => {
        swal(`Something went to wrong !!!`);
      });
  };

  return (
    <div>
      <div className="container">
        <table className="table">
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
                <td>
                  <b>{data.groupID}</b>
                </td>
                <td>
                  <b>{data.topicStatus}</b>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    disabled={
                      data.topicStatus === "accept" ||
                      data.topicStatus === "reject"
                    }
                    onClick={() => setData(data, "accept")}
                  >
                    &nbsp;Accept
                  </button>

                  <button
                    disabled={
                      data.topicStatus === "accept" ||
                      data.topicStatus === "reject"
                    }
                    className="btn btn-danger ms-3"
                    onClick={() => setData(data, "reject")}
                  >
                    &nbsp;Reject
                  </button>
                  <button
                    disabled={data.topicStatus === "pending"}
                    className="btn btn-warning ms-3"
                  >
                    &nbsp;Document Upload
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
