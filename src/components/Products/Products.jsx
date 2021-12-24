import React from "react";
// import Grid from "@material-ui/core/Grid";

// import Product from "./Product/Product";
import useStyles from "./styles";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content} style={{ padding: "0" }}>
      <div className={classes.toolbar} />
      <Dashboard products={products} onAddToCart={onAddToCart} />
    </main>
  );
};

export default Products;
