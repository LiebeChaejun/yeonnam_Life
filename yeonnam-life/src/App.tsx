import Home from "./pages/home/Home";
// import Place from "./pages/place/Place";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-bg w-full min-h-screen flex justify-center">
        <div className="w-125 py-5 px-3">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
