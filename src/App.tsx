import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ImageUploader from "./ImageUploader";
// import axios from "axios";

function App() {
  const [path, setPath] = useState<any>("");

  let navigate = useNavigate();

  useEffect(() => {
    if (!path) return;
    navigate("/response/" + path.slice(0, -4));
  }, [path]);

  return (
    <>
      <div>
        <ImageUploader path={setPath} title="Upload image" />
      </div>
    </>
  );
}

export default App;
