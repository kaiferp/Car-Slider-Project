import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/CarsList.css";

const Shop = () => {
    const { id } = useParams();

  return (
    <div className="Shop">
      <div style={{ fontWeight: "bold" }}>
        Shop: {id}
      </div>
    </div>
  );
}

export default Shop;
