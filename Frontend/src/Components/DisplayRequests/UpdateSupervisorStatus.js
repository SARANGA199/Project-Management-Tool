import React, {useEffect, useState} from "react";
import axios from "axios";


export default function UpdateSupervisorStatus() {

    const[researchSupervisor,setResearchSupervisor] = useState("");
    const[researchCategory,setResearchCategory]=useState("");
    const[groupID,setGroupID]=useState("");
    const[groupLeaderEmail,setGroupLeaderEmail]=useState("");
    const[researchTopicName,setResearchTopicName]=useState("");
    const[comments,setComments]=useState("");
    const[supervisorStatus,setSupervisorStatus]=useState("");
    const [requestID, setRID] = useState("");


    useEffect(() => {
        let rid = localStorage.getItem("rid");

        axios
            .get(`http://localhost:8070/requestSV/${rid}`)
            .then((res) => {
                setResearchSupervisor(res.data.researchSupervisor);
                setResearchCategory(res.data.researchCategory);
                setGroupID(res.data.groupID);
                setGroupLeaderEmail(res.data.groupLeaderEmail);
                setResearchTopicName(res.data.researchTopicName);
                setComments(res.data.comments);
                setSupervisorStatus(res.data.supervisorStatus);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err);
            });

        setRID(rid);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const dataNew = {
            researchSupervisor,
            researchCategory,
            groupID,
            groupLeaderEmail,
            researchTopicName,
            comments,
            supervisorStatus,
        };

        await axios
            .put(`http://localhost:8070/requestSV/${requestID}`, dataNew)
            .then(() => {
                e.target.reset();
            })
            .catch((err) => {
                alert(err);
            });
    }

    // async function saveRequest(e){
    //     e.preventDefault();
    //     const data = {
    //         researchSupervisor,
    //         researchCategory,
    //         groupID,
    //         groupLeaderEmail,
    //         researchTopicName,
    //         comments
    //     }
    //     const promise = await axios.get(`http://localhost:8070/requestSV/${rid}`,data).then((res)=>{
    //         if(res.status = 201) {
    //             alert("Post Added successfully");
    //         }}).catch((err)=>{
    //         alert(err);
    //     });
    // }
    // const handleCategory = (event)=>{
    //     setResearchCategory(event.target.value);
    // }

    return(
        <div>
            <div className="container">
                <br/>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <h5 className="card-title">form</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <label> Research Supervisor :</label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={researchSupervisor} onChange={e => setResearchSupervisor(e.target.value)} disabled={true}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label> Research Category :</label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={researchCategory} onChange={e => setResearchCategory(e.target.value)} disabled={true}/>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label> Group ID :</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={groupID} onChange={e => setGroupID(e.target.value)} disabled={true}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label> Group Leader Email :</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={groupLeaderEmail} onChange={e => setGroupLeaderEmail(e.target.value)} disabled={true}/>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6">
                                <label>Research Topic Name : </label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={researchTopicName} onChange={e => setResearchTopicName(e.target.value)} disabled={true}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>Request Status : </label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={supervisorStatus} onChange={e => setSupervisorStatus(e.target.value)} />
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-12">
                                <label>Add Comments : </label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={comments} onChange={e => setComments(e.target.value)} disabled={true}/>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <center>
                                <button type="submit" className="btn btn-warning">send</button>
                            </center>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
