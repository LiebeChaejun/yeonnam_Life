import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CourseDetail from "./pages/Course/CourseDetail";
import PlaceDetail from "./pages/Place/PlaceDetail";
import MapDetail from "./pages/mapDetail/MapDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-bg w-full min-h-screen flex justify-center">
          <div className="max-w-125 min-w-100">
            <div className="relative flex flex-col gap-3 px-3 py-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/place/:courseName" element={<PlaceDetail />} />
                <Route path="/course" element={<CourseDetail />} />
                <Route path="/map" element={<MapDetail />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
