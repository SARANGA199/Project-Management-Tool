import React, {useState,useEffect,useContext} from "react";
import axios from 'axios';
export default function DisplayRouteRequest() {
  




    const[profile,setprofile] = useState([]);

    useEffect(()=>{
            
        axios.get("http://localhost:8070/user/all_users").then((res)=>{
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
                 axios.delete(`http://localhost:8070/user/delete/${id}`)
                swal("Poof! Selected account has been deleted!", {
                    icon: "success",
                  });
                  window.location.reload(false);
                } else {
                    swal("User account is safe!");
                  }
                });
        
    } catch (err) {
        return swal("ERROR!", "Updated Failed!", "error");
    }
}


const filterData = (prof,searchkey) =>{

  const result= prof.filter((profile) =>
  profile.name.toLowerCase().includes(searchkey) ||
  profile.name.includes(searchkey) ||
  profile.regNumber.toLowerCase().includes(searchkey) ||
  profile.regNumber.includes(searchkey) ||
  profile.role.toLowerCase().includes(searchkey) ||
  profile.role.includes(searchkey)
  )

  setprofile(result)
}


 function hancdleSearchArea(e) {
       
 const searchkey = e.currentTarget.value;

 axios.get("http://localhost:8070/user/all_users").then((res)=>{
         if(res.data.success){
           filterData(res.data.existingUsers,searchkey)
         }
 });

}

    return (
        <div className = "container " style={{width:"100%"}}>
          <br/>
          <div className="allusers">
          <div className="row">
               <h4> Search here </h4>
              <div className="col-lg-12  mt-2 mb-2">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="search...( name, registration no, role)"
                    name="search"
                    onChange={hancdleSearchArea}>
                      
                    </input>
                  
              </div>
              </div>
            </div>

                 <div className="addform1">
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
  
                         <a className="btn btn-warning" href={`/updateuser/${data._id}`} onClick={() => setData(data)}>
                            &nbsp;Update
                         </a>
                         &nbsp;
                         <a className="btn btn-danger" onClick={() => handleDelete(data._id)}>
                            &nbsp;Delete
                         </a>

  
                       </td>
  
                    </tr>
                  
  
             ))}
             
           
           </tbody> 
  
        </table>
     </div>
    )
}