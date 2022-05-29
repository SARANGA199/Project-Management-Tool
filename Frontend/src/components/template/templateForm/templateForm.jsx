import { useState } from "react";
import axios from 'axios';
import FileInput from "../FileInput/fileInput.jsx";
import styles from "./styles.module.css";
import { useHistory} from 'react-router-dom';
import { withRouter } from "react-router";


const TemplateForm = () => {

	//const { match, location, history } = this.props;

	// const history = useHistory();

	console.log("awa")

	const [data, setData] = useState({
		adminName: "",
		templateTitle: "",
		templateDiscription: "",
		template: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const url = process.env.REACT_APP_API_URL + "/addtemplate"
			const { data : res } = await axios.post(url, data).then(()=>{
				alert("template add suscesfull")
				// history.push('/display');
				console.log(data)
			  
			})
			
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit} >
				<h1 className={styles.heading}>Template upload Form</h1>
				<input
					type="text"
					className={styles.input}
					placeholder="Admin Name"
					name="adminName"
					onChange={handleChange}
					value={data.adminName}
				/>
				<input
					type="text"
					className={styles.input}
					placeholder="Template Title"
					name="templateTitle"
					onChange={handleChange}
					value={data.templateTitle}
				/>
				<input
					type="text"
					className={styles.input}
					placeholder="Template Discription"
					name="templateDiscription"
					onChange={handleChange}
					value={data.templateDiscription}
				/>
				{/* <FileInput
					name="img"
					label="Choose Image"
					handleInputState={handleInputState}
					type="image"
					value={data.img}
				/> */}
				<FileInput
					name="template"
					label="Choose Document"
					handleInputState={handleInputState}
					type="document"
					value={data.template}
				/>
				<button type="submit"  className={styles.submit_btn} >
					Submit
				</button>
			</form>
		</div>
	);
};

export default TemplateForm;
