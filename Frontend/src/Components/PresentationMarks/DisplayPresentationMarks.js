import React, { useEffect, useState } from "react";
import axios from "axios";
import generateMARKS from "./PresentationMarksReport";

const GetPresentationMarks = () => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const getMarks = async () => {
      try {
        await axios
          .get("http://localhost:8070/presentationMarks/")
          .then((res) => {
            setRequest(res.data);
          });
      } catch (err) {
        alert(err);
      }
    };
    getMarks();
  }, []);

  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          <button
            style={{ width: "23%" }}
            className="btn btn-warning"
            onClick={() => generateMARKS(request)}
          >
            Presentation Marks
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetPresentationMarks;
