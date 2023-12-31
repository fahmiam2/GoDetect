import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, Controller } from "react-hook-form";
import OutputImage from "./OutputImage";
import OutputText from "./OutputText";
import SpinnerLoading from "./Spinner";

const BASE_ENDPOINT_API = "http://localhost:8000/detect/image";

export default function FormImage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(true);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [objectCounts, setObjectCounts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const { handleSubmit, control } = useForm();

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
    setShowUploadForm(false);
    setShowTaskForm(true);
  };

  const resetForm = () => {
    setUploadedFiles([]);
    setShowUploadForm(true);
    setShowTaskForm(false);
    setShowOutput(false);
  };

  const replaceFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setUploadedFiles([newFile]);
      setShowTaskForm(true);
      setShowOutput(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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

  const renderTaskForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="flex flex-col md:flex-row justify-between mt-5 mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <label htmlFor="taskType">Task Type:</label>
            <Controller
              name="taskType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} className="p-2 border w-full" required>
                  <option value="">Select Task Type</option>
                  <option value="detection">Detection</option>
                  <option value="segmentation">Segmentation</option>
                </select>
              )}
            />
          </div>
          <div className="mb-4 md:mb-0 md:w-1/2">
            <label htmlFor="confidentialThreshold">
              Confidential Threshold:
            </label>
            <Controller
              name="confidentialThreshold"
              control={control}
              defaultValue={25}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="p-2 border w-full"
                  min={25}
                  max={100}
                  required
                />
              )}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <div>
      {showUploadForm ? (
        <div
          {...getRootProps()}
          className={`border-dashed border-2 border-gray-400 p-40 m-20 flex flex-col items-center justify-center rounded-xl transition-opacity bg-slate-100 ${
            showUploadForm ? "opacity-100" : "opacity-0"
          } ${showUploadForm ? "visible" : "invisible"}`}
        >
          <input {...getInputProps()} />
          <p className="text-gray-600">
            Drag and drop files here, or click to select files
          </p>
        </div>
      ) : (
        <div
          className={`my-10 px-20 mx-10 transition-all ${
            showTaskForm ? "h-auto" : "h-0"
          } opacity-${showTaskForm ? "100" : "0"}`}
        >
          <p className="text-lg font-bold mb-3">Uploaded Files:</p>
          <ul>
            {uploadedFiles.map((file) => (
              <li
                key={file.name}
                className="flex justify-between items-center mb-2"
              >
                <span className="text-blue-500 font-bold">{file.name}</span>
                <div className="flex">
                  <button
                    onClick={() => resetForm()}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2 transition-all duration-1000"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => replaceFile()}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Replace
                  </button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e)}
                  style={{ display: "none" }}
                />
              </li>
            ))}
          </ul>
          {showTaskForm && renderTaskForm()}
        </div>
      )}
      {isLoading ? (
        <div className="my-4 flex flex-col items-center justify-center gap-4">
          <SpinnerLoading />
        </div>
      ) : (
        showOutput && (
          <>
            <p className="my-5 px-20 mx-10 text-lg">
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
