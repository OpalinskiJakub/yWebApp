import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/PostSystem/Post";
import Layout from './pages/Layout';
import PostsPage from "./pages/PostSystem/PostsPage";
const root = ReactDOM.createRoot(document.getElementById('root'));

const post={
    id:1,
    title:"react",
    content:"javascript"
}
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  <Route path={"home"} element={<Home />}/>
                  <Route path={"post"} element={<Post post={post} />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

