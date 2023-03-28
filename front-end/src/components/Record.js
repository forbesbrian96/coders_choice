import React from "react";

const Record = (props) => {
    return (
      <>
        <h3>Artist: {props.record.artist}</h3>
        <p>Album Title: {props.record.album}</p>
        <p>Release Date: {props.record.released}</p>
        <img
          src={props.record.image}
          alt={props.record.album}
          style={{ maxWidth: '50%', maxHeight: '50%' }}
        />
      </>
    );
  };
  
  export default Record;