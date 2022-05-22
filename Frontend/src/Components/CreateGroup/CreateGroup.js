import React ,{ useState } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";

const CreateGroup = ()=>{

    //const history = useHistory();

    const[leaderName,setLeaderName] = useState("");
     const[leaderID,setLeaderID] = useState("");
     const[leaderEmail,setLeaderEmail] = useState("");

     const[Member2Name,setMember2Name] = useState("");
     const[Member2ID,setMember2ID] = useState("");
     const[Member2Email,setMember2Email] = useState("");

     const[Member3Name,setMember3Name] = useState("");
     const[Member3ID,setMember3ID] = useState("");
     const[Member3Email,setMember3Email] = useState("");

     const[Member4Name,setMember4Name] = useState("");
     const[Member4ID,setMember4ID] = useState("");
     const[Member4Email,setMember4Email] = useState("");

 
     async function saveUser(e){
        e.preventDefault();
        const data ={
            leaderName,
                leaderID,
                leaderEmail,
                Member2Name,
                Member2ID,
                Member2Email,
                Member3Name,
                Member3ID,
                Member3Email,
                Member4Name,
                Member4ID,
                Member4Email
        }
        const promise = await axios.post("http://localhost:4000/members",data).then((res)=>{
            if(res.status === 201){
                alert("Post Added successfully");
                // history.push('/display');

            }}).catch((err)=>{

                alert(err);
            });
        }
        return(
            <div class = "container">
                <br/>
                <div className="card">
                    <div className="card-body">
                <h1><center>Create Groups</center></h1>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col">
                               <b>
                                   <font color="red">
                                       *Required
                                   </font>
                               </b>
                                <hr/>
                            </div>
                        </div>
                        <form onSubmit={saveUser}>
                        <div class="row">

                            <div className="col-md-3">
                                <label>Group Leader Name : <font color="red">*</font> </label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={leaderName} onChange={e=> setLeaderName(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 2 Name : <font color="red">*</font> </label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={Member2Name} onChange={e=> setMember2Name(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 3 Name : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={Member3Name} onChange={e=> setMember3Name(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 4 Name : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={Member4Name} onChange={e=> setMember4Name(e.target.value)} required/>
                                </div>
                            </div>

                        </div>

                        <br/>

                        <div class="row">

                            <div className="col-md-3">
                                <label>Group Leader Student ID : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={leaderID} onChange={e=> setLeaderID(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 2 Student ID : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={Member2ID} onChange={e=> setMember2ID(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 3 Student ID : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={Member3ID} onChange={e=> setMember3ID(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 4 Student ID : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text"  className="form-control" value={Member4ID} onChange={e=> setMember4ID(e.target.value)} required/>
                                </div>
                            </div>

                        </div>

                        <br/>

                        <div class="row">

                            <div className="col-md-3">
                                <label>Group Leader Email :<font color="red">*</font> </label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={leaderEmail} onChange={e => setLeaderEmail(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 2 Email : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={Member2Email} onChange={e => setMember2Email(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 3 Email : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={Member3Email} onChange={e => setMember3Email(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label>Member 4 Email : <font color="red">*</font></label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={Member4Email} onChange={e => setMember4Email(e.target.value)} required/>
                                </div>
                            </div>

                        </div>

                        <br/>

                        <div class="row">
                            <center>
                                <button type="submit" className="btn btn-warning">Submit</button>
                            </center>
                        </div>

                        </form>

                    </div>
                </div>
            </div>

        )

}

export default CreateGroup;