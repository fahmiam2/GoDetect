import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Upload Your Files",
    content:
      "Drag and drop your image files into the designated area or click to select files. Supported formats include JPG, JPEG, and PNG.",
  },
  {
    title: "2. Configure Object Detection",
    content:
      "Choose the Task Type (e.g., Detection or Segmentation) from the dropdown menu. Set the Confidential Threshold using the input field to determine the level of confidence required for object detection.",
  },
  {
    title: "3. View Results",
    content:
      "Click the Submit button to initiate the object detection process. Wait for the results to be displayed, including the annotated image and a JSON representation of detected objects and their counts.",
  },
];

export default function Guide() {
  const [isAfter, setIsAfter] = useState(false);

  const toggleImage = () => {
    setIsAfter(!isAfter);
  };

  return (
    <section className="container mx-auto mb-3 bg-slate-400 rounded-xl">
      <h2 className="text-3xl font-bold my-10 text-center">
        How to use GoDetect Effortlessly?
      </h2>
      <div className="flex flex-col xl:flex-row px-5 xl:px-20 mb-20 mx-5 xl:mx-20 gap-10">
        <div className="w-full xl:w-1/2 flex items-center justify-center relative mb-5 xl:mb-0">
          {/* Before Image */}
          <motion.img
            src="../../public/sample-image.jpg"
            className="min-h-unit-7xl max-w-full"
            alt="Before"
            initial={{ width: isAfter ? "0%" : "50%" }}
            animate={{ width: isAfter ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
          />

          {/* After Image */}
          <motion.img
            src="../../public/sample-annotated-image.jpg"
            className="min-h-unit-7xl max-w-full"
            alt="After"
            initial={{ width: isAfter ? "50%" : "0%" }}
            animate={{ width: isAfter ? "100%" : "0%" }}
            transition={{ duration: 0.5 }}
          />

          {/* Button to Toggle Image */}
          <button
            onClick={toggleImage}
            className="bg-blue-500 text-white px-4 py-2 rounded absolute bottom-0 left-0"
          >
            Toggle Image
          </button>
        </div>
        <div className="w-full xl:w-1/2 flex flex-col gap-10">
          {/* Right Side Cards */}
          {steps.map((step, index) => (
            <Card key={index} className="flex-1 p-4">
              <CardHeader>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </CardHeader>
              <CardBody>
                <p>{step.content}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
