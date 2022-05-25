import React, {useEffect, useState} from "react";
import axios from "axios";

function UserList(){

const[members,setmembers] = useState([]);

useEffect(()=>{
    getMembers();
},[]);

const getMembers = async ()=>{
    const response = await axios.get("https://localhost:8070/members");
    setmembers(response.data)
}

return(
    <div>
        <table className="table table-bordered">
            <thead>

            <tr>
                <th scope="col">No</th>
                <th scope="col">name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Action</th>
            </tr>

            </thead>


            <tbody>
            {members.map((user, index) => (
                <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>

                </tr>
            ))}


            </tbody>
        </table>


        <body>
        <table class="table table-bordered table-striped table-responsive-stack" >

            <tr>
                <th scope="col">Group No</th>
                <th scope="col"> </th>
                <th scope="col">Name</th>
                <th scope="col">Student ID</th>
                <th scope="col">Email</th>
            </tr>

            <tbody>
            {members.map((user, index) => (
                <tr key={user._id}>
                    <td rowSpan="2">{index + 1}</td>

                    <td>{user.name}</td>
                    <td>{user.ID}</td>
                    <td>{user.email}</td>


                </tr>
            ))}
            </tbody>
            <tr>
                <td rowSpan="2">Row 1 Cell 1</td>
                <td>Row 1 Cell 2</td>
                <td>Row 1 Cell 3</td>
            </tr>
            <tr>
                <td>Row 2 Cell 2</td>
                <td>Row 2 Cell 3</td>
            </tr>
            <tr>
                <td colSpan="3">Row 3 Cell 1</td>
            </tr>
        </table>
        </body>
















    </div>
    );
        }

export default UserList;

