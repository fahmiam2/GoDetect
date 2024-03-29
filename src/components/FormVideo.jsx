import { useRef, useState } from "react";
import FileUploadArea from "./FileUploadArea";
import TaskForm from "./TaskFormVideo";
import UploadedFile from "./UploadedFile";
import SpinnerLoading from "./Spinner";
import OutputVideo from "./OutputVideo";
import { motion } from "framer-motion";
import OutputText from "./OutputText";

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
  const [errorOutput, setErrorOutput] = useState(false);
  const [messageError, setMessageError] = useState("");

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
      queryParams.append("confidence_threshold", data.confidenceThreshold);
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
        setErrorOutput(false);
      } else {
        const result = await response.json();
        setErrorOutput(true);
        setShowOutput(false);
        setMessageError(
          `Oops, there was something wrong! Please try again...\n\nDetail Error:\n\n${JSON.stringify(
            result,
            null,
            2,
          )}`,
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorOutput(true);
      setShowOutput(false);
      setMessageError("Oops, there was something wrong! Please try again...");
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
          className="mx-0 mb-5 mt-10 px-10 sm:mx-10 sm:px-20"
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
        <div className="mb-4 mt-2 flex flex-col items-center justify-center gap-4">
          <SpinnerLoading />
        </div>
      ) : (
        <>
          {showOutput && (
            <>
              <p className="mx-0 mb-5 mt-10 px-10 text-large sm:mx-10 sm:px-20">
                <strong>Output:</strong>
              </p>
              <div className="my-4 flex flex-col items-center justify-center gap-4">
                <OutputVideo src={videoData} />
              </div>
            </>
          )}

          {errorOutput && (
            <div className="mx-0 mb-5 mt-10 px-10 sm:mx-10 sm:px-20">
              <OutputText
                className="focus:shadow-outline size-16 w-full resize-none items-center overflow-x-hidden rounded-xl border bg-gray-200 p-3 text-center text-gray-500 focus:outline-none"
                message={messageError}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
