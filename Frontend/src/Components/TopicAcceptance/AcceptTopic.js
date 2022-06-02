import axios from "axios";
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
import "./accept.css";

export default function AcceptTopic() {
  let navigate = useNavigate();
  const [topicName, setTopicName] = useState();
  const [topicCategory, setToCategory] = useState();
  const [groupID, setGroupId] = useState();
  const [topicDescription, setToDescription] = useState();
  const [tid, setTid] = useState();
  const [groupLeaderEmail, setGroupLeaderEmail] = useState();

  useEffect(() => {
    let id = localStorage.getItem("tid");

    axios
      .get(`http://localhost:8070/topics/${id}`)
      .then((res) => {
        setTopicName(res.data.topicName);
        setToCategory(res.data.topicCategory);
        setGroupId(res.data.groupID);
        setToDescription(res.data.topicDescription);
        setGroupLeaderEmail(res.data.groupLeaderEmail);
      })
      .catch((err) => {
        alert(err);
      });
    setTid(id);
  }, []);
  console.log(groupLeaderEmail);

  const setData = async (topicStatus) => {
    const newValue = {
      topicStatus,
      groupLeaderEmail,
      groupID,
      topicName,
    };

    const update = await axios
      .put(`http://localhost:8070/topics/${tid}`, newValue)
      .then(() => {
        swal(`Topic is ${topicStatus}ed`);
        //navigate("/topics");

      if(topicStatus=="Accepted")  {

        const newValue = {
          groupID,
          researchArea:topicCategory,
      };
  
      axios
        .post(`http://localhost:8070/allocatePanel/`, newValue)
        .then(() => {
          //swal("sent feedback")
          navigate("/topics");
        })
        .catch((err) => {
          swal(`Something went to wrong !!!`);

        });

      }else if(topicStatus=="Rejected"){
        navigate("/topics");
      }

      })
      .catch((err) => {
        swal(`Something went to wrong !!!`);
      });
  };

  return (
    <div>
      <div className="acceptContainer">
        <div className="acceptLeft">
          <div className="bannerTopic">
            TOPIC <br /> ACCEPTANCE
          </div>
          <hr className="hrTopic" />
        </div>
        <div>
          <div className="acceptLabel">
            <label className="acceptTot">Details of Topic </label>
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
                  label="Group ID"
                  type="text"
                  value={groupID}
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                <TextField
                  id="filled-number2"
                  label="Research Category"
                  type="text"
                  value={topicCategory}
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
              <TextField
                id="filled-number3"
                label="Research Topic"
                type="text"
                value={topicName}
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Box>
            <div className="textCont ms-2 mb-3 mt-3">
              <div class="form-group ">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  value={topicDescription}
                  rows="6"
                ></textarea>
              </div>

              <button
                className=" btn btn-outline-success btn-lg ms-5 mt-5"
                onClick={() => setData("Accepted")}
              >
                &nbsp;Accept
              </button>
              <button
                className="btn btn-outline-danger btn-lg ms-5 mt-5"
                onClick={() => setData("Rejected")}
              >
                &nbsp;Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
