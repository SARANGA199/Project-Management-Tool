import React, {useEffect, useState} from "react";
import axios from "axios";

function UserList(){

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
            <div className="card">
                <div className="card-body">
                   Table
                    <table className="table table-bordered "  >



                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Group</th>
                            <th scope="col">Name</th>
                            <th scope="col">Student ID</th>
                            <th scope="col">Email Address</th>
                            </tr>




                        {/*<tbody>*/}
                            {members.map((data, index) => (
                                <td>
                                    <tr class="table-secondary" key={index}>
                                        <td rowSpan="4">{index + 1}</td>
                                        <td class="table-danger">Leader</td>
                                        <td class="table-danger" >{data.leaderName}</td>
                                        <td class="table-danger">{data.leaderID}</td>
                                        <td class="table-danger">{data.leaderEmail}</td>



                                        <td className="table-warning">Member 2</td>
                                        <td className="table-warning">{data.Member2Name}</td>
                                        <td className="table-warning">{data.Member2ID}</td>
                                        <td className="table-warning">{data.Member2Email}</td>


                                        <td className="table-success">Member 3</td>
                                        <td className="table-success">{data.Member3Name}</td>
                                        <td className="table-success">{data.Member3ID}</td>
                                        <td className="table-success">{data.Member3Email}</td>


                                        <td className="table-primary">Member 4</td>
                                        <td className="table-primary">{data.Member4Name}</td>
                                        <td className="table-primary">{data.Member4ID}</td>
                                        <td className="table-primary">{data.Member4Email}</td>
                                    </tr>
                                </td>
                            ))}
                    </table>
                </div></div>
        </div>
    </div>


);
}

export default UserList;


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


