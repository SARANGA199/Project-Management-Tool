import React, {useState} from "react";
import axios from "axios";
import FileInput from "../template/FileInput/fileInput.jsx";
import swal from "sweetalert";
import submi from "../../submi.png";


export default function StdSubmitDoc() {

    let SubTypeName = localStorage.getItem("SubmissionTypeName");
    const [data, setData] = useState({
        groupID: "",
        
        groupLeaderName: "",
        groupLeaderEmail: "",
        submissionType: "",
        typeName: `${SubTypeName}`,
        submissionComments: "",
        SubmitDoc: "",
    });

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };

    // const handleSubmissionTypeChange = ({currentTarget: input}) => {
    //     setData({...data, [input.name]: input.value});
    // };

    const handleInputState = (name, value) => {
        setData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //const url = process.env.REACT_APP_API_URL + "/addDoc"
            const {data: res} = axios.post(`http://localhost:8070/stdSubmitDoc/addDoc`, data).then(() => {
                console.log(data)
                swal("Document added successful")


            })

        } catch (error) {
            swal(`Something went wrong !!!`);
        }
    };

    return (

        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                    <br/>
                    <center>
                        <h1>Submit  {SubTypeName}</h1>
                        <hr/>
                    </center>



                    <div className="row">
                        <div className="col-sm-6">

                            <div className="card">
                                <img className="card-img-top" src={submi} alt="Card image cap"/>
                                <div className="card-body">
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                                <label>Group ID : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={data.groupID} name="groupID"
                                                           onChange={handleChange}/>
                                                </div>

                                                <label>Group Leader Name : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={data.groupLeaderName}
                                                           name="groupLeaderName"
                                                           onChange={handleChange}/>
                                                </div>

                                                <label>Group Leader Email : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={data.groupLeaderEmail}
                                                           name="groupLeaderEmail"
                                                           onChange={handleChange}/>
                                                </div>
                                                <label>Submission Type : </label>
                                                <div className="form-group">
                                                    <select className="form-select" aria-label="Default select example" name = "submissionType" value={data.submissionType} onChange={handleChange}>
                                                        <option selected>select Submission Type</option>
                                                        <option value="Presentation" >Presentation</option>
                                                        <option value="Documentation">Documentation</option>
                                                    </select>
                                                </div>


                                                <label>Add comments : </label>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value={data.submissionComments}
                                                           name="submissionComments"
                                                           onChange={handleChange}/>
                                                </div>

                                                <FileInput
                                                    name="SubmitDoc"
                                                    label="Choose Document"
                                                    handleInputState={handleInputState}
                                                    type="document"
                                                    value={data.SubmitDoc}
                                                />
                                            <br/>
                                            <div>
                                                <center>
                                                    <button type="submit" className="btn btn-warning">Submit</button>
                                                </center>
                                            </div>

                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <br/>
        </div>

    )
}
