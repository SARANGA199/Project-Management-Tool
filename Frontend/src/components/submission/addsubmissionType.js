import axios from "axios";
import { useState,useEffect } from "react";
import { useHistory} from 'react-router-dom';
import { OutlinedInput,Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import styles from "./styles.module.css";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FileInput from '../template/FileInput/fileInput';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


    

    
    // const [data, setData] = useState({
    //     adminName: "",
    //     subTypeName: "",
    //     subTypeDiscription: "",
    //     submition: "",
    // });


const AddSubmissiontype= ()=>{

    
    //const [adminName,setAdminName]=useState("vishwa")
    // const [subTypeName,setSubTypeName] = useState("")
    // const [subTypeDiscription,setSubTypeDiscription] = useState("")
    // const [submission,setSubmission] = useState("test1")

    const [data, setData] = useState({
            adminName:"",
            subTypeName:"",
            subTypeDiscription:"",
            submission:""
	});

    

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


    const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
        // const data ={
        //     adminName:"vishwa",
        //     subTypeName,
        //     subTypeDiscription,
        //     template,

        //    }
		try {
			//const url = process.env.REACT_APP_API_URL + "/addtemplate"
           

            const { data : res } =  axios.post('http://localhost:8070/submission/addSubType', data).then(()=>{
				console.log(data)
                alert("create sucsesfull")
			  //history.push('/display');
			})
			
		} catch (error) {
			console.log(error)
            alert("create fail")
		}
	};

    


    return(
    
        <div className="container" align="center">


        <div className="row">
            <div className="col-12">
                <div className="mb-3 mt-3">
                  <center> <h2>CREATE SUBMISSION TYPE</h2></center> 
                </div>
            </div>
        </div>

 
  <form className={styles.form} onSubmit={handleSubmit}  >  

                <div className="row"> 
                
                <div className="col-8">
                    <div className="row">
                
                        <div >
                    <Grid>
                    <OutlinedInput
                        type="text"
                        name="subTypeName"
                        label="Submission type Name"
                        required
                        id="name"
                        placeholder="Type Name"
                        onChange={handleChange}
                        value={data.subTypeName}
                        //onChange={(e) => setSubTypeName (e.target.value)}
                        
                     />
                     </Grid>
                </div>
                   <br/>  

                 <div className="row-xl-6 mb-3 ml-auto">
                        

          {/* <MuiThemeProvider > */}
            


                <Grid className={styles.song_info}>
                <OutlinedInput
                    fullWidth
                    multiline
                    label="Submission type Description"
                    required
                    name="subTypeDiscription"
                    value={data.subTypeDiscription}
                    onChange={handleChange}
                    InputProps={{
                        inputComponent: TextareaAutosize,
                        rows: 3
                    }}
                    
                    // onChange={(e) => setSubTypeDiscription(e.target.value)}
          
                />
                </Grid>
            
            <div  style={{width:"500px"}}>
            <FileInput
            name="template"
            label="Choose Document"
            handleInputState={handleInputState}
            type="document"
            value={data.template}
            />
            </div>

            
           
          {/* </MuiThemeProvider> */}
                    </div>   
                       

                    </div >
                </div>
                  </div>
                  <center>
                 <div style={{paddingTop: '20px'}}  className="col-xl-12">
                      <Button  type="submit" className="btn btn-primary mt-5 "  >CREATE</Button>
                </div>
                </center>
            </form>  
           
          </div>  
            
            

        );

}

const Form = styled.div`
   
    width: 80%;
    padding: 50px;
    background:#f2f2f2;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0;
    text-align: left;
`;

export default AddSubmissiontype;