import React, {useState, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {isLength, isMatch} from '../utils/validation/Validation.js'
import TextField from "@mui/material/TextField";
import './Styles/profile.css';
import { GlobalState } from '../../GlobalState';

const initialState = {
    name: '',
    password: '',
    cf_password: '',
}

function Profile() {

    const state = useContext(GlobalState)
    const [isLogged,setIsLogged ] = state.UserAPI.isLogged
    const [isAdmin,setIsAdmin ] = state.UserAPI.isAdmin
    const [crrUser, setCrrUser] = state.UserAPI.crrUser
    const [token] = state.token
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(false)
    const [data, setData] = useState(initialState)
    const {name, password, cf_password} = data


    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }

    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return swal("ERROR!", "No files were uploaded!", "error");

            if(file.size > 1024 * 1024)
                return swal("ERROR!", "Size too large.", "error");

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return swal("ERROR!", "File format is incorrect.", "error");


            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('http://localhost:8070/api/upload_image', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            swal("Done!", "Image upload successfull!", "success");
            setImage(res.data.url)
            
        } catch (err) {
            return swal("ERROR!", err.response.res.msg, "error");
        }
    }

    const updateInfo = () => {
        try {
            const up = axios.patch('http://localhost:8070/user/update', {
                name: name ? name : crrUser.name,
                image: image ? image : crrUser.image
            },{
                headers: {Authorization: token}
            })

            swal("Done!", "Updated Success!", "success");
        } catch (err) {
            return swal("ERROR!", "Updated Failed!", "error");
        }
    }

    const updatePassword = () => {
        if(isLength(password))
            return swal("Warning!", "Password must be at least 6 characters.", "warning");

        if(!isMatch(password, cf_password))
            return swal("ERROR!", "Password did not match.", "error");

        try {
            axios.post('http://localhost:8070/user/reset', {password},{
                headers: {Authorization: token}
            })

            swal("Done!", "Password updated successfully!", "success");
        } catch (err) {
            return swal("ERROR!", "Updated Failed!", "error");
        }
    }

    return (
        <>
        <div>
            {loading && <h3>Uploading Image.....</h3>}
        </div>
        <div className="profContainer">
        <div className="profLeft">
          <div className="profTop">
            MY <br />
            PROFILE
          </div>
        </div>
        <div className="profile_page">
            <div className="col-left">
                <div className='profilecard'>
                <h2>{crrUser.name}</h2>

                <div className="avatar">
                    <img src={image ? image : crrUser.image} alt=""/>
                    <span>
                        <i className="fas fa-camera"></i>
                        <p>Change</p>
                        <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                    </span>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" defaultValue={crrUser.name}
                    placeholder="Your name" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="regNumber">Registration Number</label>
                    <input type="text" name="regNumber" id="regNumber" defaultValue={crrUser.regNumber}
                    placeholder="Registration number" onChange={handleChange} disabled/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                    placeholder="Your email address" disabled defaultValue={crrUser.email}/>
                </div>

                {crrUser.role ==='Student'?                
                <div className="form-group">
                    <label htmlFor="spec">Specialization</label>
                    <input type="text" name="spec" id="spec" defaultValue={crrUser.specialization} disabled
                    placeholder="Specialization" />
                </div>
                :
                <div className="form-group">
                    <label htmlFor="rarea">Interested Research Area</label>
                    <input type="text" name="rarea" id="rarea" defaultValue={crrUser.researchArea} disabled
                    placeholder="Interested research area" />
                </div>
                }

                <button onClick={updateInfo}>Update</button>
                </div>
            </div>

            <div className="profile_page">
                <div className="col-right">
                <div className='profilecard'>
                    <h2>Update Password</h2>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="expass">Existing Password</label>
                        <input type="password" name="expass" id="expass" 
                        placeholder="your existing password"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange}
                        placeholder="new password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cf_password">Confirm Password</label>
                        <input type="password" name="cf_password" id="cf_password" onChange={handleChange}
                        placeholder="repeat your new password"   />
                    </div><br/>
                    <button onClick={updatePassword}>Update Password</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Profile