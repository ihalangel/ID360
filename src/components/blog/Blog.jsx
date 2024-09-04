import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <Switch>
      <Route path="/blog" exact component={BlogList} />
      <Route path="/blog/:slug" component={BlogPost} />
    </Switch>
  );
};

export default Blog;
