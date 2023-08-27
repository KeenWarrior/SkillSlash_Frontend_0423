"use client";

import { Button, IconButton, Slider, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import LinearProgress from "@mui/material/LinearProgress";

const Player = ({ videoUrl }) => {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
  });

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        playing={playing}
        onProgress={(currentProgress) => {
          setProgress(currentProgress);
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <IconButton variant="contained" onClick={() => setPlaying(!playing)}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Slider
          
          style={{
            width: "200px",
            step: 0.00000001,
            value: progress.played,
          }}
          min={0}
          max={.3}
          value={progress.played}
          onChange={(event, value) => {
            setProgress({ ...progress, played: value });
          }}
          onChangeCommitted={(event, value) => {
            console.log(value);
          }}
        />
        <Typography variant="body1">{progress.played}</Typography>
        <Typography variant="body1">{progress.loaded}</Typography>
        {/* <LinearProgress style={{
          width: "200px",
        }} variant="buffer" value={progress.playedSeconds} valueBuffer={progress.loadedSeconds}
        onSeeked={(event)=>{
          console.log(event);
        }} /> */}
      </div>
    </div>
  );
};

export default Player;
