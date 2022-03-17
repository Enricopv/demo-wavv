import Hls from "hls.js";
import React, { MediaHTMLAttributes, useEffect, useRef } from "react";

const PLAYBACK_ID = "UmnZoO00WhdrjSV5qke02DVI8RO9PZvbzJVdoe247Wy1w";

interface VideoPlayerProps extends MediaHTMLAttributes<HTMLVideoElement> {
  playback_id?: string;
}

export default function MuxDemo() {
  return <MuxVideoPlayer playback_id={PLAYBACK_ID} />;
}

function MuxVideoPlayer(props: VideoPlayerProps) {
  if (!props.playback_id) {
    return <div> MUX playback_id missing</div>;
  }

  const videoRef = useRef<HTMLVideoElement>(null);
  const src = `https://stream.mux.com/${props.playback_id}.m3u8`;

  useEffect(() => {
    let hls: Hls;
    if (videoRef.current) {
      const video = videoRef.current;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Some browers (safari and ie edge) support HLS natively
        video.src = src;
      } else if (Hls.isSupported()) {
        // This will run in all other modern browsers
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoRef]);

  return (
    <video
      controls
      ref={videoRef}
      style={{ width: "100%", maxWidth: "500px", ...props.style }}
    />
  );
}
