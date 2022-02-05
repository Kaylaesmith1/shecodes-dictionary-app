import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
if (props.definition) {
  return (
  <div className="Results">
    <h2>{props.definition.word}</h2>

          <div>
            <Phonetics phonetic={props.definition.phonetics[0]} />
          </div>
     

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