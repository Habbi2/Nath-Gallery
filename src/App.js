import "./App.css";
import Slideshow from "./Slide";
import Gallery from "./Gallery";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      {state ? (
        <SlideshowIcon
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            zIndex: 3,
            width: "5vw",
            height: "5vw",
            color: "white",
          }}
          onClick={() => setState(!state)}
        ></SlideshowIcon>
      ) : (
        <CloseOutlinedIcon
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            zIndex: 3,
            width: "5vw",
            height: "5vw",
            color: "white",
          }}
          onClick={() => setState(!state)}
        ></CloseOutlinedIcon>
      )}
      {state ? <Gallery></Gallery> : <Slideshow></Slideshow>}
    </div>
  );
}

export default App;
