import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uplaodVideo } from "../../actions/uplaodVideo";
import { getAllVideos } from "../../actions/getAllVideos";

const UploadPage = ({ toggleUploadPanel }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [title, setTitle] = useState("");

  const currentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadVideoFile = async () => {
    if (!title) {
      alert("Enter the title");
    } else if (!selectedFile) {
      alert("Attach the video file");
    } else if (selectedFile.size > 100000000) {
      alert("Attach video file less than 1mb");
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("video", selectedFile);
      formData.append("channel", currentUser?.result?._id);
      formData.append("uploader", currentUser?.result?.name);

      try {
        const config = {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
        };
        dispatch(uplaodVideo(formData, config));
        setUploadSuccess(true);
        setTimeout(() => {
          toggleUploadPanel();
        }, 1000);
      } catch (error) {
        console.error("Erroe uploading video: ", error);
        setUploadError("An error occured while uploading video");
      }
    }
  };

  return (
    <div className=" overflow-hidden fixed top-20 right-40 z-10  w-[71vw] h-[90vh] text-white bg-black border border-zinc-800 rounded-xl backdrop-blur-lg bg-opacity-50 ">
      <h1
        className="absolute -top-2 text-6xl right-6 cursor-pointer hover:bg-zinc-800 px-4 py-2 rounded-lg"
        onClick={toggleUploadPanel}
      >
        x
      </h1>
      <div className=" pl-20 pt-32 flex flex-col gap-10 items-top pr-2">
        <input
          type="text"
          className="bg-zinc-800 px-4 py-2 rounded-lg w-2/3"
          maxLength={30}
          placeholder="Enter Title of your video"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" className="text-lg" onChange={handleFileChange} />

        <button
          className="bg-blue-500 rounded-xl px-4 py-2 w-56  hover:bg-blue-600"
          onClick={uploadVideoFile}
        >
          Upload
        </button>
        <div className="">
          {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
          {uploadSuccess && <p>Upload successful..</p>}
          {uploadError && <p>{uploadError}</p>}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
