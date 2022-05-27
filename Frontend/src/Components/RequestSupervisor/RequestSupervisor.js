import React, {useState} from "react";
import axios from "axios";

export const RequestSupervisor = ()=>{
    const[researchSupervisor,setResearchSupervisor] = useState("");
    const[researchCategory,setResearchCategory]=useState("");
    const[groupID,setGroupID]=useState("");
    const[groupLeaderEmail,setGroupLeaderEmail]=useState("");
    const[researchTopicName,setResearchTopicName]=useState("");
    const[comments,setComments]=useState("");



    async function saveRequest(e){
        e.preventDefault();
        const data = {
            researchSupervisor,
            researchCategory,
            groupID,
            groupLeaderEmail,
            researchTopicName,
            comments
        }
        const promise = await axios.post("http://localhost:8070/requestSV",data).then((res)=>{
            if(res.status = 201) {
                alert("Post Added successfully");
            }}).catch((err)=>{
            alert(err);
        });
    }
    const handleCategory = (event)=>{
        setResearchCategory(event.target.value);
    }

    return(

        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <h1>
                        <center>Request Supervisors</center>
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

                    <form onSubmit={saveRequest}>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-12">
                                            <label>Research Category : </label>
                                            <div className="form-group">
                                                <select className="form-select" aria-label="Default select example" value={researchCategory} onChange={e => setResearchCategory(e.target.value)}>
                                                    <option selected>Select Category</option>
                                                    <option value="IOT">IOT</option>
                                                    <option value="DS">DS</option>
                                                </select>
                                            </div>


                                            {researchCategory === "IOT" ? (

                                                    <div className="card">
                                                        <div className="card-body">
                                                    <label>IOT : </label>
                                                        </div>
                                                    </div>
                                            ):(<label>

                                            </label>)
                                            }

                                            {researchCategory === "DS" ? (
                                                <div className="row">
                                                    <label>DS: </label>
                                                </div>
                                            ):(<label>

                                            </label>)
                                            }
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
                                                     <label> Research Supervisor :</label>
                                                     <div className="form-group">
                                                         <input type="text"  className="form-control" value={researchSupervisor} onChange={e => setResearchSupervisor(e.target.value)}/>
                                                     </div>
                                                 </div>

                                                 <div className="col-md-6">
                                                     <label> Research Category :</label>
                                                     <div className="form-group">
                                                         <input type="text"  className="form-control" value={researchCategory} onChange={handleCategory}/>
                                                     </div>
                                                 </div>

                                             </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label> Group ID :</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={groupID} onChange={e => setGroupID(e.target.value)} required/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label> Group Leader Email :</label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={groupLeaderEmail} onChange={e => setGroupLeaderEmail(e.target.value)} required/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col-md-12">
                                                <label>Research Topic Name : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={researchTopicName} onChange={e => setResearchTopicName(e.target.value)} required/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col-md-12">
                                                <label>Add Comments : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={comments} onChange={e => setComments(e.target.value)} required/>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                        <center>
                                            <button type="submit" className="btn btn-warning">send</button>
                                        </center>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*<div className="row">*/}

                        {/*    <div className="col-md-12">*/}
                        {/*        <label>Research Category : </label>*/}
                        {/*            <div className="form-group">*/}
                        {/*                <select className="form-select" aria-label="Default select example">*/}
                        {/*                     <option selected>Select Category</option>*/}
                        {/*                     <option value="IOT">IOT</option>*/}
                        {/*                     <option value="DS">DS</option>*/}
                        {/*                 </select>*/}
                        {/*            </div>*/}
                        {/*    </div>*/}

                        {/*</div>*/}

                        {/*{researchCategory === "IOT" ? (*/}
                        {/*<div className="row">*/}
                        {/*        <label>IOT : </label>*/}
                        {/*</div>*/}
                        {/*    ):(<label>*/}

                        {/*</label>)*/}
                        {/*}*/}

                        {/*{researchCategory === "DS" ? (*/}
                        {/*    <div className="row">*/}
                        {/*        <label>DS : </label>*/}
                        {/*    </div>*/}
                        {/*):(<label>*/}

                        {/*</label>)*/}
                        {/*}*/}


                        {/*</div>):*/}
                        {/*    <div className="row">*/}

                        {/*        <div className="col-md-12">*/}
                        {/*            <label>IOT : </label>*/}
                        {/*            <div className="form-group">*/}

                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        }*/}

                        {/*}*/}



                    </form>
                </div>
            </div>
        </div>

    )
}