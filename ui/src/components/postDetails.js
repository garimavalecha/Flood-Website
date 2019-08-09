import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const PostDetails = props => {
  const classes = useStyles();
  console.log(props);

  const {
    tags,
    address,
    description,
    name,
    coordinates,
    phone_number,
    title
  } = props.location.state.data;
  return (
    <Paper className={classes.root} style={{ width: "75%", margin: "10px" }}>
      <Typography variant="h5" component="h3">
        {name}.
      </Typography>
      <Typography variant="h5" component="h3">
        {phone_number}.
      </Typography>
      <Typography variant="h5" component="h3">
        {address}.
      </Typography>
      <Typography variant="h5" component="h3">
        {title}.
      </Typography>
      <Typography variant="h5" component="h3">
        {description}.
      </Typography>
      {tags.map(tag => (
        <Typography component="p">{tag}</Typography>
      ))}
    </Paper>
  );
};

export default PostDetails;
