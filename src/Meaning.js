import React from "react";
import Synonyms from "./Synonyms";


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
          <strong>Definition: </strong>{definitions.definition}
          <br />
          <strong>Example: </strong><em>{definitions.example}</em>
          <br />
<Synonyms synonyms={definitions.synonyms}/>
</p>
    </div>
      );
      

  
      })}
      </div>
      );
}