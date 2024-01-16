import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
  {
    question: "What is GoDetect?",
    answer:
      "GoDetect is an innovative platform that harnesses artificial intelligence, specifically YOLOv8 model, for automatic annotations on images and videos. Users can effortlessly upload their visual files, receiving results enriched with additional information through the platform.",
  },
  {
    question: "What image and video file formats are supported by GoDetect?",
    answer:
      "GoDetect supports various file formats, including JPEG, PNG, and MP4. Ensure that your files adhere to the supported formats for optimal processing.",
  },
  {
    question: "What is the maximum file size that GoDetect can process?",
    answer:
      "To ensure optimal performance, GoDetect currently has 15 MB as a maximum file size limit for processing. Make sure your files adhere to this limit for efficient annotations.",
  },
  {
    question:
      "Can I share annotated images or videos on social media directly from GoDetect?",
    answer:
      "Yes, GoDetect provides sharing options, allowing you to easily share your annotated creations on various social media platforms. Simply use the provided sharing links.",
  },
  {
    question:
      "What types of objects can GoDetect identify in images and videos?",
    answer:
      "GoDetect is designed to identify a wide range of objects in images and videos. While it supports various categories, the accuracy may vary based on the complexity and diversity of objects in the media.",
  },
  {
    question: "Is there a limit to the number of files I can upload at once?",
    answer: "GoDetect currently only support one file per detection",
  },
  {
    question:
      "How does GoDetect handle sensitive or private images and videos?",
    answer:
      "GoDetect prioritizes user privacy and does not store sensitive or private files beyond the necessary processing time. Our commitment is to ensure the security and confidentiality of user data.",
  },
  {
    question: "Can I integrate GoDetect into my own applications or services?",
    answer:
      "Yes, GoDetect provides seamless integration capabilities through our dedicated API endpoints. You can effortlessly integrate GoDetect into your applications or services, unlocking the power of automatic annotations for your visual content. Explore our API documentation for detailed instructions on how to get started with the integration process.",
  },
  {
    question: "Is there a mobile app version of GoDetect available?",
    answer:
      "Currently, GoDetect is a web-based application and does not have a dedicated mobile app. However, we are exploring options for mobile app version of GoDetect in future projects.",
  },
  {
    question: "Can GoDetect identify objects in webcam?",
    answer:
      "Currently, GoDetect does not have the capability to identify objects in real-time through a webcam. However, we are actively working on enhancing and expanding the features of GoDetect, and it is likely that in the future, we will introduce the ability to identify objects through webcams as part of our ongoing development efforts. Stay tuned for updates on our platform's features and capabilities.",
  },
];

export default function AccordionFaqs() {
  return (
    <div className="container mx-auto max-w-screen-md p-5">
      <Accordion variant="splitted" selectionMode="multiple">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={faq.question}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
