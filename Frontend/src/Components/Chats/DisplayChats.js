import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";
import "../TopicAcceptance/topicAccept.css";
import AddIcon from "@mui/icons-material/Add";

export default function DisplayChats() {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  const [groupId, setGroupId] = useState("");
  const [auther, setAuther] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const [forums, setForums] = useState([]);

  //const email = crrUser.email;
  // console.log(email);

  useEffect(() => {
    const forum = axios
      .get(`http://localhost:8070/member/${crrUser.email}`)
      .then((res) => {
        setGroupId(res.data.GroupID);
      })
      .catch((err) => {});
  });

  const getChat = async () => {
    const chat = await axios
      .get(`http://localhost:8070/chatForum/${groupId}`)
      .then((res) => {
        setForums(res.data);
      })
      .catch((err) => {});
  };

  getChat();

  const getForumDetails = (forum) => {
    let { _id } = forum;
    localStorage.setItem("forID", _id);
    localStorage.setItem("groupID", groupId);
    navigate("/oneForum");
  };

  //delete forum
  const deleteForum = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8070/chatForum/${id}`)
          .then(() => {
            swal("Your forum has been deleted.", {
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
  };

  const updateForum = (forum) => {
    let { _id } = forum;
    localStorage.setItem("forID", _id);
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
          <button
            className="btn btn-warning TypeADD"
            onClick={() => navigate("/createChat")}
          >
            Add New Forum &nbsp; <AddIcon />
          </button>
          <button
            className="btn btn-warning TypeADD"
            onClick={() => navigate("/allForums")}
          >
            ALL Chat Forums
          </button>
          <div className="topicNam">GROUP - {groupId}</div>
          <hr className="topicHr" />

          {/* card */}
          {forums.map((forum, index) => (
            <div key={index} className="cardChat">
              <h6 className="titleChat" onClick={() => getForumDetails(forum)}>
                {forum.topic}
              </h6>
              <h6 className="ms-3">
                by <b className="chatBody"> {forum.auther}</b> -{" "}
                {forum.createdAt}
              </h6>{" "}
              <br />
              <h6 className="ms-3">{forum.message}</h6>
              <a className="btChat" onClick={() => getForumDetails(forum)}>
                View
              </a>
              {/* login user only */}
              {forum.userId === crrUser._id ? (
                <div className="btnChtGroupNew">
                  <a
                    className="btChatUpdate"
                    href="/editChatForum"
                    onClick={() => updateForum(forum)}
                  >
                    Edit
                  </a>

                  <a
                    className="btChatNewDelete"
                    onClick={() => deleteForum(forum._id)}
                  >
                    Delete
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
