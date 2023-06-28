import { useEffect, useState } from "react";
import "./App.css";
import ImageUploader from "./ImageUploader";
import axios from "axios";

function App() {
  const [path, setPath] = useState<any>("");
  const [image, setImage] = useState<any>();

  useEffect(() => {
    let img = sessionStorage.getItem("path");
    setPath(img);
    axios.get("http://localhost:4000/output/" + path).then((res) => {
      setImage(res.config.url);
      sessionStorage.removeItem("path");
    });
  });

  return (
    <>
      <div>
        <ImageUploader title="Upload image" />
        <img src={image} alt="Shrek" />
      </div>
    </>
  );
}

export default App;
