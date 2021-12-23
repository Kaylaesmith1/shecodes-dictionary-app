import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);


function handleResponse(response) {
  console.log(response.data[0]);
  setDefinition(response.data[0]);
}

function search(event){
event.preventDefault();

//documentation: https://dictionaryapi.dev/
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

  return (
  <div className="dictionary">
    <form onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange}/>

    </form>
    <Results definition={definition}/>
    
    </div>
  );
}