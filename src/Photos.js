import React from "react";
import "./Photos.css";

export default function Photos(props) {

  if (props.photos){
  return <section className="Photos">
    <div className="row">

    {props.photos.map(function(photo,index){
      let copyright = `by ${photo.photographer}`;

      return (
      <div className="col-4" key={index}>
        <a href={photo.src.large} target="_blank" rel="noreferrer">
        <img src={photo.src.tiny} className="image-fluid" alt=""/>
        </a>
        </div>
      );
      
    })}
    </div>
  </section>;

} else {
  return null;
}
}