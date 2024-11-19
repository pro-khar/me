import { Download } from "lucide-react";
import { Button } from "./components/ui/button";

function UiTest() {
  return (
    <>
      <Button>Get in Touch</Button>
      <Button size={"sm"}>Get in Touch</Button>
      <Button size={"icon"}>
        <Download />
      </Button>
      <Button variant={"secondary"}>Get in Touch</Button>
      <Button variant={"secondary"} size={"sm"}>
        Get in Touch
      </Button>
      <Button variant={"secondary"} size={"icon"}>
        <Download />
      </Button>
      <Button variant={"outline"}>Get in Touch</Button>
      <Button variant={"outline"} size={"sm"}>
        Get in Touch
      </Button>
      <Button variant={"outline"} size={"icon"}>
        <Download />
      </Button>
      <Button variant={"destructive"}>Get in Touch</Button>
      <Button variant={"destructive"} size={"sm"}>
        Get in Touch
      </Button>
      <Button variant={"destructive"} size={"icon"}>
        <Download />
      </Button>
      <Button variant={"ghost"}>Get in Touch</Button>
      <Button variant={"ghost"} size={"sm"}>
        Get in Touch
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <Download />
      </Button>
    </>
  );
}

export default UiTest;
