import React, {useState,useEffect,useContext} from "react";
import axios from 'axios';
export default function DisplayRouteRequest() {
  
    const[users,setUsers] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8000/pending/getall").then((res)=>{
            setUsers(res.data.pendingUsers);
            }).catch((err)=>{
                alert(err.message);
             })
    },[])

    
    const setData = (data) => {
        let { _id,name, email,regNumber,specialization,researchArea,role} = data;

        try {
          const register = axios.post('http://localhost:8000/user/accept',{...data})
          swal("Done!", "User successfully added!", "success");
          axios.delete(`http://localhost:8000/pending/delete/${data._id}`)
          window.location.reload(false);
        } catch (err) {
          swal("ERROR!", err.response.data.msg, "error");
        }

}

const handleDelete = (id) => {
    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                 axios.delete(`http://localhost:8000/pending/delete/${id}`)
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                  window.location.reload(false);
                } else {
                    swal("The account is safe!");
                  }
                });
        
    } catch (err) {
        return swal("ERROR!", "Deletion Failed!", "error");
    }
}



    return (
        <div className = "container " style={{width:"100%"}}>

                 <div className="addform1"><br/>
                     <h1 className="tabl-heading mb-4">Pending for Approval </h1></div>
                     
<table className="customers">
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registration Number</th>
                    <th scope="col">Interested Research Area</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                 
          </thead>
         <tbody>
             {users.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.name}</td>
                       <td>{data.email}</td>
                       <td>{data.regNumber}</td>
                       <td>{data.researchArea}</td>
                       <td>{data.role}</td>

                       <td>
  
                         <a className="btn btn-success" onClick={() => setData(data)}>
                            &nbsp;Accept
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" onClick={() => handleDelete(data._id)}>
                            &nbsp;Decline
                         </a>

  
                       </td>
  
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>
     </div>
    )
}