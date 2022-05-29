import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [crrUser, setCrrUser] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get("http://localhost:8070/user/info", {
            headers: { Authorization: token },
          });

          setCrrUser(res.data);
          setIsLogged(true);
          res.data.role == "Admin" ? setIsAdmin(true) : setIsAdmin(false);
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
    crrUser: [crrUser, setCrrUser],
  };
}

export default UserAPI;
