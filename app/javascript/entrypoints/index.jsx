import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import { reducer as formReducer } from "redux-form";

import PostsIndex from "./containers/posts_index";
import PostsShow from "./containers/posts_show";
import PostsNew from "./containers/posts_new";

// import "./application.scss";
import postsReducer from "./reducers/posts_reducer";

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Routes>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" exact component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
        </Routes>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
