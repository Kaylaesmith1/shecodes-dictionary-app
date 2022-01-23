import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
if (props.definition) {
  return (
  <div className="Results">
    <h2>{props.definition.word}</h2>

    {props.definition.phonetics.map(function(phonetic, index) {
      return (
        <div key={index}>
          <Phonetics phonetic={phonetic} />
          </div>
      )
    })}

    {props.definition.meanings.map(function 
    (meaning, index) {
      return (
      <div key={index}>
        <Meaning meaning={meaning} />
          </div>
    );

    })}
              </div>
);
} else {
  return null;
}
}