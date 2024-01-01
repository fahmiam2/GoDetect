import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

export default function FileUploadArea({ onDrop, isUploaded, allowedTypes }) {
  const fileSubtypes = allowedTypes.map((type) => {
    const parts = type.split("/");
    return parts.length === 2 ? parts[1] : null;
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const disallowedFiles = acceptedFiles.filter(
        (file) => !allowedTypes.includes(file.type),
      );

      if (disallowedFiles.length === 0) {
        onDrop(acceptedFiles);
      } else {
        console.error(
          `The following files are not allowed: ${disallowedFiles
            .map((file) => file.name)
            .join(", ")}`,
        );
      }
    },
  });

  return (
    <motion.div
      {...getRootProps()}
      className={`border-dashed border-2 border-indigo-400 p-10 m-20 flex flex-col items-center justify-center rounded-xl transition-opacity ${
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
        className="w-6 h-6 mb-3 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>

      <p className="text-gray-600 text-center my-3">
        Drag and drop files here, or{" "}
        <span className="text-indigo-500">browse files</span>
      </p>
      <span className="text-gray-400 text-center">
        Only supported {fileSubtypes.join(", ")} file formats
      </span>
      <span className="text-gray-400 text-center">
        Maximum upload size 15 MB
      </span>
    </motion.div>
  );
}
