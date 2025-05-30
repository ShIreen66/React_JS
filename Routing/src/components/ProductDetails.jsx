import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "aliceblue", textAlign: "center" }}>
      <h1 style={{ fontSize: "20px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        aspernatur.
      </h1>
      <h1 style={{ fontSize: "15px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        aspernatur.
      </h1>
      <h1 style={{ fontSize: "15px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        aspernatur.
      </h1>
      <h1 style={{ fontSize: "15px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        aspernatur.
      </h1>
      <h1 style={{ fontSize: "15px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        aspernatur.
      </h1>
      <h1 style={{ fontSize: "15px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        aspernatur.
      </h1>
      <button
        style={{
          border: "1px solid black",
          padding: 2,
          borderRadius: 5,
          backgroundColor: "green",
          color: "white",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
