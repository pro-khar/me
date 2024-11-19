import UiTest from "./ui-test";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="hero"
        className="bg-[#0086e7] flex flex-col items-center justify-center  h-full w-full"
      >
        <div className=" flex flex-col items-start p-8 gap-2">
          {/* <p className="text-4xl text-white font-semibold tracking-tighter">
          Prakhar Verma
        </p> */}
          <UiTest />
        </div>
      </div>
    </div>
  );
}

export default App;
