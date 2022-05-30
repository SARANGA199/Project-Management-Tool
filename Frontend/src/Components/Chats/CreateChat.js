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

export default function CreateChat() {
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  // const [auther, setAutherName] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [groupID, setGroupID] = useState("");

  const auther = crrUser.name;
  const userId = crrUser._id;
  console.log(userId);

  //handle specialization
  const handleChange = (event) => {
    setGroupID(event.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      auther,
      groupID,
      topic,
      message,
    };

    await axios
      .post("http://localhost:8070/chatForum/", data)
      .then((res) => {
        swal("Success", "Chat Forum Created Successfully", "success");
      })
      .catch((err) => {
        console.log(err);
        swal("Error", "Chat Forum Creation Failed", "error");
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
              <label className="acceptTot">Add New Forum </label>
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
                    // onChange={(e) => setAutherName(e.target.value)}
                  />
                  {/* 
                <TextField
                  id="filled-number2"
                  label="Date"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl
                      className="ms-3 mb-3 mt-3"
                      style={{ width: "220px" }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Group ID
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-label"
                        // value={specialization}
                        label="specialization"
                        autoWidth
                        onChange={handleChange}
                      >
                        <MenuItem value={"G20"}>G20</MenuItem>
                        <MenuItem value={"G21"}>G21</MenuItem>
                        <MenuItem value={"G22"}>G22</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <TextField
                  id="filled-number3"
                  label="Title"
                  required
                  type="text"
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
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className=" btn btn-outline-warning btn-lg ms-5 mt-5"
                >
                  &nbsp;Add Forum
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
