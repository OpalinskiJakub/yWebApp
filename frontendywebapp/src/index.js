import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/PostSystem/Post";
import Layout from './pages/Layout';
import PostsPage from "./pages/PostSystem/PostsPage";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  <Route path={"home"} element={<Home />}/>
                  <Route path={"post"} element={<PostsPage />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

