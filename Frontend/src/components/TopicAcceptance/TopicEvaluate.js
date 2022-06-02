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
//import document from "../../";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import swal from "sweetalert";
import "./accept.css";

export default function TopicEvaluate() {
  let navigate = useNavigate();
  const [topicName, setTopicName] = useState();
  const [topicCategory, setToCategory] = useState();
  const [groupID, setGroupId] = useState();
  const [topicFeedback, setTopicFeedback] = useState();
  const [tid, setTid] = useState();
  const [email,setEmail]=useState("");
  const [topicSubmitDoc,setTopicSubmitDoc]=useState("");

  useEffect(() => {
    let id = localStorage.getItem("tid");

    axios
      .get(`http://localhost:8070/topics/${id}`)
      .then((res) => {
        setTopicName(res.data.topicName);
        setToCategory(res.data.topicCategory);
        setGroupId(res.data.groupID);
        setEmail(res.data.groupLeaderEmail);


        console.log(res.data.groupID)
        axios
        .get(`http://localhost:8070/topicSubmitDoc/displayTopicDoc/${res.data.groupID}`)
        .then((res) => {
          setTopicSubmitDoc(res.data.topicSubmitDoc);
        })
        .catch((err) => {
          alert(err);
        });



      })
      .catch((err) => {
        alert(err);
      });

      

      
    setTid(id);
  }, []);

  const setData = async () => {
    const newValue = {
        topicFeedback,
        email,
        groupID,
        topicName
    };

    const update = await axios
      .put(`http://localhost:8070/topicFeedback/${tid}`, newValue)
      .then(() => {
        swal("sent feedback")
        navigate("/topics");
      })
      .catch((err) => {
        swal(`Something went to wrong !!!`);
      });
  };
console.log(topicSubmitDoc)
  return (
    <div>
      <div className="acceptContainer">
        <div className="acceptLeft">
          <div className="bannerTopic">
            TOPIC <br /> EVALUATION
          </div>
          <hr className="hrTopic" />
        </div>
        <div>
          <div className="acceptLabel">
            <label className="acceptTot">Details of Topic </label>
            <hr className="hr3" />
            <div style={{paddingLeft:"350px",marginBottom:"30px"}}>
            <Box>
            <a href={topicSubmitDoc} style={{textDecoration:"none"}}>submit document</a>
            </Box>
            </div>
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  disabled
                />
                
                <TextField
                  id="filled-number2"
                  label="Research Category"
                  type="text"
                  value={topicCategory}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  disabled
                />
              </div>
              <div>
              <TextField
                id="filled-number3"
                label="Research Topic"
                type="text"
                value={topicName}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                disabled
              />
              <TextField
                  id="filled-number2"
                  label="Group Leader Email"
                  type="text"
                  value={email}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  disabled
                />
             </div>   
            </Box>
            
            <div className="textCont ms-2 mb-3 mt-3">
              <div class="form-group ">
                <label for="exampleFormControlTextarea1"><b>Feedback of the Research Topic:</b></label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  value={topicFeedback}
                  rows="6"
                  onChange={(e)=>setTopicFeedback(e.target.value)}
                  required
                ></textarea>
                <br></br>
              </div >
              </div>
              <div style={{paddingLeft:"360px"}}>
              <button
                
                  onClick={()=>setData()}
                  className="btn btn-outline-warning"
                  variant="contained"
                  type="submit"
                >
                  SEND <SendIcon>send</SendIcon>{" "}
                </button>
                </div>
                
           
          </div>
        </div>
      </div>
    </div>
  );
}
