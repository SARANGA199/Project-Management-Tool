import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import React, { useEffect, useState } from "react";
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

export default function ChatReply() {
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;

  const [reply, setReply] = useState("");
  const [title, setTitle] = useState("");

  const forumId = localStorage.getItem("ForumID");
  const userId = crrUser._id;
  const name = crrUser.name;
  console.log(forumId);

  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      forumId,
      name,
      title,
      reply,
    };

    await axios
      .post("http://localhost:8070/chatReply/", data)
      .then((res) => {
        swal("Success", "Chat Reply Successfully Added", "success");
        navigate("/oneForum");
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Reply  Failed", "error");
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
              <label className="acceptTot">Add New Reply </label>
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
                    label="Name"
                    type="text"
                    variant="outlined"
                    value={name}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="filled-number"
                    label="Reply for"
                    type="text"
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </Box>
              <div className="textCont ms-2 mb-3 mt-3">
                <div class="form-group ">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    required
                    onChange={(e) => setReply(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className=" btn btn-outline-warning btn-lg ms-5 mt-5"
                >
                  &nbsp;Add Reply
                </button>
              </div>
            </form>
          </div>
          <a href="/displayChat" className="btn btn-warning ms-3">
            {" "}
            Chats
          </a>
        </div>
      </div>
    </div>
  );
}
