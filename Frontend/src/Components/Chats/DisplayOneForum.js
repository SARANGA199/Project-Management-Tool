import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";
import "../TopicAcceptance/topicAccept.css";

export default function DisplayOneForum() {
  const navigate = useNavigate();

  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  const [gid, setGid] = useState("");
  const [auther, setAuther] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [foruiD, setForumId] = useState("");
  const [allReply, setAllReply] = useState([]);

  useEffect(() => {
    const fid = localStorage.getItem("forID");
    setGid(localStorage.getItem("groupID"));

    const forum = axios
      .get(`http://localhost:8070/chatForum/forum/${fid}`)
      .then((res) => {
        setAuther(res.data.auther);
        setTopic(res.data.topic);
        setMessage(res.data.message);
        setTime(res.data.createdAt);
      })
      .catch((err) => {});
    setForumId(fid);
  });

  //set forum id to local storage
  localStorage.setItem("ForumID", foruiD);

  // get Reply
  const getReply = async () => {
    const reply = await axios
      .get(`http://localhost:8070/chatReply/${foruiD}`)
      .then((res) => {
        setAllReply(res.data);
      });
  };
  getReply();

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
          <div className="topicNam">GROUP - {gid}</div>
          <hr className="topicHr" />

          {/* card */}

          <div className="cardChatOne">
            <h6 className="titleChat">{topic}</h6>
            <h6 className="ms-3">
              by <b className="chatBody"> {auther}</b> - {time}
            </h6>{" "}
            <br />
            <h6 className="ms-3">{message}</h6>
            <a className="btChat" href="reply">
              Reply
            </a>
          </div>

          {/* Reply */}
          {allReply.map((rep, index) => (
            <div className="cardChaReply" key={index}>
              <h6 className="titleChat">
                {" "}
                <h6>Reply : {rep.title}</h6>
              </h6>
              <h6 className="ms-3">
                by <b className="chatBody"> {rep.name}</b> - {rep.createdAt}
              </h6>{" "}
              <br />
              <h6 className="ms-3">{rep.reply}</h6>
              <a className="btChat" href="/reply">
                Reply
              </a>
              {rep.userId === crrUser._id ? (
                <div className="btnChtGroup">
                  <a
                    className="btChatEdit"
                    href="#"
                    visible={rep.userId === crrUser._id}
                  >
                    Edit
                  </a>

                  <a
                    className="btChatDelete"
                    href="#"
                    visible={rep.userId === crrUser._id}
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
