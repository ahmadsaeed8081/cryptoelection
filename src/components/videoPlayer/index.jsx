import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-player-wrapper tw-rounded-md">
      <ReactPlayer
        url={src}
        controls={true}
        // width="100%"
        // height="100%"
        style={{ maxWidth: "100%", maxHeight: "100%",borderRadius:'12px'}}
      />
    </div>
  );
};

export default VideoPlayer;