import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";
import "../TopicAcceptance/topicAccept.css";

export default function DisplayChats() {
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  const [groupId, setGroupId] = useState("");
  const [auther, setAuther] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [fid, setFid] = useState("");

  //const email = crrUser.email;
  // console.log(email);

  useEffect(() => {
    function getForum() {
      const forum = axios
        .get(`http://localhost:8070/member/${crrUser.email}`)
        .then((res) => {
          setGroupId(res.data.GroupID);
          console.log(res.data.GroupID);
        })
        .catch((err) => {});
    }

    getForum();
  });

  console.log(groupId);

  const getChat = async () => {
    const chat = await axios
      .get(`http://localhost:8070/chatForum/${groupId}`)
      .then((res) => {
        console.log(res.data);
        setAuther(res.data.auther);
        setTopic(res.data.topic);
        setMessage(res.data.message);
        setTime(res.data.createdAt);
        setFid(res.data._id);
      })
      .catch((err) => {});
  };

  getChat();
  console.log(fid);
  localStorage.setItem("fid", fid);

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

          <div className="cardChat">
            <h6 className="titleChat">{topic}</h6>
            <h6 className="ms-3">
              by <b className="chatBody"> {auther}</b> - {time}
            </h6>{" "}
            <br />
            <h6 className="ms-3">{message}</h6>
            <a className="btChat" href="/reply">
              Reply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
