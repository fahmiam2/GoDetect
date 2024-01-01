export default function UploadedFile({
  handleFileChange,
  uploadedFiles,
  resetForm,
  replaceFile,
  fileInputRef,
}) {
  return (
    <>
      <p className="text-lg font-bold mb-3">Uploaded Files:</p>
      <ul>
        {uploadedFiles.map((file) => (
          <li
            key={file.name}
            className="flex justify-between items-center mb-2"
          >
            <span className="text-indigo-500 font-bold">{file.name}</span>
            <div className="flex">
              <button
                onClick={() => replaceFile()}
                className="bg-transparent text-indigo-500 border border-indigo-500 px-4 py-2 rounded-lg mr-2"
              >
                Replace
              </button>
              <button
                onClick={() => resetForm()}
                className="bg-indigo-800 text-white px-4 py-2 rounded-lg transition-all duration-1000"
              >
                Remove
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
    </>
  );
}
