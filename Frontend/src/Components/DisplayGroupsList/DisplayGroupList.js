import React, {useEffect, useState} from "react";
import axios from "axios";

function GroupList(){

    const[members,setMembers] = useState([]);

    useEffect(()=>{
        getMembers();

    },[]);

    const getMembers = async ()=>{
        const response = await axios.get("http://localhost:8070/members");
        setMembers(response.data)
    }


    return(
        <div>
            <div className="container">
                <br/>
                        <h1><center>Group Details</center></h1>
                        <br/>
                        <table className="table table-bordered table table-dark " >
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Group ID</th>
                                <th>Leader's ID</th>
                                <th>Leader Name</th>
                                <th>Leader Email</th>
                                <th>Member 2 ID</th>
                                <th>Member 2 Name</th>
                                <th>Member 2 Email</th>
                                <th>Member 3 Name</th>
                                <th>Member 3 ID</th>
                                <th>Member 3 Email</th>
                                <th>Member 4 Name</th>
                                <th>Member 4 ID</th>
                                <th>Member 4 Email</th>
                            </tr>
                            </thead>
                            {members.map((data,index)=>(
                                <tbody key={index}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td className="table-secondary">{data.GroupID}</td>
                                        <td className="table-danger">{data.leaderName}</td>
                                        <td className="table-danger">{data.leaderID}</td>
                                        <td className="table-danger">{data.leaderEmail}</td>
                                        <td className="table-warning">{data.Member2Name}</td>
                                        <td className="table-warning">{data.Member2ID}</td>
                                        <td className="table-warning">{data.Member2Email}</td>
                                        <td className="table-success">{data.Member3Name}</td>
                                        <td className="table-success">{data.Member3ID}</td>
                                        <td className="table-success">{data.Member3Email}</td>
                                        <td className="table-primary">{data.Member4Name}</td>
                                        <td className="table-primary">{data.Member4ID}</td>
                                        <td className="table-primary">{data.Member4Email}</td>
                                    </tr>
                                </tbody>

                            ))}
                        </table>
                <br/>
                <br/>
            </div>
        </div>

    );
}

export default GroupList;


