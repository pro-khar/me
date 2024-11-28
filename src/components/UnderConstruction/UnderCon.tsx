import { X } from "lucide-react";
import { useState } from "react";
import { FaGear } from "react-icons/fa6";

function UnderCon() {
  const [isClosed, setisClosed] = useState(false);

  function handleClose() {
    setisClosed(!isClosed);
  }
  return (
    <div
      className={`${
        isClosed ? "hidden" : ""
      } flex items-center justify-center p-3 gap-2 font-ibm-mono font-medium fixed top-2 md:left-2 bg-[yellow] dark:text-black text-sm md:text-base border-[3px] border-black border-dashed`}
    >
      <FaGear />
      <p>Under Developement</p>
      <X onClick={handleClose} />
    </div>
  );
}

export default UnderCon;
