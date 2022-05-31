import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";
import "../TopicAcceptance/topicAccept.css";

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
          <div className="topicNam">GROUP - {groupId}</div>
          <hr className="topicHr" />

          {/* card */}
          {forums.map((forum, index) => (
            <div
              key={index}
              className="cardChat"
              onClick={() => getForumDetails(forum)}
            >
              <h6 className="titleChat">{forum.topic}</h6>
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
                  <a className="btChatUpdate" href="/editChatForum">
                    Edit
                  </a>

                  <a className="btChatNewDelete" href="#">
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
