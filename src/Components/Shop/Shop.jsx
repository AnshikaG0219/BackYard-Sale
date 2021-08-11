import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product";
import "./shop.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

export default function Shop({ products }) {
    const classes = useStyles();

  return (
    <div>
        <Grid container justify="center" className={classes.root}>
            {products.map((product)=>(
                <Grid item key = {product.id} lg={3} md={4} sm={6} spacing={2}>
                <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}
