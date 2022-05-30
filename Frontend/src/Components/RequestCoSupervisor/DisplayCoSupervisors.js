import React,{useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function DisplayCoSupervisors(){
    let navigate = useNavigate();
    const [RequestCoSupervisors,setRequestCoSupervisors] = useState([]);
    useEffect(()=>{
        getRequestSV();
    },[]);

    const getRequestSV = async ()=>{
        const response = await axios.get("http://localhost:8070/requestSV");
        setRequestCoSupervisors(response.data)
    }
    const setCData = (data) => {
        let { _id } = data;

        localStorage.setItem("rid", _id);
        navigate("/updateCoSupervisorStatus");
    };
    return(
        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <table className="table table-bordered table-striped table-responsive-stack">
                        <tr>
                            <th scope="col">Request No </th>
                            <th scope="col">Research Supervisor </th>
                            <th scope="col">Research Category </th>
                            <th scope="col">Group ID </th>
                            <th scope="col">Group Leader Email</th>
                            <th scope="col">Research Topic Name </th>
                            <th scope="col">Comments   </th>
                            <th scope="col">Co-Supervisor </th>
                            <th scope="col">Request Status   </th>
                            <th scope="col">Action </th>
                        </tr>

                        <tbody>
                        {RequestCoSupervisors.map((data, index)=>(
                            <tr key ={index}>
                                <td>{index + 1}</td>
                                <td>{data.researchSupervisor}</td>
                                <td>{data.researchCategory}</td>
                                <td>{data.groupID}</td>
                                <td>{data.groupLeaderEmail}</td>
                                <td>{data.researchTopicName}</td>
                                <td>{data.comments}</td>
                                <td>{data.coSupervisor}</td>
                                <td>{data.coSupervisorStatus}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        disabled={
                                            data.coSupervisorStatus === "Accepted" ||
                                            data.coSupervisorStatus === "Rejected"
                                        }
                                        onClick={() => setCData(data)}
                                    >
                                        &nbsp;update
                                    </button>
                                </td>

                                <td>
                                    <button
                                        className="btn btn-info ms-3"
                                        disabled={
                                            data.coSupervisorStatus === "pending" ||
                                            data.coSupervisorStatus === "Rejected"
                                        }
                                        onClick={() => setDataCoVisor(data)}
                                    >
                                        &nbsp;Request Co-Supervisor
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

</div>



)

}