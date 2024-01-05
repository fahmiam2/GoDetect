import { useRef, useState } from "react";
import FileUploadArea from "./FileUploadArea";
import TaskForm from "./TaskFormVideo";
import UploadedFile from "./UploadedFile";
import SpinnerLoading from "./Spinner";
import OutputVideo from "./OutputVideo";
import { motion } from "framer-motion";

const BASE_ENDPOINT_API =
  "https://object-detection-fastapi-service-te6saypwdq-as.a.run.app/detect/video";
const allowedVideoTypes = ["video/mp4", "video/quicktime"];

export default function FormVideo() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
    setIsUploaded(true);
  };

  const replaceFile = () => {
    fileInputRef.current.click();
  };

  const resetForm = () => {
    setUploadedFiles([]);
    setIsUploaded(false);
    setShowOutput(false);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setUploadedFiles([newFile]);
      setIsUploaded(true);
      setShowOutput(false);
    }
  };
  // setelah submit processing video dan proses POST
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      let use_tracer;
      formData.append("video", uploadedFiles[0]);

      const queryParams = new URLSearchParams();
      queryParams.append("task_type", data.taskType);
      queryParams.append("confidential_threshold", data.confidentialThreshold);
      queryParams.append("annotator", data.chooseAnnotator);

      if (data.chooseTracer !== "none") {
        use_tracer = true;
        queryParams.append("use_tracer", use_tracer);
        queryParams.append("tracer", data.chooseTracer);
      } else {
        use_tracer = false;
        queryParams.append("use_tracer", use_tracer);
      }

      console.log(queryParams);

      const url = `${BASE_ENDPOINT_API}?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
        setVideoData(result.url_video);
        setShowOutput(true);
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //   return <FileUploadArea onDrop={onDrop} />;
  return (
    <div>
      {!isUploaded ? (
        <FileUploadArea
          onDrop={onDrop}
          isUploaded={isUploaded}
          allowedTypes={allowedVideoTypes}
        />
      ) : (
        <motion.div
          className="mx-10 my-10 px-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isUploaded ? 1 : 0,
            scale: isUploaded ? 1 : 0.95,
          }}
          transition={{ duration: 0.5 }}
        >
          <UploadedFile
            handleFileChange={handleFileChange}
            uploadedFiles={uploadedFiles}
            resetForm={resetForm}
            replaceFile={replaceFile}
            fileInputRef={fileInputRef}
          />
          <TaskForm onSubmit={onSubmit} />
        </motion.div>
      )}
      {isLoading ? (
        <div className="my-4 flex flex-col items-center justify-center gap-4">
          <SpinnerLoading />
        </div>
      ) : (
        showOutput && (
          <>
            <p className="mx-10 my-5 px-20 text-lg">
              <strong>Output:</strong>
            </p>
            <div className="my-4 flex flex-col items-center justify-center gap-4">
              <OutputVideo src={videoData} />
            </div>
          </>
        )
      )}
    </div>
  );
}
