import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import './Styles/profile.css';
import { GlobalState } from '../../GlobalState';

function Profile() {

    const state = useContext(GlobalState)
    const [isLogged,setIsLogged ] = state.UserAPI.isLogged
    const [isAdmin,setIsAdmin ] = state.UserAPI.isAdmin
    const [token] = state.token
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState();
    const [email,setEmail] = useState();
    const [regNumber,setRegNumber]= useState();
    const [specialization,setSpecialization]= useState();
    const [researchArea,setResearchArea]= useState();
    const [role,setRole,]= useState();

    useEffect(() => {

        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'));
        setRegNumber(localStorage.getItem('RegistrationNo'));
        setSpecialization(localStorage.getItem('Specialization'))
        setResearchArea(localStorage.getItem('InterestedResearchArea'));
        setRole(localStorage.getItem('Role'));

    },[] );

    // const updateInfo = () => {
    //     try {
    //         const up = axios.patch('http://localhost:8000/user/update', {
    //             name: name ? name : crrUser.name,
    //             image: image ? image : crrUser.image
    //         },{
    //             headers: {Authorization: token}
    //         })

    //         swal("Done!", "Updated Success!", "success");
    //     } catch (err) {
    //         return swal("ERROR!", "Updated Failed!", "error");
    //     }
    // }

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

        let ans = window.confirm("Are you really wanted to update ?");

        if(ans){

        axios.put(`http://localhost:8070/routeOrder/updateOrderRoute/${orderId}`,newRoute).then(()=>{

            alert("Route Updated Successfully");
           
            history.push('/routeOrder');
    
         }).catch((err)=>{
    
            alert(err);
         })
          
         
        }   
                 

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
                    <input type="text" name="regNumber" id="regNumber" defaultValue={email}
                    placeholder="Registration number" onChange={e=>{setEmail(e.target.value);}}/>
                </div>
                </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" defaultValue={regNumber}
                    placeholder="Your email address" onChange={e=>{setRegNumber(e.target.value);}}/>
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
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" defaultValue={role}
                    placeholder="Your email address" onChange={e=>{setRole(e.target.value);}}/>
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