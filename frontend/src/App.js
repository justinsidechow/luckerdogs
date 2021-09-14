import React, { useEffect, useState } from "react";
import "./App.css";
//import Posts from "./components/Posts";
//import PostLoadingComponent from "./components/PostLoading";

function App() {
  return (
    <div className="App">
      <h1>Latest Posts</h1>
    </div>
  );
}
export default App;

//<PostLoading isLoading={appState.loading} posts={appState.posts} />
//const PostLoading = PostLoadingComponent(Posts);
//useEffect(() => {
//setAppState({ loading: true });
//const apiUrl = `http://127.0.0.1:8000/api/`;
//fetch(apiUrl)
//  .then((data) => data.json())
//  .then((posts) => {
//    setAppState({ loading: false, posts: posts });
//  });
//}, [setAppState]);
