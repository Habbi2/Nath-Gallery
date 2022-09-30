import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideImages from "./images";

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide-effect" key={index}>
            <div
              style={{
                backgroundSize: "100vw 100vh",
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
