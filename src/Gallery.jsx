import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import slideImages from "./images";

const Gallery = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <div className="galleryContainer">
      <ImageList
        sx={{ width: "99vw", height: "96vh" }}
        variant="quilted"
        cols={3}
        rowHeight={280}
      >
        {slideImages.map((item) => (
          <ImageListItem
            key={item.url}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.url, "20vw", item.rows, item.cols)}
              alt={item.caption}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;
