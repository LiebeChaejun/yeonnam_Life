import Home from "./pages/home/Home";
// import Place from "./pages/place/Place";
// import Map from "./pages/map/Map";
import Course from "./components/course/Course";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-bg w-full min-h-screen flex justify-center">
        <div className="max-w-125 min-w-100">
          <div className="relative flex flex-col gap-3 px-3 py-3">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
