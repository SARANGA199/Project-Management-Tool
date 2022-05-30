import React, {useState,useEffect,useContext} from "react";
import axios from 'axios';
export default function DisplayRouteRequest() {
  




    const[profile,setprofile] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8000/user/all_users").then((res)=>{
                setprofile(res.data.existingUsers);
            }).catch((err)=>{
                alert(err.message);
             })
        

    },[])

    
    const setData = (data) => {
        let { _id,name, email,regNumber,specialization,researchArea,role} = data;

        localStorage.setItem('uid', _id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('RegistrationNo', regNumber);
        localStorage.setItem('Specialization', specialization);
        localStorage.setItem('InterestedResearchArea', researchArea);
        localStorage.setItem('Role', role);

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
                 axios.delete(`http://localhost:8000/user/delete/${id}`)
                swal("Poof! Selected account has been deleted!", {
                    icon: "success",
                  });
                } else {
                    swal("User account is safe!");
                  }
                });
        
    } catch (err) {
        return swal("ERROR!", "Updated Failed!", "error");
    }
}



    return (
        <div className = "container " style={{width:"100%"}}>

                 <div className="addform1"><br/>
                     <h1 className="tabl-heading mb-4">All Users </h1></div>


             
                 {/* <a className="btn btn-warning" 
                            type="button"
                            href={`http://localhost:3000/report`}
                            style={{textDecoration:'none'}}>
                            <i></i>&nbsp;Generate Report
                            </a> */}

      
<table className="customers">
  
          <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Registration Number</th>
                    <th scope="col">Specialization</th>
                    <th scope="col">Interested Research Area</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                 
          </thead>
         <tbody>
             {profile.map((data,index)=>(
                    
                    <tr key={index}>
                       <th scope="row">{index+1}</th>
                       <td>{data.name}</td>
                       <td>{data.email}</td>
                       <td>{data.regNumber}</td>
                       <td>{data.specialization}</td>
                       <td>{data.researchArea}</td>
                       <td>{data.role}</td>
                      

                       <td>
  
                         <a className="btn btn-warning" href={`/editprofile/${data._id}`} onClick={() => setData(data)}>
                            <i className= "fas fa-edit"></i>&nbsp;Update
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" onClick={() => handleDelete(data._id)}>
                            <i className= "fas fa-trash-alt"></i>&nbsp;Delete
                         </a>

  
                       </td>
  
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>
     </div>
    )
}