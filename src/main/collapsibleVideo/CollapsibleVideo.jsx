import React from "react";
const CollapsibleVideo = () => {
  return (
    <div className="container mx-auto p-2 py-10 flex justify-center align-center ">
      <iframe
        width="90%"
        height="500"
        src="https://www.youtube.com/embed/HnoPHqrdXQ8"
        title="YouTube Video"
        frameBorder="0" 
        allowFullScreen
        borderRadius="30px"
      ></iframe>
    </div>
  );
};

export default CollapsibleVideo;
