import React, { useState } from "react";
import "./YoutubeThumbnail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function YoutubeThumbnail({ videoId, title }) {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  if (showVideo) {
    return (
      <div className="video-player">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div className="youtube-thumbnail" onClick={handlePlayClick}>
      <img src={thumbnailUrl} alt={title} />
      <div className="play-button">
        <FontAwesomeIcon icon={faPlayCircle} size="3x" />
      </div>
      <p className="video-title">{title}</p>
    </div>
  );
}

export default YoutubeThumbnail;
