/** @format */

import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to manage the current image */
  const [currentImage, setCurrentImage] = React.useState(0);

  /* You will need to hanle the click on left and right button */
  /* You will need to manage the cases when we are on the last image or first image*/
  const onLeft = () => {
    if (currentImage == 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(0);
    }
  };
  const onRight = () => {
    if (currentImage == images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div className='carousel'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={onLeft} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        className='slide'
      />

      <BsArrowRightCircleFill className='arrow arrow-right' onClick={onRight} />
    </div>
  );
};
