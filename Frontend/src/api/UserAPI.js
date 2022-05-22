import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [crrUser, setCrrUser] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/info', {
                        headers: {Authorization: token}
                    })

                    setCrrUser(res.data)
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true): setIsAdmin(false)
                    console.log(res)

                    setCart(res.data.cart)

                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        crrUser: [crrUser, setCrrUser],

        // history: [history, setHistory]
    }
}

export default UserAPI