import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSupervisor, setIsSupervisor] = useState(false);
  const [isPanelMember, setIsPanelMember] = useState(false);
  const [isCoSupervisor, setisCoSupervisor] = useState(false);
  const [crrUser, setCrrUser] = useState([]);

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    console.log(token)
                    const res = await axios.get('http://localhost:8070/user/info', {
                        headers: {Authorization: token}
                    })

          setCrrUser(res.data);
          setIsLogged(true);
          res.data.role == "Admin" ? setIsAdmin(true) : setIsAdmin(false);
          res.data.role == "Supervisor" ? setIsSupervisor(true) : setIsSupervisor(false);
          res.data.role == "Panel_Member" ? setIsPanelMember(true) : setIsPanelMember(false);
          res.data.role == "Co-Supervisor" ? setisCoSupervisor(true) : setisCoSupervisor(false);
          console.log(res);
        } catch (err) {
          alert(err.response.data.msg);
        }
      };

      getUser();
    }
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    isSupervisor: [isSupervisor, setIsSupervisor],
    isPanelMember: [isPanelMember, setIsPanelMember],
    isCoSupervisor: [isCoSupervisor, setisCoSupervisor],
    crrUser: [crrUser, setCrrUser],
  };
}

export default UserAPI;
