import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Styles/profile.css';
import { id } from 'date-fns/locale';

function Profile() {

    const [id,setId] = useState();
    const [name, setName] = useState();
    const [email,setEmail] = useState();
    const [regNumber,setRegNumber]= useState();
    const [specialization,setSpecialization]= useState();
    const [researchArea,setResearchArea]= useState();
    const [role,setRole,]= useState();

    useEffect(() => {

        setId(localStorage.getItem('uid'));
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setRegNumber(localStorage.getItem('RegistrationNo'));
        setSpecialization(localStorage.getItem('Specialization'));
        setResearchArea(localStorage.getItem('InterestedResearchArea'));
        setRole(localStorage.getItem('Role'));

    },[] );

    function submitData(e) {
        e.preventDefault();
        const newRoute = {
              
            name,
            email,
            regNumber,
            specialization,
            researchArea,
            role
        }
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              axios.put(`http://localhost:8070/user/updateUsr/${id}`,newRoute)
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          }).catch((err)=>{
    
            alert(err);
         })
      
    }

    return (
        <>
        <div className="profContainer">
        <div className="profLeft">
          <div className="profTop">
            UPDATE <br />
            USER <br />
            PROFILE
          </div>
        </div>
        <div className="profile_page">
            <div className="col-left">
            <form onSubmit={submitData}  className="form">
                <div className='card1'>
                <h2>Update</h2>
                <br/>
                <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" defaultValue={name}
                    placeholder="Your name" onChange={e=>{setName(e.target.value);}} />
                </div>
                </div>
                </div>
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="regNumber">Registration Number</label>
                    <input type="text" name="regNumber" id="regNumber" defaultValue={regNumber}
                    placeholder="Registration number" onChange={e=>{setRegNumber(e.target.value);}}/>
                </div>
                </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" defaultValue={email}
                    placeholder="Your email address" onChange={e=>{setEmail(e.target.value);}}/>
                </div>
                </div>
                </div>

                <div className="col-md-6 mb-4">
                <div className="form-outline">
                {role ==='Student'?                
                <div className="form-group">
                    <label htmlFor="spec">Specialization</label>
                    <input type="text" name="spec" id="spec" defaultValue={specialization} onChange={e=>{setSpecialization(e.target.value);}}
                    placeholder="Specialization" />
                </div>
                :
                <div className="form-group">
                    <label htmlFor="rarea">Research Area</label>
                    <input type="text" name="rarea" id="rarea" defaultValue={researchArea} onChange={e=>{setResearchArea(e.target.value);}}
                    placeholder="Interested research area" />
                </div>
                }
                </div>
                </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="role">Email</label>
                    <input type="text" name="role" id="role" defaultValue={role}
                    placeholder="Your role" onChange={e=>{setRole(e.target.value);}}/>
                </div>

                <button>Update</button>
                </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Profile