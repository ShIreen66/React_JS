import { Outlet, useNavigate } from "react-router-dom";
import Page from "./Page";

const Product = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/product/detail");
  };
  return (
    <div>
      <div style={{ backgroundColor: "aliceblue", textAlign: "left" }}>
        <h1 style={{ fontSize: "15px" }}>This is a Product page</h1>


        <button
          style={{
            border: "1px solid black",
            padding: 2,
            borderRadius: 5,
            backgroundColor: "green",
            color: "white",
          }}
          onClick={navigateHandler}
        >
          See Details
        </button>
      </div>
      <Outlet />

      <Page />
    </div>
  );
};

export default Product;
