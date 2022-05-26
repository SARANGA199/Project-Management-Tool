import React from "react";
import axios from "axios";

export const RequestSupervisor = ()=>{


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

                            <div className="col-md-12">
                                <label>Research Category : </label>
                                    <div className="form-group">
                                         <select className="custom-select" value={category} onChange={e => setCategory(e.target.value)}>
                                             <option value="IOT">IOT</option>
                                             <option value="DS">DS</option>
                                         </select>
                                    </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}