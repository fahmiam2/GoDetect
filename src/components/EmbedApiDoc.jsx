export default function SwaggerUI() {
  return (
    <div className="container">
      <iframe
        title="Swagger UI"
        src="http://localhost:8000/docs"
        className=" mx-auto w-full h-screen"
      ></iframe>
    </div>
  );
}
