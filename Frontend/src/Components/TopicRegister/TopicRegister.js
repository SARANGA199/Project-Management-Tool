import React, {useEffect, useState} from "react";
import axios from "axios";
import swal from "sweetalert";


const TopicRegister = ()=>{
    const[topicName,setTopicName] = useState("");
    const[topicCategory,setTopicCategory] = useState("");
    const[groupID,setGroupID] = useState("");
    const[groupLeaderEmail,setGroupLeaderEmail] = useState("");
    const[topicDescription,setTopicDescription] = useState("");

    const [groupDetails, setGroupDetails] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8070/members")
            .then((res) => {
                setGroupDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    async function saveTopic(e){
        e.preventDefault();
        const data = {
            topicName,
            topicCategory,
            groupID,
            groupLeaderEmail,
            topicDescription
        }
        const promise = await axios.post("http://localhost:8070/topicRegister",data).then((res)=>{
            if(res.status = 201) {
                swal("Done!", "Request Send to the Supervisor!", "success");
            }}).catch((err)=>{
            alert(err);
        });

    }


    return(
        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <h1>
                        <center>Register Topics</center>
                    </h1>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <hr/>
                        </div>
                    </div>
                    <form onSubmit={saveTopic}>
                        <div className="row">

                            <div className="col-md-12">
                                <label>Research Topic Name : </label>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={topicName}
                                           onChange={e => setTopicName(e.target.value)} required/>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="row">

                            <div className="col-md-6">
                                <label>Research Category : </label>
                                <div className="form-group">
                                    <select className="form-select" aria-label="Default select example" value={topicCategory} onChange={e => setTopicCategory(e.target.value)}>
                                        <option selected>Select Category</option>
                                        <option  value={"Machine Learning"}>Machine Learning</option>
                                        <option  value={"Computer Architecture"}>Computer Architecture</option>
                                        <option  value={"Artificial Intelligence"}>Artificial Intelligence</option>
                                        <option  value={"Robotics"}>Robotics</option>
                                        <option  value={"System and Networking"}>System and Networking</option>
                                        <option  value={"Data Science"}>Data Science</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="row">

                            <div className="col-md-6">
                                <label>Group ID : </label>
                                <div className="form-group">
                                        <select className="form-select" aria-label="Default select example" value={groupID} onChange={e => setGroupID(e.target.value)}>
                                        {groupDetails.map((data, index) => (
                                            <option key={index} value={data.GroupID}>
                                                {data.GroupID}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>Group Leader Email : </label>
                                <div className="form-group">
                                    <input type="email" className="form-control" value={groupLeaderEmail}
                                           onChange={e => setGroupLeaderEmail(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="row">

                            <div className="col-md-12">
                                <label>Brief Description of the Research : </label>
                                <div className="form-group">
                                    <textarea class="form-control" className="form-control" value={topicDescription}
                                           onChange={e => setTopicDescription(e.target.value)} required/>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <center>
                                <button type="submit" className="btn btn-warning">Submit</button>
                            </center>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default TopicRegister;