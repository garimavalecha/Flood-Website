import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

function Post(props) {
  const classes = useStyles();

  const {
    tags,
    address,
    description,
    name,
    coordinates,
    phone_number,
    title
  } = props.data;
  const link = "/posts/" + props.data._id;
  return (
    <Paper className={classes.root} style={{ width: "75%", margin: "10px" }}>
      <Link
        to={{
          pathname: link,
          state: { data: props.data }
        }}
      >
        <Typography variant="h5" component="h3">
          {name}.
        </Typography>
        <Typography component="p">{description}</Typography>
      </Link>
    </Paper>
  );
}

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataFetched: false
    };
  }

  componentDidMount() {
    if (!this.state.dataFetched) {
      axios.get("/api/getAllEvents").then(res => {
        this.setState({ data: res.data, dataFetched: true });
        console.log(res);
      });
    }
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        alignContent="center"
        // alignItems="center"
      >
        {this.state.data.map(data => {
          return <Post data={data} />;
        })}
      </Grid>
    );
  }
}

export default PostList;
