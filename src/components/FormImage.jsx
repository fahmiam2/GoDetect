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
      queryParams.append("task_type", data.taskType);
      queryParams.append("confidential_threshold", data.confidentialThreshold);

      const url = `${BASE_ENDPOINT_API}?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
        setImageData(result.frame);
        setObjectCounts(result.object_counts);
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
              <OutputImage imageData={imageData} />
              <OutputText>{JSON.stringify(objectCounts, null, 2)}</OutputText>
            </div>
          </>
        )
      )}
    </div>
  );
}
