import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

export default function FileUploadArea({ onDrop, isUploaded, allowedTypes }) {
  const [errorMessage, setErrorMessage] = useState("");
  const MAX_FILE_SIZE_MB = 15;

  const fileSubtypes = allowedTypes.map((type) => {
    const parts = type.split("/");
    return parts.length === 2 ? parts[1] : null;
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const disallowedFiles = acceptedFiles.filter(
        (file) =>
          !allowedTypes.includes(file.type) ||
          file.size > MAX_FILE_SIZE_MB * 1024 * 1024,
      );

      if (disallowedFiles.length === 0) {
        onDrop(acceptedFiles);
      } else {
        const disallowedFileNames = disallowedFiles.map((file) => file.name);
        const sizeExceededFiles = disallowedFiles
          .filter((file) => file.size > MAX_FILE_SIZE_MB * 1024 * 1024)
          .map((file) => file.name);

        if (disallowedFileNames.length > 0) {
          setErrorMessage(
            `The following files are not allowed: ${disallowedFileNames.join(
              ", ",
            )}`,
          );
          console.error(errorMessage);
        }

        if (sizeExceededFiles.length > 0) {
          setErrorMessage(
            `File size exceeded for: ${sizeExceededFiles.join(", ")}`,
          );
          console.error(errorMessage);
        }

        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    },
  });

  return (
    <motion.div
      {...getRootProps()}
      className={`m-20 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-indigo-400 p-10 transition-opacity ${
        isDragActive ? "bg-indigo-200" : "bg-slate-100"
      }`}
      initial={{ opacity: 1, visibility: "visible" }}
      animate={{
        opacity: isUploaded ? 0 : 1,
        visibility: isUploaded ? "hidden" : "visible",
      }}
      transition={{ duration: 0.5 }}
    >
      <input {...getInputProps()} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mb-3 h-6 w-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>

      <p className="my-3 text-center text-gray-600">
        Drag and drop files here, or{" "}
        <span className="text-indigo-800">browse files</span>
      </p>
      <span className="text-center text-gray-400">
        Only supported {fileSubtypes.join(", ")} file formats
      </span>
      <span className="text-center text-gray-400">
        Maximum upload size 15 MB
      </span>

      {errorMessage && (
        <div className="my-3 text-center text-red-500">{errorMessage}</div>
      )}
    </motion.div>
  );
}
