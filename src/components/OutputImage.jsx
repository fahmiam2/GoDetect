export default function OutputImage({ imageData }) {
  return (
    <div>
      <img
        src={`data:image/png;base64,${imageData}`}
        alt="Preview"
        className="max-w-full"
      />
    </div>
  );
}
