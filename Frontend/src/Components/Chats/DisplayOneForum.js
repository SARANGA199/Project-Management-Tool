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

  useEffect(() => {
    const fid = localStorage.getItem("forID");
    const groupId = localStorage.getItem("groupID");
    console.log(groupId);

    const forum = axios
      .get(`http://localhost:8070/chatForum/forum/${fid}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  }),
    [];

  return <div>DisplayOneForum</div>;
}
