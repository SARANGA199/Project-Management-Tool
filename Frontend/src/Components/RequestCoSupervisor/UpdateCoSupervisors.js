import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function UpdateCoSupervisorStatus() {
  let navigate = useNavigate();
  const [researchSupervisor, setResearchSupervisor] = useState("");
  const [researchCategory, setResearchCategory] = useState("");
  const [groupID, setGroupID] = useState("");
  const [groupLeaderEmail, setGroupLeaderEmail] = useState("");
  const [researchTopicName, setResearchTopicName] = useState("");
  const [comments, setComments] = useState("");
  const [coSupervisor, setCoSupervisor] = useState("");
  const [coSupervisorStatus, setCoSupervisorStatus] = useState("");
  const [requestID, setRID] = useState("");

  useEffect(() => {
    let rid = localStorage.getItem("RID");

    axios
      .get(`http://localhost:8070/requestSV/${rid}`)
      .then((res) => {
        setResearchSupervisor(res.data.researchSupervisor);
        setResearchCategory(res.data.researchCategory);
        setGroupID(res.data.groupID);
        setGroupLeaderEmail(res.data.groupLeaderEmail);
        setResearchTopicName(res.data.researchTopicName);
        setComments(res.data.comments);
        setCoSupervisor(res.data.coSupervisor);
        setCoSupervisorStatus(res.data.coSupervisorStatus);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });

    setRID(rid);
  }, []);

  const setCData = async (coSupervisorStatus) => {
    const newData = {
      coSupervisorStatus,groupID,researchTopicName,coSupervisor,groupLeaderEmail
    };

    const update = await axios
      .put(`http://localhost:8070/request/${requestID}`, newData)
      .then(() => {
        swal(`Co-Supervisor is ${coSupervisorStatus}ed`);
        navigate("/displayCoSupervisors");
      })
      .catch((err) => {
        swal(`Something went wrong !!!`);
      });
  };

  return (
   
        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <h1>
                        <center>Update Request </center>
                    </h1>
                </div>
            </div>

            <div className="card">
                <div className="card-body">



                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-12">

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label> Group ID :</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" value={groupID}  disabled={true}/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label> Group Leader Email :</label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" value={groupLeaderEmail}  disabled={true}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label> Research Category :</label>
                                                    <div className="form-group">
                                                        <input type="text"  className="form-control" value={researchCategory}  disabled={true}/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <label>Research Topic Name : </label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" value={researchTopicName} disabled={true}/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                            <div className="col-md-12">
                                                <label> Research Supervisor :</label>
                                                <div className="form-group">
                                                    <input type="text"  className="form-control" value={researchSupervisor}  disabled={true}/>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Comments : </label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" value={comments} disabled={true}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">form</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label> Research Co-Supervisor :</label>
                                                <div className="form-group">
                                                    <input type="text"  className="form-control" value={coSupervisor}  disabled={true}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label>Request Status :</label>
                                                <div className="form-group">
                                                    <input type="text"  className="form-control" value={coSupervisorStatus} />
                                                </div>
                                            </div>
                                        </div>


                                    </div>


                                    <div className="row">
                                        <div className="col-md-6">
                                            <center>
                                                <button
                                                    type="submit"
                                                    className="btn btn-success btn-lg"
                                                    onClick={() => setCData("Accepted")}
                                                >
                                                    &nbsp;Accept
                                                </button>
                                            </center>
                                        </div>


                                        <div className="col-md-6">
                                            <center>
                                                <button
                                                    type="submit" className="btn btn-danger btn-lg"
                                                    onClick={() => setCData("Rejected")}
                                                >
                                                    &nbsp;Reject
                                                </button>
                                            </center>
                                        </div>


                                    </div>
                                    <br/>

                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
      
  )}

     