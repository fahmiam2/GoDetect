import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import FormImage from "../components/FormImage";

export default function FormLayout() {
  const [selected, setSelected] = useState("login");

  return (
    <div className="flex flex-col w-full my-5 max-w-screen-md mx-auto h-5/6">
      <Tabs
        size="md"
        aria-label="Tabs form"
        selectedKey={selected}
        onSelectionChange={setSelected}
        className="justify-center"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
