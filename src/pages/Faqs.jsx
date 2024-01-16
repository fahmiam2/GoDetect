import AccordionFaqs from "../components/Accordion";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

export default function Faqs() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <PageNav />

      <main className="container mx-auto my-10 p-4">
        <div className="container mb-4">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-center text-gray-600">
            Explore answers to commonly asked questions about GoDetect. Contact
            us for further questions!
          </p>
        </div>
        <AccordionFaqs />
      </main>

      <Footer />
    </div>
  );
}
