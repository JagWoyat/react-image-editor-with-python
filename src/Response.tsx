import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Response() {
  const [image, setImage] = useState<any>();

  const params = useParams();

  useEffect(() => {
    console.log(params.filename);
    axios.get("http://localhost:4000/output/" + params.filename).then((res) => {
      setImage(res.config.url);
    });
  }, []);

  const handleDownload = () => {
    if (!params.filename) return;
    const link = document.createElement("a");
    link.href = "./../server/output/" + params.filename;
    link.download = params.filename;
    link.click();
  };

  return (
    <div className="ResponseWrapper">
      <img src={image} alt="response image" />
      <div className="ResponseDiv">
        <Link to="/">
          <button>Return</button>
        </Link>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
