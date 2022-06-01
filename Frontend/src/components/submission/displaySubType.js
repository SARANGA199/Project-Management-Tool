import {  useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import TemplateForm from '../template/templateForm/templateForm.jsx'
import FileInput from '../template/FileInput/fileInput';
import { async } from '@firebase/util';
import pdf from "../../pdf.png";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

function DisplaysubType() {
  let navigate = useNavigate();
    const [submisionTypes, setSubmisionType] = useState([])

    //const [submission,setSubmission]= useState("")
    //const [sId,setSId]= useState("")

useEffect(() => {

  const getAllSubmissionType = async () => {
       console.log("awa")
    try {
      const { data } = await axios.get("http://localhost:8070/submission/displaySubType")
      setSubmisionType(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  


  
  getAllSubmissionType()
    
  }, [])

  const setData = async (data) => {
    
    let { _id,subTypeName,subTypeDiscription,templateTitle,templateDiscription,template} = data;

    console.log("awa")

    localStorage.setItem("Sid", _id);
    localStorage.setItem("SubTypeName",subTypeName);
    localStorage.setItem("SubTypeDiscription", subTypeDiscription);
    localStorage.setItem("TemplateTitle", templateTitle);
    localStorage.setItem("TemplateDiscription", templateDiscription);
    localStorage.setItem("Template", template);
    
    navigate("/updateSub");
  }



//console.log(sId)


  const SubmisionType = ({submisionType}) => {
	return (
		<div align="center" className={styles.subTypes_container}>
			{/* <img src={song.img} alt="song_img" className={styles.song_img} /> */}
			<div className={styles.song_info}>
				{/* <p className={styles.song_name} >{submisionType.adminName}</p> */}
				<p className={styles.song_artist} >{submisionType.subTypeName}</p>
                <p className={styles.song_artist} >{submisionType.subTypeDiscription}</p>
                <p className={styles.song_artist} >{submisionType.templateDiscription}</p>
      {submisionType.template != ""?(
			<><a href={submisionType.template}>
            <img src={pdf} alt="check circle" className={styles.check_img} /></a>
            {/* <object data={song.song} type="application/pdf" width="100%" height="100%" controls /> */}
            <a href={submisionType.template}>{submisionType.templateTitle}</a></>
      ):null}
      <center>
                 <div style={{paddingTop: '20px'}}  className="col-xl-12">
                      <Button  type="submit" className="btn btn-primary mt-5 " onClick={() => setData(submisionType)} >UPDATE</Button>
                </div>
                </center>
                <div style={{paddingTop: '20px'}}  className="col-xl-12">
                      <Button  type="submit" className="btn btn-primary mt-5 "  >SUBMIT DOCUMENT</Button>
                </div>
                <div style={{paddingTop: '20px'}}  className="col-xl-12">
                      <Button  type="submit" className="btn btn-primary mt-5 "  >VIEW {submisionType.subTypeName} MARKS</Button>
                </div>
            </div>        

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
                    
                        <SubmisionType submisionType={submisionType} key={submisionType._id} />
                       
            ))}
            
          </div>
    </div>
</div> 
  );
}


export default  DisplaysubType; 

