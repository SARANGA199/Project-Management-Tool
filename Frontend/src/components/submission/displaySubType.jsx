import {  useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import TemplateForm from '../template/templateForm/templateForm.jsx'
import FileInput from '../template/FileInput/fileInput';
import { async } from '@firebase/util';
//import pdf from "../../../pdf.png";

function DisplaysubType() {
    const [submisionTypes, setSubmisionType] = useState([])

    const [submission,setSubmission]= useState("")
    const [sId,setSId]= useState("")

    const [data, setData] = useState({
		submission:""
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    


    const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

useEffect(() => {

  const getAllSubmissionType = async () => {
       console.log("awa")
    try {
      const { data } = await axios.get("http://localhost:8000/submission/displaySubType")
      setSubmisionType(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  


  
  getAllSubmissionType()
    
  }, [])


  function setValue(sId) {
    setSId(sId);
    console.log(sId)

  }


  const HandleSubmit = async (e) => {
    e.preventDefault()
    const data ={
        submission,

       }
    try {
        //const url = process.env.REACT_APP_API_URL + "/addtemplate"
       

        await axios.put(`http://localhost:8000/submission/updateSubType/${sId}`, data).then(()=>{
            console.log(data)
            alert("create sucsesfull")
          //history.push('/display');
        })
        
    } catch (error) {
        console.log(error)
        alert("create fail")
    }
}

//console.log(sId)
console.log(submission)

  const SubmisionType = ({submisionType}) => {
	return (
		<div className={styles.song_container}>
			{/* <img src={song.img} alt="song_img" className={styles.song_img} /> */}
			<div className={styles.song_info}>
				<p className={styles.song_name} >{submisionType.adminName}</p>
				<p className={styles.song_artist} >{submisionType.subTypeName}</p>
                <p className={styles.song_artist} >{submisionType.subTypeDiscription}</p>
			
			{/* <a href={template.template}>
			<img src={pdf} alt="check circle" className={styles.check_img} /></a>
			<object data={song.song} type="application/pdf" width="100%" height="100%" controls />
			<a href={template.template}>{template.templateTitle}</a> */}

                <button type="addtemplate" onClick={()=>setValue(submisionType._id)} className={styles.submit_btn} >
                   Addtemplate
				</button>
            </div> 
        {/* <div >
            <form onSubmit={HandleSubmit}>


                    <FileInput 
                        
                        name="submission"
                        label="Choose Document"
                        handleInputState={handleInputState}
                        type="document"
                        //onChange={(e) => setSubmission (e.target.value)}
                        value={submission}
                        
                    />

                <button type="submit"  className={styles.submit_btn} >
					Submit
				</button>

            </form>

        </div>         */}

		</div>
	);
};

console.log(submisionTypes)
  return (
<div>
    <center> <h4>SUBMISSION TYPES</h4></center>
    <div className="container">
          {/* <SongForm /> */}
          
          <div className='songs_container' >
            {submisionTypes.map((submisionType) => (
                    
                        <><><SubmisionType submisionType={submisionType} key={submisionType._id} />
                </><div>
                        <form className={styles.form} onSubmit={HandleSubmit}>


                            <FileInput

                                name="submission"
                                
                                label="Choose Document"
                                handleInputState={handleInputState}
                                type="document"
                                //onChange={(e) => setSubmission (e.target.value)}
                                value={submission} />

                            <button type="submit" className={styles.submit_btn}>
                                Submit
                            </button>

                        </form>

                    </div></>       
            ))}
            
          </div>
    </div>
</div> 
  );
}


export default  DisplaysubType; 

