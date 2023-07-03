import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Response() {
  const [image, setImage] = useState<any>();

  const params = useParams();

  useEffect(() => {
    console.log(params.filename);
    axios
      .get("http://localhost:4000/output/" + params.filename + ".png")
      .then((res) => {
        setImage(res.config.url);
      });
  }, []);

  return (
    <div id="response-page">
      <img src={image} alt="Shrek" />
    </div>
  );
}
