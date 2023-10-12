import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [path, setPath] = useState<any>("");
  const [requestState, setRequestState] = useState<any>("");

  let navigate = useNavigate();

  useEffect(() => {
    if (!path) return;
    navigate("/response/" + path);
  }, [path]);

  return (
    <>
      <Navbar />
      <div className="Body">
        <ImageUploader
          path={setPath}
          title="Upload image"
          request={setRequestState}
        />
        {requestState === "loading" && <h3>Loading...</h3>}
      </div>
    </>
  );
}

export default App;
