import { Route, Routes } from "react-router-dom";
import Navbar from "./controller/libs/navbar";
import SecondPart from "./controller/pages/part2";
import { Blog } from "./controller/pages/part3";

function App() {
  return (
    <>
      <div className="bg-black w-full overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/second" element={<SecondPart />} />
      </Routes>
    </>
  );
}

export default App;
