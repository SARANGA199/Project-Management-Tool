import React, {useState} from "react";
import axios from "axios";

export const RequestSupervisor = ()=>{
    const[researchSupervisor,setResearchSupervisor] = useState("");
    const[researchCategory,setResearchCategory]=useState("");
    const[groupID,setGroupID]=useState("");
    const[researchTopicName,setResearchTopicName]=useState("");
    const[comments,setComments]=useState("");

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

                    <form onSubmit>

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
                                                <div className="row">
                                                    <label>IOT : </label>
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