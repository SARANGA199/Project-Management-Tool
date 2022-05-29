import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {isLength, isMatch} from '../utils/validation/Validation.js'
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

    // useEffect(() => {
    //     if(isAdmin){
    //         fetchAllUsers(token).then(res =>{
    //             dispatch(dispatchGetAllUsers(res))
    //         })
    //     }
    // },[token, isAdmin, dispatch, callback])

    // const handleChange = e => {
    //     const {name, value} = e.target
    //     setData({...data, [name]:value, err:'', success: ''})
    // }

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
            const res = await axios.post('http://localhost:8000/api/upload_image', formData, {
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
            const update = axios.patch('http://localhost:8000/user/update', {
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

    // const updatePassword = () => {
    //     if(isLength(password))
    //         return setData({...data, err: "Password must be at least 6 characters.", success: ''})

    //     if(!isMatch(password, cf_password))
    //         return setData({...data, err: "Password did not match.", success: ''})

    //     try {
    //         axios.post('/user/reset', {password},{
    //             headers: {Authorization: token}
    //         })

    //         setData({...data, err: '' , success: "Updated Success!"})
    //     } catch (err) {
    //         setData({...data, err: err.response.data.msg , success: ''})
    //     }
    // }

    return (
        <>
        <div>
            {loading && <h3>Loading.....</h3>}
        </div>
        <div className="profile_page">
            <div className="col-left">
                <div className='card'>
                <h2>User Profile</h2>

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
                    <input type="text" name="name" id="name" value={crrUser.name}
                    placeholder="Your name"  />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Registration Number</label>
                    <input type="text" name="regNo" id="regNo" value={crrUser.regNumber}
                    placeholder="Registration number"  />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                    placeholder="Your email address" disabled value={crrUser.email}/>
                </div>

                {crrUser.role ==='Student'?                
                <div className="form-group">
                    <label htmlFor="password">Specialization</label>
                    <input type="text" name="spec" id="spec" value={crrUser.specialization} 
                    placeholder="Specialization" />
                </div>
                :
                <div className="form-group">
                    <label htmlFor="password">Interested Research Area</label>
                    <input type="text" name="rarea" id="rarea" value={crrUser.researchArea} 
                    placeholder="Interested research area" />
                </div>
                }

                <button onClick={updateInfo}>Update</button>
                </div>
            </div>

            <div className="profile_page">
                <div className="col-right">
                <div className='card'>
                    <h2>Update Password</h2>
                
                    <div className="form-group">
                        <label htmlFor="name">Existing Password</label>
                        <input type="text" name="name" id="name" 
                        placeholder="your existing password"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">New Password</label>
                        <input type="email" name="email" id="email" 
                        placeholder="new password" disabled />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="password" id="password"
                        placeholder="repeat your new password"   />
                    </div>

                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile