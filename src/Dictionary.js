import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
//if page has been loaded or not (below)
let[loaded, setLoaded] = useState(false);

function handleResponse(response) {
  //console.log(response.data[0]);
  setDefinition(response.data[0]);
}

function search() {
  //documentation: https://dictionaryapi.dev/
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
event.preventDefault();
  search();

}

function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

function load() {
  setLoaded(true);
  search();
}

if (loaded){
  return (
  <div className="dictionary">

    <section>
      <form onSubmit={handleSubmit}>
      <input className="form" type="search" placeholder="Search a word" autoFocus={true} onChange={handleKeywordChange}/>
    </form>
    </section>

    <Results definition={definition}/>
    
    </div>
  );
} else {
  load();
  return "Loading";
}
}