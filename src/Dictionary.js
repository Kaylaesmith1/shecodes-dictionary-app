import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
  //console.log(response.data[0]);
  setDefinition(response.data[0]);
}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);

}

function search(event) {
  event.preventDefault();
  //documentation: https://dictionaryapi.dev/
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleDictionaryResponse);

let pexelsApiKey=`563492ad6f917000010000012870644b8c7f4f46b7238a4099e86846`;
let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

//A lot of APIs are using the 'headers' to authenticate. Gotten from StackOverflow
let headers = {Authorization : `Bearer ${pexelsApiKey}`}

axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);

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
    <Photos photos={photos}/>
    
    </div>
  );
} 
