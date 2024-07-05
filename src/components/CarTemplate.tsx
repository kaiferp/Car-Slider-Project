import React from 'react';

function CarTemplate(props:any) {
  return (
    <div>
       <h3>{props.bodyType}</h3>
            <p>{props.modelName}</p>
            <p>{props.modelType}</p>
            <img src={props.imageUrl} alt={props.modelName} />
    </div>
  );
}

export default CarTemplate;
