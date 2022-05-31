import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";
import "../TopicAcceptance/topicAccept.css";

export default function DisplayAllForums() {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  const [forums, setForums] = useState([]);

  useEffect(() => {
    const forum = axios
      .get(`http://localhost:8070/chatForum/`)
      .then((res) => {
        setForums(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);

  return <div>DisplayAllForums</div>;
}
