import React, {useState} from "react";
import axios from "axios";
import FileInput from "../template/FileInput/fileInput.jsx"
import submi from "../../submi.png";
import swal from "sweetalert";
// import './topic.css';



export default function TopicSubmitDoc() {


    const [data, setData] = useState({
        groupID: "",
        groupLeaderName: "",
        groupLeaderEmail: "",
        submissionType: "",
        topicSubmitDoc: "",
    });

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };


    const handleInputState = (name, value) => {
        setData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = process.env.REACT_APP_API_URLT1 + "/addTopicDoc"
            const {data: res} = await axios.post(url, data).then(() => {
                swal("Document added successful");

            })

        } catch (error) {
            await swal(`Something went wrong !!!`);
        }
    };

    return (



        <div className="container">
            <br/>
            <div className="card">
                <div className="card-body">
                <br/>
                    <center>
                        <h1>Submit Topic Document</h1>
                        <hr/>
                    </center>


                            <div className="row">
                                <div className="col-sm-6">

                                            <div className="card">
                                                <img className="card-img-top" src={submi} alt="Card image cap"/>
                                                    <div className="card-body">
                                                    </div>
                                            </div>
                                            {/*<div className="cardImg" >*/}
                                            {/*    /!*<img className="card-Img" src={submi} alt="Card image cap"/>*!/*/}
                                            {/*        <div className="card-body">*/}
                                            {/*        </div>*/}
                                            {/*</div>*/}


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

                                                    <label>Add comments : </label>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" value={data.submissionComments}
                                                               name="submissionComments"
                                                               onChange={handleChange}/>
                                                    </div>

                                                    <FileInput
                                                        name="topicSubmitDoc"
                                                        label="Choose Document"
                                                        handleInputState={handleInputState}
                                                        type="document"
                                                        value={data.topicSubmitDoc}
                                                    />
                                                <br/>
                                                <div>
                                                    <center>
                                                        <button type="submit" className="btn btn-warning">Upload Document</button>
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