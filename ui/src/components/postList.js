import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

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
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {name}.
        </Typography>
        <Typography component="p">{description}</Typography>
      </Paper>
    </div>
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
      <div>
        {this.state.data.map(data => {
          return <Post data={data} />;
        })}
      </div>
    );
  }
}

export default PostList;
