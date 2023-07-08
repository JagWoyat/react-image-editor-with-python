import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import ImageUploader from "./ImageUploader";

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
      <div>
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
