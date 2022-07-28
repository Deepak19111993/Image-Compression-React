import React, { useEffect, useState } from "react";
import { CompressorWrapper } from "./ComporessorImage.styles";
import imageCompression from "browser-image-compression";

const ComporessorImage = () => {
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [gitData, setGitData] = useState([]);

  const [celsiusValue, setCelsiusValue] = useState("");

  const handle = (e) => {
    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile?.name);
  };

  console.log("origional-images", origImageFile, fileName);
  console.log("compress-images", compressedImage, fileName);

  const handleCompressImage = (e) => {
    e.preventDefault();

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };

    if (options.maxSizeMB >= origImage / 1024) {
      alert("this is already in small size");
      return 0;
    }

    let output;

    imageCompression(origImage, options).then((x) => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      setCompressedImage(downloadLink);
    });
  };

  useEffect(() => {
    async function helloDk() {
      const gitUrl = await fetch("https://api.github.com/users").then((res) =>
        res.json()
      );
      console.log("first", gitUrl);
      setGitData(gitUrl);
      // const b = (responce) => response.json(a);
      // console.log("second", b);
      // const c = (data) => console.log(data);
      // console.log(a.data);
      // return;
    }
    helloDk();
  }, []);

  const handleChange = (e) => {
    let inputNumber = e.target.value;
    let cValue = (inputNumber * 9) / 5 + 32;
    setCelsiusValue(cValue);

    if (inputNumber === "") {
      setCelsiusValue("");
    }
  };

  return (
    <>
      <CompressorWrapper>
        <h2>Compress the Images</h2>
        <div className="inner-block">
          {origImageFile ? (
            <img className="upload-img" src={origImageFile} alt="" />
          ) : (
            <img
              className="upload-img"
              src="http://via.placeholder.com/300"
              alt=""
            />
          )}
          <div className="btn-wrapper">
            <div className="upload-btn">
              <input type="file" name="upload" onChange={(e) => handle(e)} />
              Upload
            </div>
            {origImageFile && (
              <button type="button" onClick={(e) => handleCompressImage(e)}>
                Compressor Image
              </button>
            )}
            {compressedImage && (
              <a href={compressedImage} download={fileName}>
                <button type="button">Download</button>
              </a>
            )}
          </div>
          {compressedImage ? (
            <img className="upload-img" src={compressedImage} alt="" />
          ) : (
            <img
              className="upload-img"
              src="http://via.placeholder.com/300"
              alt=""
            />
          )}
        </div>

        <div className="degree-wrapper">
          <h2>Convert to Fehrenheit to Celsius</h2>
          <input
            type="number"
            placeholder="Convert Fehrenheit to Celsius"
            onChange={(e) => handleChange(e)}
          />
          {celsiusValue && (
            <div className="degree-result">{`${celsiusValue}°F
            `}</div>
          )}
        </div>

        <h2>Fetch the Git Avatar Images</h2>
        <div className="grid-img">
          {gitData.map((item) => (
            <img src={item.avatar_url} alt="" />
          ))}
        </div>
      </CompressorWrapper>
    </>
  );
};

export default ComporessorImage;
