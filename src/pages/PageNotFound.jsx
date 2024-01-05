import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="grid-rows[auto_1fr_auto] grid h-screen">
      <div className="container mx-auto flex flex-col items-center justify-between xl:flex-row">
        <div className="mt-10 w-screen px-10 py-10 text-left xl:mt-0 xl:w-2/5 xl:py-20">
          <div className="ml-0 px-5 py-10 text-center xl:ml-3 xl:px-20 xl:text-left">
            <p className="mb-2 text-xl font-bold text-indigo-800 xl:mb-3 xl:text-4xl">
              OOPS!
            </p>
            <p className="mb-2 text-xl font-bold text-indigo-800 xl:mb-3 xl:text-4xl">
              404 Page Not Found
            </p>
            <span className="text-xl text-indigo-800">
              The page you are searching for cannot be found.
            </span>
          </div>
          <div className="ml-0 px-5 py-3 text-center xl:ml-3 xl:px-20 xl:py-5 xl:text-left">
            <button
              onClick={goToHomepage}
              className="rounded-2xl bg-indigo-800 px-6 py-3 text-white"
            >
              Go to Homepage
            </button>
          </div>
        </div>
        <div className="mr-0 w-screen items-center xl:mr-10 xl:w-3/5">
          <img src="/9170823.jpg"></img>
        </div>
      </div>
    </div>
  );
}
