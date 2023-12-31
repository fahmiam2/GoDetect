import SwaggerUI from "../components/EmbedApiDoc";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

export default function ApiDoc() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <PageNav />

      <SwaggerUI />

      <Footer />
    </div>
  );
}
