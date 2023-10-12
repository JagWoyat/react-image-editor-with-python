import { ChangeEvent, DragEvent, useRef, useState } from "react";
import styles from "./ImageUploader.module.css";

type Props = {
  title: string;
  path: any;
  request: any;
};

export default function ImageUploader({ title, path, request }: Props) {
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImage(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImg = () => {
    setImage(undefined);
    setImagePreview(null);
  };

  const handleDrag = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    const file = event.dataTransfer?.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
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
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form
        className={styles.Form}
        onDragEnter={handleDrag}
        onSubmit={handleSubmit}
      >
        {imagePreview ? (
          <>
            <button className={styles.RemoveImgButton} onClick={removeImg}>
              x
            </button>
            <img
              src={imagePreview}
              alt="SelectedImage"
              style={{ maxWidth: "100%" }}
            />
            <button className={styles.UploadButton} type="submit">
              Upload a file
            </button>
          </>
        ) : (
          <>
            <label
              className={dragActive ? styles.LabelActive : styles.Label}
              htmlFor="image-input"
            >
              <input
                ref={inputRef}
                style={{ display: "none" }}
                type="file"
                id="image-input"
                onChange={onFileChange}
              />
              <div>
                <p>Drag and drop your file here or</p>
                <button onClick={handleClick} className={styles.UploadButton}>
                  Upload a file
                </button>
              </div>
            </label>
            {dragActive && (
              <div
                className={styles.ActiveDropZone}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              ></div>
            )}
          </>
        )}
      </form>
    </div>
  );
}
