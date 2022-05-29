import React, {useState} from "react";
import axios from "axios";
import FileInput from "../template/FileInput/fileInput.jsx"

// import swal from "sweetalert";


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
                alert("Document added successful")
                // history.push('/display');
                console.log(data)

            })

        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div className="container">
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
                        <button type="submit" className="btn btn-warning">
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>



    )
}