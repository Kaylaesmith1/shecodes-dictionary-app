import React from "react";


//to get the FIRST meaning of a word: console.log(response.data[0].meanings[0].definitions[0].definition); To loop through all defs use 'map'
//em used to make italics
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definitions, index){
      return (
        <div key={index}>
          <p>
          {definitions.definition}
          <br />
          <em>{definitions.example}</em>
          <br />
          </p>
    </div>
      );
  
      })}
      </div>
      );
}