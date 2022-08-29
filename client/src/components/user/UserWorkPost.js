import React,{useState} from "react";
import "../../styles/activityUser.css";
import {MdArrowForwardIos,MdArrowBackIosNew} from "react-icons/md"

const UserWorkPost = ({data}) => {
    const url = process.env.REACT_APP_SERVER_URL;
    let totalImages = data.images.length - 1;
    const [currentImg,setCurrentImg] = useState(0);


  return (
    <>
      <div className="user-activity-post-middle">
        {data.images.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <div
                className="user-post-img-frame"
                style={{ display: currentImg === index ? "flex" : "none" }}
              >  
                <div style={{display : currentImg ===0 ? "none":"block",left:"1%"}} className="user-post-img-change">
                <MdArrowBackIosNew onClick={()=> currentImg===0 ? setCurrentImg(totalImages) : setCurrentImg(index-1)} />
                </div>
                <img
                  src={`${url}/${data.filePath}`}
                  className="user-work-post-img-size"
                />
                <div style={{display : currentImg ===totalImages ? "none":"block",left:"96%"}} className="user-post-img-change">
                    <MdArrowForwardIos onClick={()=> currentImg===totalImages ? setCurrentImg(0) : setCurrentImg(currentImg+1)}/>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default UserWorkPost;
