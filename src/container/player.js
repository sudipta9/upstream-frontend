import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Player } from "../components";

const PlayerContainer = (props) => {
  const playerRef = React.useRef(null);
  const [videoSource, setVideoSource] = useState("");
  useEffect(() => {
    if (props.videoUrl) setVideoSource(props.videoUrl);
  }, [props.videoUrl]);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      player.log("player is waiting");
    });

    player.on("dispose", () => {
      player.log("player will dispose");
    });
  };
  return (
    <Container className="mt-3" style={{ maxWidth: "1200px" }}>
      {videoSource && (
        <Player
          options={{
            autoplay: true,
            controls: true,
            responsive: true,
            // fluid: false,
            fluid: true,
            aspectRatio: "16:9",
            sources: [
              {
                src: videoSource,
                type: "video/mp4",
              },
            ],
          }}
          onReady={handlePlayerReady}
        />
      )}
    </Container>
  );
};

export default PlayerContainer;
