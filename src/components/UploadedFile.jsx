export default function UploadedFile({
  handleFileChange,
  uploadedFiles,
  resetForm,
  replaceFile,
  fileInputRef,
}) {
  return (
    <>
      <p className="mb-3 text-lg font-bold">Uploaded Files:</p>
      <ul>
        {uploadedFiles.map((file) => (
          <li
            key={file.name}
            className="mb-2 flex flex-col items-center justify-between gap-3 md:flex-row md:gap-0"
          >
            <span className="font-bold text-indigo-500">{file.name}</span>
            <div className="flex flex-row">
              <button
                onClick={() => replaceFile()}
                className="mr-2 rounded-lg border border-indigo-500 bg-transparent px-4 py-2 text-indigo-500 transition duration-300 ease-in-out hover:bg-pictonBlue hover:text-white"
              >
                Replace
              </button>
              <button
                onClick={() => resetForm()}
                className="rounded-lg bg-indigo-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-pictonBlue"
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
