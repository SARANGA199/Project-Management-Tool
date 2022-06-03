import React, {useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
// import {useNavigate} from "react-router-dom";

export const RequestSupervisor = ()=>{
    // let navigate = useNavigate();
    const[researchSupervisor,setResearchSupervisor] = useState("");
    const[researchCategory,setResearchCategory]=useState("");
    const[groupID,setGroupID]=useState("");
    const[groupLeaderEmail,setGroupLeaderEmail]=useState("");
    const[researchTopicName,setResearchTopicName]=useState("");
    const[comments,setComments]=useState("");
    const [supervisor, setSupervisor] = useState([]);
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

    const setSupervisorData = async () => {

        //setResearchCategory(data)
        axios
            .get(`http://localhost:8070/user/infoSupervisor/${researchCategory}`)
            .then((res) => {
                setSupervisor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    async function saveRequest(e){
        e.preventDefault();
        const data = {
            researchSupervisor,
            researchCategory,
            groupID,
            groupLeaderEmail,
            researchTopicName,
            comments
        }
        const promise = await axios.post("http://localhost:8070/requestSV",data).then((res)=>{
            if(res.status = 201) {
                swal("Done!", "Request Send to the Supervisor!", "success");
                // navigate("/displayRequests")
            }}).catch((err)=>{
            alert(err);
        });
    }
    const handleCategory = (event)=>{
        setResearchCategory(event.target.value);
    }

    const handleSupervisor = (event)=>{
        setResearchSupervisor(event.target.value);
    }

    setSupervisorData();

    return(

        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <h1>
                        <center>Request Supervisors</center>
                    </h1>
                </div>
            </div>

            <div className="card">
                <div className="card-body">

                    <form onSubmit={saveRequest}>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-md-12">
                                            <label>Research Category : </label>
                                            <div className="form-group">
                                                <select className="form-select" aria-label="Default select example" value={researchCategory} onChange={e => setResearchCategory(e.target.value)}>
                                                    <option selected>Select Category</option>
                                                    <option  value={"Machine Learning"}>Machine Learning</option>
                                                    <option  value={"Computer Architecture"}>Computer Architecture</option>
                                                    <option  value={"Artificial Intelligence"}>Artificial Intelligence</option>
                                                    <option  value={"Robotics"}>Robotics</option>
                                                    <option  value={"System and Networking"}>System and Networking</option>
                                                    <option  value={"Data Science"}>Data Science</option>
                                                </select>
                                            </div>
                                           <br/>
                                            <label>Research Supervisor : </label>
                                            <div className="form-group">
                                                <select className="form-select" aria-label="Default select example" value={researchSupervisor} onChange={e => setResearchSupervisor(e.target.value)}>

                                                    {supervisor.map((data, index) => (
                                                        <option key={index} value={data.name}>{data.name}</option>
                                                    ))}

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label> Research Supervisor :</label>
                                                <div className="form-group">
                                                    <input type="text"  className="form-control" value={researchSupervisor} onChange={handleSupervisor} disabled={true}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <label> Research Category :</label>
                                                <div className="form-group">
                                                    <input type="text"  className="form-control" value={researchCategory} onChange={handleCategory} disabled={true}/>
                                                </div>
                                            </div>

                                        </div>

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
                                                <label> Group Leader Email :</label>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" value={groupLeaderEmail} onChange={e => setGroupLeaderEmail(e.target.value)} required/>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="row">

                                            <div className="col-md-12">
                                                <label>Research Topic Name : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={researchTopicName} onChange={e => setResearchTopicName(e.target.value)} required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-md-12">
                                                <label>Add Comments : </label>
                                                <div className="form-group">
                                                    <textarea class="form-control" className="form-control"
                                                              value={comments}
                                                              onChange={e => setComments(e.target.value)}/>
                                                </div>

                                            </div>
                                            <br/>
                                        </div>

                                             <br/>
                                        <div className="row">
                                            <center>
                                                <button type="submit" className="btn btn-warning">send</button>
                                            </center>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

