import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = ({ images }) => {
  // Convert simple list of URLs into the object format the library expects
  const items = images.map((src) => ({
    original: src,
    thumbnail: src,
  }));

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
      <ImageGallery
        items={items}
        showPlayButton={true}     // autoplay button
        showFullscreenButton={true}
        slideDuration={600}       // smooth slide
        autoPlay={true}           // start playing automatically
      />
    </div>
  );
};

export default PhotoGallery;
