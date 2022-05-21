import React ,{ useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const CreateGroup = ()=>{

    //const history = useHistory();

    const[leaderName,setLeaderName] = useState("");
     const[leaderID,setLeaderID] = useState("");
     const[leaderEmail,setLeaderEmail] = useState("");

     const[Member2Name,setMember2Name] = useState("");
     const[Member2ID,setMember2ID] = useState("");
     const[Member2Email,setMember2Email] = useState("");

     const[Member3Name,setMember3Name] = useState("");
     const[Member3ID,setMember3ID] = useState("");
     const[Member3Email,setMember3Email] = useState("");

     const[Member4Name,setMember4Name] = useState("");
     const[Member4ID,setMember4ID] = useState("");
     const[Member4Email,setMember4Email] = useState("");

 
     async function saveUser(e){
        e.preventDefault();
        const data ={
            leaderName,
                leaderID,
                leaderEmail,
                Member2Name,
                Member2ID,
                Member2Email,
                Member3Name,
                Member3ID,
                Member3Email,
                Member4Name,
                Member4ID,
                Member4Email
        }
        const promise = await axios.post("http://localhost:4000/members",data).then((res)=>{
            if(res.status === 201){
                alert("Post Added successfully");
                // history.push('/display');

            }}).catch((err)=>{

                alert(err);
            });
        }

    return(
        <><div>ADD USER</div>

        <form onSubmit={saveUser}>

{/* GroupLeader */}
        <div>
            <label >Leader Name:</label>
            <input type="text" value={leaderName} onChange={e=> setLeaderName(e.target.value)}/>
        </div>
        <div>
            <label>ID:</label>
            <input type="text" value={leaderID} onChange={e=> setLeaderID(e.target.value)}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={leaderEmail} onChange={e=> setLeaderEmail(e.target.value)}/>
        </div>
    
{/* Member2 */}
        <div>
            <label>Member2 Name:</label>
            <input type="text" value={Member2Name} onChange={e=> setMember2Name(e.target.value)}/>
        </div>
        <div>
            <label>ID:</label>
            <input type="text" value={Member2ID} onChange={e=> setMember2ID(e.target.value)}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={Member2Email} onChange={e=> setMember2Email(e.target.value)}/>
        </div>

{/* Member3 */}
        <div>
            <label>Member3 Name:</label>
            <input type="text" value={Member3Name} onChange={e=> setMember3Name(e.target.value)}/>
        </div>
        <div>
            <label>ID:</label>
            <input type="text" value={Member3ID} onChange={e=> setMember3ID(e.target.value)}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={Member3Email} onChange={e=> setMember3Email(e.target.value)}/>
        </div>
  
{/* Member4 */}
        <div>
            <label>Member4 Name:</label>
            <input type="text" value={leaderName} onChange={e=> setMember4Name(e.target.value)}/>
        </div>
        <div>
            <label>ID:</label>
            <input type="text" value={leaderID} onChange={e=> setMember4ID(e.target.value)}/>
        </div>
        <div>
            <label>Email:</label>
            <input type="text" value={leaderEmail} onChange={e=> setMember4Email(e.target.value)}/>
        </div>


        <div>
            <button type="submit" className="button is-success">Submit</button>
        </div>
        </form>
        </>
     )

}

export default CreateGroup;