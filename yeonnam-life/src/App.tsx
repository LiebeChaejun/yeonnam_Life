import Home from "./pages/home/Home";
// import Place from "./pages/place/Place";
// import Map from "./pages/map/Map";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-bg w-full min-h-screen flex justify-center">
        <div className="w-125">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
