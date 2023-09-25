import { useState } from "react";
import Selector from "./components/Selector/Selector";

type Props = {
  title: string;
  path: any;
  request: any;
};

type Options = {
  mirroredVer: boolean;
  mirroredHor: boolean;
  cropped: boolean;
};

export default function ImageUploader({ title, path, request }: Props) {
  const [image, setImage] = useState<File>();
  const [selectorOptions, setSelectorOptions] = useState<Options>({
    mirroredVer: false,
    mirroredHor: false,
    cropped: false,
  });

  const updateSelectorOptions = (newOptions: Options) => {
    setSelectorOptions(newOptions);
  };

  const onFileChange = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    let formData = new FormData();

    if (!image) return;
    formData.append("img", image);
    formData.append("title", title);

    // console.log(formData);
    const url = "http://localhost:4000/api/upload";
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    request("loading");
    fetch(url, requestOptions)
      .then((response) => response.text()) // Extract the response as text
      .then((responseText) => {
        request("done");
        path(responseText);
      })
      .catch((error) => {
        request("error");
        console.log("Form submit error", error);
      });
  };

  return (
    <div>
      <h1>{title}</h1>
      <Selector
        updateState={updateSelectorOptions}
        selectorOptions={selectorOptions}
      />
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
