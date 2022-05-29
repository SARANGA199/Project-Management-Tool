import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
import UserAPI from './api/UserAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{

    const [token, setToken] = useState(false)

    const refreshToken = async () =>{
        const res = localStorage.getItem("refreshtoken")
        // console.log(res)
        setToken(res)
    }

    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    },[])

    const state = {
        token: [token, setToken],
        UserAPI: UserAPI(token)
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}