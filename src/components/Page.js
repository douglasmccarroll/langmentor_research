import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import "../css/style.styl";

const styles = {
  container: {
    marginTop: 15,
  },
  contentBox: {
    width: "96%",
  },
  title: {
    textAlign: "center"
  }
};

const Component = ({ children, classes, title }) => {
  return (
    <>
      <Header />
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
      >
        <Grid className={classes.contentBox} item>
          {title ? (
            <Typography className={classes.title} gutterBottom variant="h2">
              {title}
            </Typography>
          ) : null}
          {children}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Component);
