import axios from "axios";
import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import swal from "sweetalert";
import { v4 as uuidv4 } from "uuid";

import "./presentation.css";

export default function EvaluatePresentation() {
  // const [mid,SetMid] = useState();
  const [criteria, setCriteria] = useState([
    { id: uuidv4(), criteriaName: "", marksAllocation: "" },
  ]);
  const [marks, setMarks] = useState([{ id: uuidv4(), marks: "" }]);
  const [researchTopic, setResearchTopic] = useState("");
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    let mid = localStorage.getItem("mid");

    axios
      .get(`http://localhost:8070/markings/${mid}`)
      .then((res) => {
        setCriteria(res.data.criteria);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleChangeInput = (id, event) => {
    const newMarks = marks.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setMarks(newMarks);
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(marks);
  };

  const handleAddFields = () => {
    setMarks([...marks, { id: uuidv4(), marks: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...marks];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setMarks(values);
  };

  var sum = marks
    .map((data) => Number(data.marks.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <div>
      <div className="topic-container">
        <div className="leftCom">
          <label className="formTitle">
            {" "}
            EVALUATE
            <br /> PRESENTATION
          </label>

          <div className="input2">
            <TextField
              className="ms-3 mb-3 mt-3"
              name="Project ID"
              label="Project ID"
              required
              onChange={(e) => {
                setProjectId(e.target.value);
              }}
              variant="outlined"
            />
            <div>
              <TextField
                className="ms-3 mb-3 mt-3"
                name="Research Topic"
                label="Research Topic"
                type="text"
                required
                onChange={(e) => {
                  setResearchTopic(e.target.value);
                }}
                variant="outlined"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="tableControl">
            <table className="table" style={{ backgroundColor: "white" }}>
              <thead>
                <tr>
                  <th scope="col-lg">Index</th>
                  <th scope="col-lg">Criteria</th>
                  <th scope="col">Marks Allocation</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((display, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{display.criteriaName}</td>
                    <td> {display.marksAllocation} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 
      {criteria.map((criteriaNew) => (
        <div key={criteriaNew.id}>
          <TextField
            className="ms-3"
            name="criteriaName"
            label="Criteria Name"
            variant="outlined"
            value={criteriaNew.criteriaName}
          />
          <TextField
            name="marksAllocation"
            type="number"
            label="Marks Allocation"
            className="ms-4 mb-3"
            variant="outlined"
            value={criteriaNew.marksAllocation}
          />
        </div>
      ))} */}
        </div>

        <div className="leftCom">
          <h6 className="title">Add Marks</h6>
          {marks.map((marksNew) => (
            <div key={marksNew.id}>
              <div className="textNew">
                <TextField
                  name="marks"
                  type="number"
                  label="Marks"
                  variant="outlined"
                  required
                  value={marksNew.marks}
                  onChange={(event) => handleChangeInput(marksNew.id, event)}
                />

                <IconButton
                  disabled={marks.length === 1}
                  onClick={() => handleRemoveFields(marksNew.id)}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={handleAddFields}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          ))}
          Total Marks : {sum}
          <div className="btn1">
            <button
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
  );
}
