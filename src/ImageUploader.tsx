import { useState } from "react";

type Props = {
  title: string;
  path: any;
};

export default function ImageUploader({ title, path }: Props) {
  const [image, setImage] = useState<File>();

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
    fetch(url, requestOptions)
      .then((response) => response.text()) // Extract the response as text
      .then((responseText) => {
        // Handle the response string
        path(responseText);
      })
      .catch((error) => console.log("Form submit error", error));
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
