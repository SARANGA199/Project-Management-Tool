import React, {useState} from "react";
import axios from "axios";
import FileInput from "../template/FileInput/fileInput.jsx";

// import swal from "sweetalert";


export default function StdSubmitDoc() {


    const [data, setData] = useState({
        groupID: "",
        groupLeaderName: "",
        groupLeaderEmail: "",
        submissionType: "",
        typeName: "",
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
            const url = process.env.REACT_APP_API_URL + "/addDoc"
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

        //
        // <div className={styles.container}>
        //     <form className={styles.form} onSubmit={handleSubmit} >
        //         <h1 className={styles.heading}>Template upload Form</h1>
        //         <input
        //             type="text"
        //             className={styles.input}
        //             placeholder="Admin Name"
        //             name="adminName"
        //             onChange={handleChange}
        //             value={data.groupID}
        //         />
        //         <input
        //             type="text"
        //             className={styles.input}
        //             placeholder="Template Title"
        //             name="templateTitle"
        //             onChange={handleChange}
        //             value={data.groupLeaderName}
        //         />
        //         <input
        //             type="text"
        //             className={styles.input}
        //             placeholder="Template Discription"
        //             name="templateDiscription"
        //             onChange={handleChange}
        //             value={data.groupLeaderEmail}
        //         />
        //         {/* <FileInput
        // 			name="img"
        // 			label="Choose Image"
        // 			handleInputState={handleInputState}
        // 			type="image"
        // 			value={data.img}
        // 		/> */}
        //         <FileInput
        //             name="template"
        //             label="Choose Document"
        //             handleInputState={handleInputState}
        //             type="document"
        //             value={data.SubmitDoc}
        //         />
        //         <button type="submit"  className={styles.submit_btn} >
        //             Submit
        //         </button>
        //     </form>
        // </div>
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
                        <label>Submission Type : </label>
                        <div className="form-group">
                            <select className="form-select" aria-label="Default select example" name = "submissionType" value={data.submissionType} onChange={handleChange}>
                                <option selected>select Submission Type</option>
                                <option value="Presentation" >Presentation</option>
                                <option value="Documentation">Documentation</option>
                            </select>
                        </div>

                        {/*<label>Submission Type : </label>*/}
                        {/*<div className="form-group">*/}
                        {/*    <select className="form-select" aria-label="Default select example" name = "typeName" value={data.typeName} onChange={handleChange}>*/}

                        {/*    <p><select id= "presentation">*/}
                        {/*        <option selected>select Submission Type</option>*/}
                        {/*        <option value="Proposal Presentation">Proposal Presentation</option>*/}
                        {/*        <option value="Progress Presentation">Progress Presentation</option>*/}
                        {/*        <option value="Final Presentation">Final Presentation</option>*/}
                        {/*</select>*/}
                        {/*</p>*/}

                        {/*<p><select  id="Documentation">*/}
                        {/*    <option value="Charter Documentation">Charter Documentation</option>*/}
                        {/*    <option value="Scrum Documentation">Scrum Documentation</option>*/}
                        {/*    <option value="Proposal Documentation">Proposal Documentation</option>*/}
                        {/*    <option value="Progress Documentation">Progress Documentation</option>*/}
                        {/*    <option value="Final Documentation">Final Documentation</option>*/}
                        {/*</select>*/}
                        {/*</p>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <label> Type Name : </label>
                        <div className="form-group">
                            <select className="form-select" aria-label="Default select example" name = "typeName" value={data.typeName} onChange={handleChange}>
                                <option selected>Select Type Name</option>
                                <option value="Proposal Presentation">Proposal Presentation</option>
                                <option value="Progress Presentation">Progress Presentation</option>
                                <option value="Final Presentation">Final Presentation</option>
                                <option value="Charter Documentation">Charter Documentation</option>
                                <option value="Scrum Documentation">Scrum Documentation</option>
                                <option value="Proposal Documentation">Proposal Documentation</option>
                                <option value="Progress Documentation">Progress Documentation</option>
                                <option value="Final Documentation">Final Documentation</option>
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
                        <button type="submit" className="btn btn-warning">
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>



//
// const[groupID,setGroupID]= useState("");
// const[groupLeaderName,setGroupLeaderName]= useState("");
// const[groupLeaderEmail,setGroupLeaderEmail]= useState("");
// const[submissionComments,setSubmissionComments]= useState("");
//
//     async function saveDoc(e){
//         e.preventDefault();
//         const data = {
//             groupID,
//             groupLeaderName,
//             groupLeaderEmail,
//             submissionComments,
//         }
//         const promise = await axios.post("http://localhost:8070/stdSubmitDoc",data).then((res)=>{
//             if(res.status == 201) {
//                 swal("Done!", "Document submitted successfully!", "success");
//             }}).catch((err)=>{
//             alert(err);
//         });
//     }
//
//     return(
//         <div className="container">
//             <br/>
//             <div className="card">
//                 <div className="card-body">
//                     <h1>
//                         <center>Submit Document</center>
//                     </h1>
//                 </div>
//             </div>
//
//             <div className="card">
//                 <div className="card-body">
//                     {/*<div className="row">*/}
//                     {/*    <div className="col">*/}
//                     {/*        <hr/>*/}
//                     {/*    </div>*/}
//                     {/*</div>*/}
//                     <form onSubmit={saveDoc}>
//
//                         <div className="row">
//                             <div className="col-sm-6">
//                                  <div className="card">
//                                     <div className="card-body">
//                                         <div className="col-md-12">
//                                             {/*<img src=" " className="card-img-top" alt="doc"/>*/}
//                                             <h1><b>Image</b></h1>
//                                         </div>
//                                     </div>
//                                  </div>
//                             </div>
//
//
//
//                             <div className="col-sm-6">
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <div className="row">
//                                         <div className="col-md-12">
//                                         <label>Group ID  : </label>
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control" value={groupID}
//                                                    onChange={e => setGroupID(e.target.value)} required/>
//                                             </div>
//                                         </div>
//                                         </div>
//                                         <br/>
//
//                                         <div className="row">
//                                             <div className="col-md-12">
//                                             <label>Group Leader Name : </label>
//                                                 <div className="form-group">
//                                                     <input type="text" className="form-control" value={groupLeaderName}
//                                                         onChange={e => setGroupLeaderName(e.target.value)}/>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <br/>
//
//                                         <div className="row">
//                                             <div className="col-md-12">
//                                             <label>Group Leader Email : </label>
//                                                 <div className="form-group">
//                                                     <input type="text" className="form-control" value={groupLeaderEmail}
//                                                            onChange={e => setGroupLeaderEmail(e.target.value)}/>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <br/>
//
//                                         <div className="row">
//                                             <div className="col-md-12">
//                                             <label>Submission Comments : </label>
//                                                 <div className="form-group">
//                                                     <textarea class="form-control" className="form-control" value={submissionComments}
//                                                            onChange={e => setSubmissionComments(e.target.value)}/>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <br/>
//
//
//                                         <div className="row">
//                                             <center>
//                                                 <button type="submit" className="btn btn-warning">Upload Document</button>
//                                             </center>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         </div>
//                     </form>
//
//                 </div>
//             </div>
//
//         </div>
//

    )
}