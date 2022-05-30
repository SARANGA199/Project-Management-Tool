import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { GlobalState } from "../../GlobalState";

export default function DisplayChats() {
  const state = useContext(GlobalState);
  const [crrUser, setCrrUser] = state.UserAPI.crrUser;
  const [groupId, setGroupId] = useState("");

  useEffect(() => {
    const email = crrUser.email;
    console.log(email);

    async function getForum() {
      const forum = await axios
        .get(`http://localhost:8070/member/${email}`)
        .then((res) => {
          console.log(res.data);
          setGroupId(res.data.GroupID);
        })
        .catch((err) => {
          swal("Error", "Error in fetching data", "error");
        });
    }

    getForum();
  });

  console.log(groupId);
  return <div></div>;
}
