import { useState, useEffect } from "react";
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAfter((prevIsAfter) => !prevIsAfter);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="container mx-auto mb-10 rounded-xl bg-pictonBlue">
      <h2 className="my-10 text-center text-3xl font-bold text-white">
        How to use GoDetect Effortlessly?
      </h2>
      <div className="mx-5 mb-20 flex flex-col gap-10 px-5 xl:mx-20 xl:flex-row xl:px-20">
        <div className="relative mb-5 flex w-full items-center justify-center xl:mb-0 xl:w-1/2">
          {/* Before Image */}
          <motion.img
            src="/sample-image.jpg"
            className="max-w-full"
            alt="Before"
            initial={{ width: isAfter ? "0%" : "50%" }}
            animate={{ width: isAfter ? "0%" : "100%" }}
            transition={{ duration: 1 }}
          />

          {/* After Image */}
          <motion.img
            src="/sample-annotated-image.jpg"
            className="max-w-full"
            alt="After"
            initial={{ width: isAfter ? "50%" : "0%" }}
            animate={{ width: isAfter ? "100%" : "0%" }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="flex w-full flex-col gap-10 xl:w-1/2">
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
