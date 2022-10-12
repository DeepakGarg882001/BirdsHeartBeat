import React, { useState, useEffect,useRef } from "react";
import "../../styles/newPics.css";
import { useSelector } from "react-redux";


const NewPics = () => {
  const url = process.env.REACT_APP_SERVER_URL;
  
  const data = useSelector( (state) => state.NewMemories_Reducer);
  const delay = 3500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className="new-pic-canvas">
        <div className="new-pic-slideshow">
          <div
          
          
          >
            {data.map((data, baseIndex) => {
              return(
                <React.Fragment   key={baseIndex}>
                <div    className="slideshowSlider" style={{  display: index === baseIndex ? "flex":"none"}}>
                 <img src={`${url}/${data.images.filePath}`} className="home-memories-img-size"/>
                 </div>
                </React.Fragment>
              )
            })}
          </div>

          <div className="slideshowDots">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPics;
