import React, {useEffect, useState} from "react";
import axios from "axios";

function GroupList(){

    const[members,setMembers] = useState([]);
    const[GroupID,setGroupID] = useState([]);

    useEffect(()=>{
        getMembers();

    },[]);

    const getMembers = async ()=>{
        const response = await axios.get("http://localhost:8070/members");
        setMembers(response.data)
    }
    // const saveGroupID = async ()=>{
    //     // const response = await axios.post("http://localhost:8070/saveGID");
    //     //
    //     // setGroupIDStatus(response.data)
    //
    //     setGroupIDStatus(e.target.value);



    return(
        <div>
            <div className="container">
                <br/>
                <h1><center>Group Details</center></h1>
                <br/>
                <table className="table table-bordered " >
                    <thead>
                    <tr>
                        <th>No</th>
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
                        <th>Group ID</th>
                        <th>Assign Group ID</th>
                    </tr>
                    </thead>
                    {members.map((data,index)=>(
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
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
                            <td className="table-info">{data.GroupID}</td>
                            <td className="table-info">
                                <div className="form-group">
                                    <input type="text"  className="form-control"   value={GroupID} />
                                </div>
                            </td>

                            <td>{""}
                                <button type="button" className="btn btn-success">Assign</button>
                            </td>

                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>


        </div>
    );
}

export default GroupList;


















{/*    */}
{/*    <table className="table table-bordered "  >*/}



{/*            <tr>*/}
{/*            <th scope="col">No</th>*/}
{/*            <th scope="col">Group</th>*/}
{/*            <th scope="col">Name</th>*/}
{/*            <th scope="col">Student ID</th>*/}
{/*            <th scope="col">Email Address</th>*/}
{/*            </tr>*/}




{/*        /!*<tbody>*!/*/}
{/*            {members.map((data, index) => (*/}
{/*                <td>*/}
{/*                    <tr class="table-secondary" key={index}>*/}
{/*                        <td rowSpan="4">{index + 1}</td>*/}
{/*                        <td >Leader</td>*/}
{/*                        <td  >{data.leaderName}</td>*/}
{/*                        <td >{data.leaderID}</td>*/}
{/*                        <td >{data.leaderEmail}</td>*/}



{/*                        <td >Member 2</td>*/}
{/*                        <td >{data.Member2Name}</td>*/}
{/*                        <td >{data.Member2ID}</td>*/}
{/*                        <td >{data.Member2Email}</td>*/}


{/*                        <td >Member 3</td>*/}
{/*                        <td >{data.Member3Name}</td>*/}
{/*                        <td className="table-success">{data.Member3ID}</td>*/}
{/*                        <td className="table-success">{data.Member3Email}</td>*/}


{/*                        <td className="table-primary">Member 4</td>*/}
{/*                        <td className="table-primary">{data.Member4Name}</td>*/}
{/*                        <td className="table-primary">{data.Member4ID}</td>*/}
{/*                        <td className="table-primary">{data.Member4Email}</td>*/}
{/*                    </tr>*/}
{/*                </td>*/}
{/*            ))}*/}
{/*    </table>*/}
{/*</div></div>*/}
{/*    </div>*/}
{/*</div>*/}
{/*    </div>*/}

{/*);*/}
{/*}*/}

{/*export default UserList;*/}


{/*{members.map((data, index) => (*/}
{/*    <tr key={data._id}>*/}
{/*    <td class="table-warning">Member 2 </td>*/}
{/*    <td class="table-warning">{data.Member2Name}</td>*/}
{/*    <td class="table-warning">{data.Member2ID}</td>*/}
{/*    <td class="table-warning">{data.Member2Email}</td>*/}
{/*    </tr>*/}
{/*))}*/}

{/*{members.map((data, index) => (*/}
{/*    <tr key={data._id}>*/}
{/*    <td class="table-success">Member 3 </td>*/}
{/*    <td class="table-success">{data.Member3Name}</td>*/}
{/*    <td class="table-success">{data.Member3ID}</td>*/}
{/*    <td class="table-success">{data.Member3Email}</td>*/}
{/*    </tr>*/}
{/*))}*/}
{/*{members.map((data, index) => (*/}
{/*    <tr key={data._id}>*/}
{/*    <td class="table-primary">Member 4</td>*/}
{/*    <td class="table-primary">{data.Member4Name}</td>*/}
{/*    <td class="table-primary">{data.Member4ID}</td>*/}
{/*    <td class="table-primary">{data.Member4Email}</td>*/}
{/*    </tr>*/}
{/*))}*/}
{/*</tbody>*/}

{/*oldone*/}

{/*<body>*/}
{/*<table class="table table-bordered table-striped table-responsive-stack" >*/}

{/*    <tr>*/}
{/*        <th scope="col">Group No</th>*/}
{/*        <th scope="col"> </th>*/}
{/*        <th scope="col">Name</th>*/}
{/*        <th scope="col">Student ID</th>*/}
{/*        <th scope="col">Email</th>*/}
{/*    </tr>*/}

{/*    <tbody>*/}
{/*    {members.map((user, index) => (*/}
{/*        <tr key={user._id}>*/}
{/*            <td rowSpan="2">{index + 1}</td>*/}

{/*            <td>{user.name}</td>*/}
{/*            <td>{user.ID}</td>*/}
{/*            <td>{user.email}</td>*/}


{/*        </tr>*/}
{/*    ))}*/}
{/*    </tbody>*/}
{/*    <tr>*/}
{/*        <td rowSpan="2">Row 1 Cell 1</td>*/}
{/*        <td>Row 1 Cell 2</td>*/}
{/*        <td>Row 1 Cell 3</td>*/}
{/*    </tr>*/}
{/*    <tr>*/}
{/*        <td>Row 2 Cell 2</td>*/}
{/*        <td>Row 2 Cell 3</td>*/}
{/*    </tr>*/}
{/*    <tr>*/}
{/*        <td colSpan="3">Row 3 Cell 1</td>*/}
{/*    </tr>*/}
{/*</table>*/}
{/*</body>*/}


