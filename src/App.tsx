import { Download } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div id="hero" className="bg-[#0086e7] flex flex-col items-center justify-center  h-full w-full">
      <div
        
        className=" flex flex-col items-start p-8 gap-2"
      >
        {/* <p className="text-4xl text-white font-semibold tracking-tighter">
          Prakhar Verma
        </p> */}
        <Button>Get in Touch</Button>
        <Button size={"sm"}>Get in Touch</Button>
        <Button size={"icon"}><Download /></Button>
        <Button variant={"outline"}>Get in Touch</Button>
        <Button variant={"outline"} size={"sm"}>Get in Touch</Button>
        <Button variant={"outline"} size={"icon"}><Download /></Button>
        <Button variant={"destructive"}>Get in Touch</Button>
        <Button variant={"destructive"} size={"sm"}>Get in Touch</Button>
        <Button variant={"destructive"} size={"icon"}><Download /></Button>
      </div>
      </div>
    </div>
  );
}

export default App;
