import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import PostForm from "./postForm";
import PostDetails from "./postDetails";
import PostList from "./postList";

const Home = props => {
  return (
    <Switch>
      <Route path="/form" exact component={PostForm} />
      <Route path="/post" component={PostDetails} />
      <Route path="/" exact component={PostList} />
      <Redirect to="/" />
    </Switch>
  );
};

export default withRouter(Home);
