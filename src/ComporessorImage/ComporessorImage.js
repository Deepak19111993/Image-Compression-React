import React, { useState } from "react";
import { CompressorWrapper } from "./ComporessorImage.styles";
import imageCompression from "browser-image-compression";

const ComporessorImage = () => {
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");

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
              <input type="file" name="upload" onChange={(e) => handle(e)} />{" "}
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
      </CompressorWrapper>
    </>
  );
};

export default ComporessorImage;
