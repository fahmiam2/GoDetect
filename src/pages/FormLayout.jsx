import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import FormImage from "../components/FormImage";
import FormVideo from "../components/FormVideo";

export default function FormLayout() {
  const [selected, setSelected] = useState("login");

  return (
    <div className="flex flex-col my-5 h-5/6">
      <Tabs
        size="md"
        aria-label="Tabs form"
        selectedKey={selected}
        onSelectionChange={setSelected}
        className="justify-center py-5"
      >
        <Tab key="image" title="Input Image">
          <Card className="max-w-screen-md mx-auto my-2">
            <CardBody className="overflow-hidden">
              <FormImage />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="video" title="Input Video">
          <Card className="max-w-screen-md mx-auto my-2">
            <CardBody className="overflow-hidden">
              <FormVideo />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
