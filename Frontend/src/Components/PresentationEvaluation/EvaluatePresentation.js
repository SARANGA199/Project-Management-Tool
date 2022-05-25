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
    { id: uuidv4(), criteriaName: "", marksAllocation: "", marks: "" },
  ]);
  const [marksn, setMarks] = useState();
  // const [result, setResult] = useState([
  //   { criteriaName: "", marksAllocation: "", marks: "" },
  // ]);
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
    const newMarks = criteria.map((i, index) => {
      if (id == index) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setCriteria(newMarks);
  };

  console.log(criteria);
  var sum = 0;

  const submitData = (e) => {
    e.preventDefault();
    console.log(criteria);
    sum = criteria
      .map((data) => Number(data.marks.replace("$", "")))
      .reduce((prev, curr) => prev + curr, 0);
    setMarks(sum);
  };

  // const handleAddFields = () => {
  //   setMarks([...marks, { id: uuidv4(), marks: "" }]);
  // };

  // const handleRemoveFields = (id) => {
  //   const values = [...marks];
  //   values.splice(
  //     values.findIndex((value) => value.id === id),
  //     1
  //   );
  //   setMarks(values);
  // };

  // var sum = criteria
  //   .map((data) => Number(data.marks.replace("$", "")))
  //   .reduce((prev, curr) => prev + curr, 0);

  return (
    <div>
      <div className="topic-containerPre">
        <div className="leftCom">
          <label className="formTitlePre">
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

        <div className="map1">
          <div className="tableControl">
            <table className="table" style={{ backgroundColor: "white" }}>
              <thead>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Criteria</th>
                  <th scope="col">Marks Allocation</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((criteriaNew, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <TextField
                        className="ms-3 mt-3"
                        name="criteriaName"
                        variant="standard"
                        disabled
                        value={criteriaNew.criteriaName}
                        onChange={(event) => handleChangeInput(index, event)}
                      />
                    </td>
                    <td>
                      <TextField
                        name="marksAllocation"
                        type="number"
                        className="ms-4 mt-3"
                        variant="standard"
                        disabled
                        value={criteriaNew.marksAllocation}
                        onChange={(event) => handleChangeInput(index, event)}
                      />
                    </td>
                    <td>
                      <TextField
                        name="marks"
                        type="number"
                        label="Marks"
                        className="ms-3 mt-3"
                        variant="outlined"
                        required
                        value={criteriaNew.marks}
                        onChange={(event) => handleChangeInput(index, event)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="btn1">
            <button
              className="btn btn-outline-warning"
              variant="contained"
              onClick={submitData}
              type="submit"
            >
              SEND <SendIcon>send</SendIcon>{" "}
            </button>
          </div>
        </div>

        <div className="leftCom">
          <h6 className="title">Added Marks</h6>
          <table className="table" style={{ backgroundColor: "white" }}>
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Criteria</th>
                <th scope="col">Marks Allocation</th>
                <th scope="col">Marks</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((display, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{display.criteriaName}</td>
                  <td> {display.marksAllocation} </td>
                  <td> {display.marks} </td>
                </tr>
              ))}
            </tbody>
          </table>
          Total Marks : {marksn}
          {/* {marks.map((marksNew, index) => (
            <div key={index}>
              <div className="textNew">
                <TextField
                  name="marks"
                  type="number"
                  label="Marks"
                  variant="outlined"
                  required
                  value={marksNew.marks}
                  onChange={(event) => handleChangeInput(index, event)}
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
          // ))} */}
        </div>
      </div>
    </div>
  );
}
