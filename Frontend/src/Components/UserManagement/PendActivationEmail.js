import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ActivationEmail() {
    const {activation_token} = useParams()

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    console.log(activation_token)
                    const res = await axios.post('http://localhost:8070/pending/activation', {activation_token})
                    swal("Good job!", "You clicked the button!", "success").then(() => {
                        window.location.href = "/login"
                    })
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }
            activationEmail()
        }
    },[activation_token])

    return (
        <div className="active_page">
        </div>
    )
}

export default ActivationEmail