import React from "react";
import { Button } from "react-bootstrap";
import { Card, CardActionArea, CardActions, CardContent, CardMedia,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./shop.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "85%",
    fontFamily: "Montserrat",
    color: "#262A53",
  },
  media: {
    height: "12.5rem",
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Product({ product }) {
  const classes = useStyles();
  const font = createMuiTheme({
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={font}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="h6" gutterBottom>
              {product.price.formatted_with_symbol}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
          <Button
            className="addtocart"
            size="lg"
            style={{ justifyContent: "center" }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
