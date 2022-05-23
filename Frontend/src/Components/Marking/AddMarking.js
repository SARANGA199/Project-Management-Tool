import React, { useState } from "react";
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

//Date
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ProgressBar from "react-bootstrap/ProgressBar";

//css
import "./marking.css";

//uid
import { v4 as uuidv4 } from "uuid";

export default function AddMarking() {
  const [criteria, setCriteria] = useState([
    { id: uuidv4(), criteriaName: "", marksAllocation: "" },
  ]);
  const [specialization, setSpecialization] = useState("");
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState(new Date());
  var [totalMarks, setTotalMarks] = useState("");
  var value = 0;
  var [total, setTotal] = useState(0);

  //handle specialization
  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };

  //handle date
  const handleSelectDateChange = (date) => {
    setDate(date);
  };

  const startDate = new Date();
  function disablePrevDates(startDate) {
    const startSeconds = Date.parse(startDate);
    return (date) => {
      return Date.parse(date) < startSeconds;
    };
  }

  var sum = criteria
    .map((data) => Number(data.marksAllocation.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  console.log(sum);

  //Submit data to mongoDb
  async function handleSubmit(e) {
    e.preventDefault();

    const dataNew = {
      specialization,
      projectName,
      date,
      totalMarks,
      criteria,
    };

    await axios
      .post("http://localhost:8070/markings/", dataNew)
      .then(() => {
        swal("Done!", "Marking scheme added successfully!", "success");
        e.target.reset();
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleChangeInput = (id, event) => {
    const newCriteria = criteria.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setCriteria(newCriteria);
  };

  const handleAddFields = () => {
    setCriteria([
      ...criteria,
      { id: uuidv4(), criteriaName: "", marksAllocation: "" },
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
              <label className="formTitle">
                {" "}
                CREATE MARKING
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
                    required
                    onChange={(e) => {
                      setTotalMarks(e.target.value);
                    }}
                    variant="outlined"
                  />
                </div>

                <div className="ms-3 mb-3 mt-3">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date"
                      value={date}
                      shouldDisableDate={disablePrevDates(startDate)}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>

                <label className="formMiddle"> Add Criteria</label>
                <hr className="hr2" />

                {criteria.map((criteriaNew) => (
                  <div key={criteriaNew.id}>
                    <TextField
                      className="ms-3"
                      name="criteriaName"
                      label="Criteria Name"
                      required
                      variant="outlined"
                      value={criteriaNew.criteriaName}
                      onChange={(event) =>
                        handleChangeInput(criteriaNew.id, event)
                      }
                    />
                    <TextField
                      name="marksAllocation"
                      type="number"
                      label="Marks Allocation"
                      className="ms-4 mb-3"
                      variant="outlined"
                      required
                      value={criteriaNew.marksAllocation}
                      onChange={(event) =>
                        handleChangeInput(criteriaNew.id, event)
                      }
                    />
                    <IconButton
                      disabled={criteria.length === 1}
                      onClick={() => handleRemoveFields(criteriaNew.id)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton
                      disabled={criteria.marksAllocation >= totalMarks}
                      onClick={handleAddFields}
                    >
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
          <label className="formTitle"> ADDED CRITERIA</label>
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

            <h5 className="percent">100%</h5>
            <ProgressBar
              style={{ height: "40px" }}
              variant="warning"
              now={sum}
            />
            <h5>{sum}% percent marks allocated </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

// const Menu = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
// `;

// const Layer = styled.div`
//   background-color: white;
//   width: 500px;
//   margin: 20px;
//   text-align: center;
//   line-height: 75px;
//   font-size: 15px;
// `;

// const Form = styled.div`

//     width: 80%;
//     padding: 50px;
//     background:#white;
//     border-radius: 15px;
//     box-shadow: 10px 10px 30px 0;
//     text-align: left;
// `;
