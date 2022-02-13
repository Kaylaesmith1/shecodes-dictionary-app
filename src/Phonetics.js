import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";



export default function Phonetics(props) {
  
  return (
    <div className="Phonetics">
      <span>
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          volume={0.5}
          className="audio"
        />
      </span>
      <span className="text"> {props.phonetic.text}</span>
    </div>
  );
}