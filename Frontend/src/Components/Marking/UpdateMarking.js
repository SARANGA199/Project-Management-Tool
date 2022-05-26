import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import swal from "sweetalert";
import ProgressBar from "react-bootstrap/ProgressBar";
//css
import "./marking.css";

export default function UpdateMarking() {
  const [request, setRequest] = useState();
  const [criteria, setCriteria] = useState([
    { id: "", criteriaName: "", marksAllocation: "" },
  ]);
  const [specialization, setSpecialization] = useState("");
  const [projectName, setProjectName] = useState("");
  var [totalMarks, setTotalMarks] = useState("");
  const [markID, setMID] = useState("");

  useEffect(() => {
    let mid = localStorage.getItem("mid");

    axios
      .get(`http://localhost:8070/markings/${mid}`)
      .then((res) => {
        setRequest(res.data);
        setSpecialization(res.data.specialization);
        setProjectName(res.data.projectName);
        setTotalMarks(res.data.totalMarks);
        setCriteria(res.data.criteria);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });

    setMID(mid);
  }, []);

  //handle specialization
  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };

  const handleChangeInput = (id, event) => {
    const newCriteria = criteria.map((i, index) => {
      if (id === index) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setCriteria(newCriteria);
  };

  //Submit data to mongoDb
  async function handleSubmit(e) {
    e.preventDefault();

    const dataNew = {
      specialization,
      projectName,
      totalMarks,
      criteria,
    };

    await axios
      .put(`http://localhost:8070/markings/${markID}`, dataNew)
      .then(() => {
        swal("Done!", "Marking scheme Update successfully!", "success");
        e.target.reset();
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleAddFields = () => {
    setCriteria([
      ...criteria,
      { id: "", criteriaName: "", marksAllocation: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...criteria];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setCriteria(values);
  };
  return (
    <div>
      <div className="topic-container">
        <div className="info">
          {/* <h1 className='formName'>SLIIT RESEARCH </h1> */}
        </div>
        <div>
          <Container>
            <form onSubmit={handleSubmit}>
              <label className="formTitleMark">
                {" "}
                UPDATE MARKING
                <br /> SCHEME
              </label>
              <hr className="hr1" />

              <div className="mainDetails">
                <label className="formMiddle">Details of Scheme </label>
                <hr className="hr2" />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl
                    className="ms-3 mb-3 mt-3"
                    style={{ width: "220px" }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      specialization field
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select-label"
                      value={specialization}
                      label="specialization"
                      autoWidth
                      onChange={handleChange}
                    >
                      <MenuItem value={"Presentation"}>
                        Presentation Evaluation
                      </MenuItem>
                      <MenuItem value={"Proposal"}>
                        Proposal Evaluation
                      </MenuItem>
                      <MenuItem value={"Final"}>Final Evaluation</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                  className="ms-3 mb-3 mt-3"
                  name="Project Name"
                  label="Project Name"
                  required
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e.target.value);
                  }}
                  variant="outlined"
                />
                <div>
                  <TextField
                    className="ms-3 mb-3 mt-3"
                    name="Total Marks"
                    label="Total marks allocation"
                    type="number"
                    value={totalMarks}
                    required
                    onChange={(e) => {
                      setTotalMarks(e.target.value);
                    }}
                    variant="outlined"
                  />
                </div>

                <label className="formMiddle"> Add Criteria</label>
                <hr className="hr2" />

                {criteria.map((criteriaNew, index) => (
                  <div key={index}>
                    <TextField
                      className="ms-3"
                      name="criteriaName"
                      label="Criteria Name"
                      required
                      variant="outlined"
                      value={criteriaNew.criteriaName}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                    <TextField
                      name="marksAllocation"
                      type="number"
                      label="Marks Allocation"
                      className="ms-4 mb-3"
                      variant="outlined"
                      required
                      value={criteriaNew.marksAllocation}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                    <IconButton
                      disabled={criteria.length === 1}
                      onClick={() => handleRemoveFields(index)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={handleAddFields}>
                      <AddIcon />
                    </IconButton>
                  </div>
                ))}
                <button
                  className="btn btn-outline-warning"
                  variant="contained"
                  type="submit"
                >
                  SEND <SendIcon>send</SendIcon>{" "}
                </button>
              </div>
            </form>
          </Container>
        </div>

        <div className="DisplayMain">
          <label className="formTitleMark"> ADDED CRITERIA</label>
          <hr className="hr1" />
          <div>
            <table className="table" style={{ backgroundColor: "white" }}>
              <thead>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Criteria</th>
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

            {/* <h5 className="percent">100%</h5>
            <ProgressBar
              style={{ height: "40px" }}
              variant="warning"
              now={sum}
            />
            <h5>{sum}% percent marks allocated </h5> */}
          </div>
        </div>
      </div>
    </div>
  );
}
