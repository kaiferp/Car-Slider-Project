import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/CarsList.css";

const Learn = () => {
    const { id } = useParams();

  return (
      <div  className="Learn">
        <div style={{ fontWeight: "bold" }}>
          Learn more about: {id}
        </div>
      </div>
  );
}

export default Learn;
