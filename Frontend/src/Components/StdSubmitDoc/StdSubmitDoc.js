import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";


export default function StdSubmitDoc (){

const[groupID,setGroupID]= useState("");
const[groupLeaderName,setGroupLeaderName]= useState("");
const[groupLeaderEmail,setGroupLeaderEmail]= useState("");
const[submissionComments,setSubmissionComments]= useState("");

    async function saveDoc(e){
        e.preventDefault();
        const data = {
            groupID,
            groupLeaderName,
            groupLeaderEmail,
            submissionComments,
        }
        const promise = await axios.post("http://localhost:8070/stdSubmitDoc",data).then((res)=>{
            if(res.status == 201) {
                swal("Done!", "Document submitted successfully!", "success");
            }}).catch((err)=>{
            alert(err);
        });
    }

    return(
        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <h1>
                        <center>Submit Document</center>
                    </h1>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    {/*<div className="row">*/}
                    {/*    <div className="col">*/}
                    {/*        <hr/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <form onSubmit={saveDoc}>

                        <div className="row">
                            <div className="col-sm-6">
                                 <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-12">
                                            {/*<img src=" " className="card-img-top" alt="doc"/>*/}
                                            <h1><b>Image</b></h1>
                                        </div>
                                    </div>
                                 </div>
                            </div>



                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                        <div className="col-md-12">
                                        <label>Group ID  : </label>
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={groupID}
                                                   onChange={e => setGroupID(e.target.value)} required/>
                                            </div>
                                        </div>
                                        </div>
                                        <br/>

                                        <div className="row">
                                            <div className="col-md-12">
                                            <label>Group Leader Name : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={groupLeaderName}
                                                        onChange={e => setGroupLeaderName(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>

                                        <div className="row">
                                            <div className="col-md-12">
                                            <label>Group Leader Email : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={groupLeaderEmail}
                                                           onChange={e => setGroupLeaderEmail(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>

                                        <div className="row">
                                            <div className="col-md-12">
                                            <label>Submission Comments : </label>
                                                <div className="form-group">
                                                    <textarea class="form-control" className="form-control" value={submissionComments}
                                                           onChange={e => setSubmissionComments(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>


                                        <div className="row">
                                            <center>
                                                <button type="submit" className="btn btn-warning">Upload Document</button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

        </div>


    )
}