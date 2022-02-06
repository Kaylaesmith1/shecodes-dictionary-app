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

    <section>
      <form onSubmit={search}>
      <input className="form" type="search" placeholder="Search a word" autoFocus={true} onChange={handleKeywordChange}/>
    </form>
    </section>

    <Results definition={definition}/>
    
    </div>
  );
}