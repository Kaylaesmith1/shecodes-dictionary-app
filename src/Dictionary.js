import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword]=useState("");
  let [results, setResults]=useState({});


function handleResponse(response) {
  console.log(response.data[0]);
  setResults(response.data[0]);
  console.log(response.data[0].meanings[0].definitions[0].definition);
}

function search(event){
event.preventDefault();
}

let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

  return (
  <div className="dictionary">
    <form onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange}/>

    </form>
    <Results />
    
    </div>
  );
}