import axios from "axios";
import { useState,useEffect } from "react";
import { useHistory} from 'react-router-dom';
import { OutlinedInput,Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const adminName="vishwa"
    const submission = "test1"


const AddSubmissiontype= ()=>{

    

    const [data, setData] = useState({
        //adminName: "vishwa",
        subTypeName: "",
        subTypeDiscription: ""
        //submition: "sample",
    });

    

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
        const data ={
            adminName,
            subTypeName,
            subTypeDiscription,
            submission,

           }
		try {
			//const url = process.env.REACT_APP_API_URL + "/addtemplate"
           

			await axios.post('http://localhost:8000/submission/addSubType', data).then(()=>{
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

 <Form onSubmit={handleSubmit}>
  <form    >  

                <div className="row"> 
                
                <div className="col-8">
                    <div className="row">
                
                        <div className="col-xl-6 mb-3">
                    <TextField
                        type="text"
                        name="subTypeName"
                        label="Submission type Name"
                        required
                        id="name"
                        placeholder="Type Name"
                        onChange={handleChange}
                        value={data.subTypeName}
                        // onChange={(e) => setName (e.target.value)}
                        
                     />
                </div>
                   <br/>  

                 <div className="row-xl-6 mb-3 ml-auto">
                        

          {/* <MuiThemeProvider > */}
            <Grid container direction="row" spacing={1}>
           
            <Grid item sm={6}>
                <TextField
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
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
          
                />
            </Grid>
           </Grid>
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
             </Form> 
          </div>  
        );

}

const Form = styled.div`
   
    width: 50%;
    padding: 50px;
    background:#f2f2f2;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0;
    text-align: left;
`;

export default AddSubmissiontype;