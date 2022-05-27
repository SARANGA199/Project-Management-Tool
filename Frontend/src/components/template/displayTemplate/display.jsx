import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import pdf from "../../../pdf.png";

function Displaytemplate() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const getAllSongs = async () => {
      console.log("awa");
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_API_URL + "/display"
        );
        setTemplates(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllSongs();
  }, []);

  const Songs = ({ template }) => {
    return (
      <div className={styles.song_container}>
        {/* <img src={song.img} alt="song_img" className={styles.song_img} /> */}
        {/* <div className={styles.song_info}>
				<p className={styles.song_name} >{song.name}</p>
				<p className={styles.song_artist} >{song.artist}</p>
			</div> */}
        <a href={template.template}>
          <img src={pdf} alt="check circle" className={styles.check_img} />
        </a>
        {/* <object data={song.song} type="application/pdf" width="100%" height="100%" controls /> */}
        <a href={template.template}>{template.templateTitle}</a>
      </div>
    );
  };

  console.log(templates);
  return (
    <div>
      <center>
        {" "}
        <h4>TEMPLATES</h4>
      </center>
      <div className="container">
        {/* <SongForm /> */}

        <div className="songs_container">
          {templates.map((template) => (
            <Songs template={template} key={template._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Displaytemplate;
