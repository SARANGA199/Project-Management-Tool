import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { deleteChatReply } from "../../../../Backend/controllers/chatForum/chatReplyController";
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
  const [GroupId, setGroupID] = useState("");
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
        setGroupID(res.data.groupID);
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

  //delete reply
  const deleteChatReply = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8070/chatReply/${id}`)
          .then(() => {
            swal("Your reply has been deleted.", {
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

  //update reply
  const editReply = (rep) => {
    const { _id } = rep;

    localStorage.setItem("replyID", _id);
  };

  //reply
  const ReplyToChat = (reply) => {
    const { name } = reply;
    localStorage.setItem("ReplyName", name);
    navigate("/reply");
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
          <div className="topicNam">GROUP - {GroupId}</div>
          <hr className="topicHr" />

          {/* card */}

          <div className="cardChatOne">
            <h6 className="titleChat">{topic}</h6>
            <h6 className="ms-3">
              by <b className="chatBody"> {auther}</b> - {time}
            </h6>{" "}
            <br />
            <h6 className="ms-3">{message}</h6>
            <a className="btChat" onClick={() => ReplyToChat(rep)}>
              Reply
            </a>
          </div>

          {/* Reply */}
          {allReply.map((rep, index) => (
            <div className="cardChaReply" key={index}>
              <h6 className="titleChat">
                {" "}
                <h6>Reply To : {rep.title}</h6>
              </h6>
              <h6 className="ms-3">
                by <b className="chatBody"> {rep.name}</b> - {rep.createdAt}
              </h6>{" "}
              <br />
              <h6 className="ms-3">{rep.reply}</h6>
              <a className="btChat" onClick={() => ReplyToChat(rep)}>
                Reply
              </a>
              {rep.userId === crrUser._id ? (
                <div className="btnChtGroup">
                  <a
                    className="btChatEdit"
                    href="/editReply"
                    onClick={() => {
                      editReply(rep);
                    }}
                  >
                    Edit
                  </a>

                  <a
                    className="btChatDelete"
                    onClick={() => {
                      deleteChatReply(rep._id);
                    }}
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
