import { ModeToggle } from "./components/mode-toggle";
import Intro from "./pages/intro/Intro";
import UiTest from "./ui-test";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
      <Intro />
      {/* <UiTest /> */}
    </div>
  );
}

export default App;
