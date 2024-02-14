import { useRef, useState } from "react";
import OutputImage from "./OutputImage";
import OutputText from "./OutputText";
import SpinnerLoading from "./Spinner";
import FileUploadArea from "./FileUploadArea";
import UploadedFile from "./UploadedFile";
import TaskForm from "./TaskFormImage";
import { motion } from "framer-motion";

const BASE_ENDPOINT_API =
  "https://object-detection-fastapi-service-te6saypwdq-as.a.run.app/detect/image";

const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg"];

export default function FormImage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [errorOutput, setErrorOutput] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [imageData, setImageData] = useState(null);
  const [objectCounts, setObjectCounts] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
    setIsUploaded(true);
  };

  const resetForm = () => {
    setUploadedFiles([]);
    setIsUploaded(false);
    setShowOutput(false);
  };

  const replaceFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setUploadedFiles([newFile]);
      setIsUploaded(true);
      setShowOutput(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", uploadedFiles[0]);

      const queryParams = new URLSearchParams();
      queryParams.append("model_type", data.modelType);
      queryParams.append("task_type", data.taskType);
      queryParams.append("confidence_threshold", data.confidenceThreshold);

      const url = `${BASE_ENDPOINT_API}?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
        setImageData(result.frame);
        setObjectCounts(result);
        setShowOutput(true);
        setErrorOutput(false);
      } else {
        const resultError = response.json();
        setErrorOutput(true);
        setShowOutput(false);
        setMessageError(resultError);
        console.error("API Error:", resultError.detail);
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

  return (
    <div>
      {!isUploaded ? (
        <FileUploadArea
          onDrop={onDrop}
          isUploaded={isUploaded}
          allowedTypes={allowedImageTypes}
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
                <OutputImage imageData={imageData} />
                <OutputText
                  className="focus:shadow-outline text-16 size-unit-80 w-full resize-none overflow-x-hidden rounded-xl border bg-gray-200 px-5 py-8 text-gray-500 focus:outline-none"
                  message={`Response:\n\n${JSON.stringify(
                    objectCounts,
                    null,
                    2,
                  )}`}
                />
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
