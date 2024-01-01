import Footer from "../components/Footer";
import Guide from "../components/Guide";
import PageNav from "../components/PageNav";
import FormLayout from "./FormLayout";

export default function Homepage() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <PageNav />

      <main className="container mx-auto my-10 p-4">
        <div className="container max-w-screen-md mx-auto py-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">
            GoDetect: Instant Visual Annotations
          </h1>
          <p className="text-center text-gray-600 text-xl">
            Upload your images or videos, and watch as GoDetect transforms them
            with automatic annotations. Effortless creativity at your fingertips
            – <strong>Try it now!</strong>
          </p>
        </div>
        <FormLayout />
      </main>

      <Guide />
      <Footer />
    </div>
  );
}
