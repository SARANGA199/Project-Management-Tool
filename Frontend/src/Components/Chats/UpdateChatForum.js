import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import swal from "sweetalert";

import "../TopicAcceptance/accept.css";
import { async } from "@firebase/util";
import axios from "axios";

export default function UpdateChatForum() {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;

  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [Fid, setFID] = useState("");
  const auther = crrUser.name;

  useEffect(() => {
    const forumID = localStorage.getItem("forID");
    axios
      .get(`http://localhost:8070/chatForum/forum/${forumID}`)
      .then((res) => {
        setTopic(res.data.topic);
        setMessage(res.data.message);
      });

    setFID(forumID);
  }, []);

  //update chat forum
  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      topic,
      message,
    };

    await axios
      .put(`http://localhost:8070/chatForum/${Fid}`, data)
      .then((res) => {
        swal("Success", "Chat Forum Updated Successfully", "success");
        navigate("/displayChat");
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Chat Forum Update Failed", "error");
      });
  };

  return (
    <div>
      <div className="acceptContainer">
        <div className="acceptLeft">
          <div className="bannerTopic">
            SLIIT <br /> RESEARCH
          </div>
          <hr className="hrTopic" />
        </div>
        <div>
          <div className="acceptLabel">
            <form onSubmit={submitData}>
              <label className="acceptTot">Update Forum </label>
              <hr className="hr3" />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="filled-number"
                    label="Auther Name"
                    type="text"
                    variant="outlined"
                    value={auther}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <TextField
                  id="filled-number3"
                  label="Title"
                  required
                  type="text"
                  value={topic}
                  variant="outlined"
                  style={{ width: "43ch" }}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </Box>
              <div className="textCont ms-2 mb-3 mt-3">
                <div class="form-group ">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className=" btn btn-outline-warning btn-lg ms-5 mt-5"
                >
                  &nbsp;Update Forum
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
