import { FaGear } from "react-icons/fa6";

function UnderCon() {
  return (
    <div className="flex items-center justify-center p-3 gap-2 font-ibm-mono font-medium fixed top-2 md:left-2 bg-[yellow] dark:text-black text-sm md:text-base border-[3px] border-black border-dashed group z-50">
      <FaGear />
      <p className="hidden group-hover:block">Under Developement</p>
      {/* <X onClick={handleClose} /> */}
    </div>
  );
}

export default UnderCon;
