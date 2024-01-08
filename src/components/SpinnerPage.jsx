import SpinnerLoading from "./Spinner";

export default function SpinnerPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <SpinnerLoading />
      <span>Please Wait..</span>
    </div>
  );
}
