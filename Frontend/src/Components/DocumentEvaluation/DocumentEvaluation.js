import React, { useEffect, useState } from "react";
import axios from "axios";
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
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import './docEvaluation.css';
import { useNavigate } from "react-router-dom";

function DocEvaluation() {

    let navigate = useNavigate();
    const [criteria, setCriteria] = useState([
      { id: uuidv4(), criteriaName: "", marksAllocation: "", marks: "" },
    ]);
    const [marksn, setMarks] = useState(0);
    const [document, setDocument] = useState("");
    const [projectId, setProjectId] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [marks, setTotal] = useState("");
    const [mid, setMid] = useState("");


    useEffect(() => {
        let type = localStorage.getItem("typeName");
        setProjectId(localStorage.getItem("groupID"));
        setDocument(localStorage.getItem("SubmitDoc"));
        setMid(localStorage.getItem("mid"));
    
        axios
          .get(`http://localhost:8070/markings/presentations/${type}`)
          .then((res) => {
            setCriteria(res.data.criteria);
            setSpecialization(res.data.specialization);
            setTotal(res.data.totalMarks);
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
    
      var totalMarks = 0;
    
      const submitData = async (e) => {
        e.preventDefault();
        console.log(criteria);
        totalMarks = criteria
          .map((data) => Number(data.marks.replace("$", "")))
          .reduce((prev, curr) => prev + curr, 0);
        setMarks(totalMarks);
    
        let evaluateStatus = "Evaluated";
    
        const value = {
          evaluateStatus,
        };
    
        const update = await axios
          .put(`http://localhost:8070/stdSubmitDoc/${mid}`, value)
          .then(() => {})
          .catch((err) => {
            swal(err);
          });
    
        const MarksDetails = {
          projectId,
          specialization,
          totalMarks,
          criteria,
        };
        await axios
          .post("http://localhost:8070/presentationMarks/", MarksDetails)
          .then(() => {
            swal("Done!", "Marks added successfully!", "success");
            navigate("/");
          })
          .catch((err) => {
            alert(err);
          });
      };
    
      const getTotal = () => {
        var sum = criteria
          .map((data) => Number(data.marks.replace("$", "")))
          .reduce((prev, curr) => prev + curr, 0);
        setMarks(sum);
      };

    return (
        <>
        <div className="topic-containerPre">
        <div className="leftCom">
          <label className="formTitlePre">
            {" "}
            EVALUATE
            <br /> DOCUMENTS
          </label>
          </div>
        <div className="docEval_page">
            <div className="col-left">
            <div className='groupdoccard'>
                <h2>Document Details</h2><br/>

                <div className="form-group">
                    <label htmlFor="Gid">Group ID</label>
                    <input type="text" name="Gid" id="Gid"
                    placeholder="ID of the group" disabled/>
                </div><br/>

                <div className="form-group">
                    <label htmlFor="Gmem">Group Leader</label>
                    <input type="text" name="leader" id="leader" disabled/>
                </div><br/>

                <div className="form-group">
                    <label htmlFor="Tname">Type Name</label>
                    <input type="text" name="Tname" id="Tname"
                    placeholder="Name of the Topic" disabled/>
                </div>
                <br/>
                <div className="ms-3 mt-4">
              <a href={document} className="btn btn-warning btn-lg">
                Student Presentation <DownloadOutlinedIcon />
              </a>
            </div>
                </div>
            </div>

            <div className="col-right">

            <div className="map1">
          <div className="getMarkingBtn">
            <button
              className="btn btn-warning ms-3"
              onClick={() => getMarkingScheme(specialization, marks, criteria)}
            >
              <DownloadOutlinedIcon /> &nbsp;Marking Scheme
            </button>
          </div>
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
              className="btn btn-outline-warning btn-lg ms-3"
              variant="contained"
              onClick={submitData}
              type="submit"
            >
              SEND <SendIcon>send</SendIcon>{" "}
            </button>
          </div>
          <div>
            <div className="totalMark">Total Marks : {marksn}</div>
            <br/>
            <button
              className="btn btn-warning ms-3"
              variant="contained"
              onClick={getTotal}
              type="submit"
            >
              Generate Total Marks
            </button>
            <br />
          </div>
        </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default DocEvaluation