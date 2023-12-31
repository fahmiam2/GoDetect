export default function SwaggerUI() {
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="Streamlit App"
        src="http://localhost:8000/docs"
        width="1300"
        height="1080"
      ></iframe>
    </div>
  );
}
