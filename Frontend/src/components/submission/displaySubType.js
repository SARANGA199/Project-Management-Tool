import { useEffect, useState } from "react";
import axios from "axios";
import "./submissionPage.css";
import TemplateForm from "../template/templateForm/templateForm.jsx";
import FileInput from "../template/FileInput/fileInput";
import { async } from "@firebase/util";
import pdf from "../../pdf1.png";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PublishIcon from "@mui/icons-material/Publish";

function DisplaysubType() {
  let navigate = useNavigate();
  const [submisionTypes, setSubmisionType] = useState([]);

  useEffect(() => {
    const getAllSubmissionType = async () => {
      console.log("awa");
      try {
        const { data } = await axios.get(
          "http://localhost:8070/submission/displaySubType"
        );
        setSubmisionType(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllSubmissionType();
  }, []);

  function deleteSubType(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8070/submission/deleteSubType/${id}`)
          .then(() => {
            swal("Submission Type Deleted successfully", {
              icon: "success",
            });
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        swal("Deletion canceled!");
      }
    });
  }

  const updateMarkStatus = async (sid, marksStatus) => {
    const newValue = {
      marksStatus,
    };

    const update = await axios
      .put(`http://localhost:8070/submission/updateMarkStatus/${sid}`, newValue)
      .then(() => {
        swal(`View marks ${marksStatus}`);
        window.location.reload(false);
        //navigate("/topics");
      })
      .catch((err) => {
        swal(`Something went to wrong !!!`);
      });
  };

  const setData = async (data) => {
    let {
      _id,
      subTypeName,
      subTypeDiscription,
      templateTitle,
      templateDiscription,
      template,
    } = data;

    console.log("awa");

    localStorage.setItem("Sid", _id);
    localStorage.setItem("SubTypeName", subTypeName);
    localStorage.setItem("SubTypeDiscription", subTypeDiscription);
    localStorage.setItem("TemplateTitle", templateTitle);
    localStorage.setItem("TemplateDiscription", templateDiscription);
    localStorage.setItem("Template", template);

    navigate("/updateSub");
  };

  const setSubmissionData =  (data) => {

    let {
      _id,
      subTypeName,
    } = data;

    localStorage.setItem("Subid", _id);
    localStorage.setItem("SubmissionTypeName", subTypeName);

    navigate("/stdSubmitDoc");

  };

  const setViewMarkData =  (data) => {

    let {
      _id,
      subTypeName,
    } = data;

  
    localStorage.setItem("STypeName", subTypeName);

    navigate("/presentationMarks");

  };

  const SubmisionType = ({ submisionType }) => {
    return (
      <div>
        <div className="submissionCartTopic"> {submisionType.subTypeName}</div>
        <div className="cardSubmission">
          <div className="submissionDes">
            {submisionType.subTypeDiscription}
          </div>
          {submisionType.template != "" ? (
          <div className="subContainerSub">
            <div>
             
                <>
                  <div>
                    <a href={submisionType.template}>
                      <img src={pdf} alt="pdf" className="iconsSubmission" />
                    </a>
                  </div>
                  <div className="TemplateNameSub">
                    <a className="aTagSub" href={submisionType.template}>
                      Download Template
                    </a>
                  </div>
                </>
              
            </div>
            <div className="tempDesc">{submisionType.templateDiscription}</div>
          </div>
          ) : null}
          <div className="submitTop1">
            Submit Your {submisionType.subTypeName} Here ...
          </div>
          <div className="submitBTSub">
            <button 
            type="submit"
             className="btn btn-warning mt-2"
             onClick={()=>setSubmissionData(submisionType)}
             >
              Submit Document &nbsp; <PublishIcon />
            </button>
          </div>
          <div className="EnableDisable">
            <div className="enaDesa1">
              {submisionType.marksStatus == "Enable" ? (
                <div>
                  <button 
                  type="submit"
                   className="btn btn-warning "
                   onClick={()=>setViewMarkData(submisionType)}
                   >
                    View {submisionType.subTypeName} Marks
                  </button>
                </div>
              ) : null}
            </div>
            <div>
              <div className="submitTop1">
                * Enable / Disable {submisionType.subTypeName} Marks *
              </div>
              <div className="enaDesa">
              {submisionType.marksStatus == "Disable" ? (
                <a
                  type="submit"
                  className="upSub  ms-2"
                  onClick={() => updateMarkStatus(submisionType._id, "Enable")}
                >
                  Enable
                </a>
                ) : null}
                {submisionType.marksStatus == "Enable" ? (
                <a
                  type="submit"
                  className="upSub  ms-2"
                  onClick={() => updateMarkStatus(submisionType._id, "Disable")}
                >
                  Disable
                </a>
                 ) : null}
              </div>
            </div>
          </div>
          <div className="UpdateSub1">
            <div>
              <a
                type="submit"
                className="upSub"
                onClick={() => setData(submisionType)}
              >
                UPDATE
              </a>

              <a
                type="submit"
                className="deSub ms-2"
                onClick={() => deleteSubType(submisionType._id)}
              >
                DELETE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  console.log(submisionTypes);
  return (
    <div>
      <div className="submissionContainer">
        <div className="submissionLeft">
          <div className="submissionTopic">
            SLIIT <br /> RESEARCH
          </div>
        </div>
        <div className="container">
          <div className="submissionTopicT1">RESEARCH FIELD</div>
          <hr className="HrSubmission" />
          <div>
            {submisionTypes.map((submisionType) => (
              <SubmisionType
                submisionType={submisionType}
                key={submisionType._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaysubType;
