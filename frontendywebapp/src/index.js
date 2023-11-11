import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostPanel from "./pages/PostSystem/PostPanel";

import Home from "./pages/Main/Home";

import Post from "./pages/PostSystem/Post";


const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.background = 'grey';

const post={
    id:1,
    title:"react",
    content:"javascript"
}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />}>
                    <Route path={"post"} element={<PostPanel />}/>
                    <Route path={"posts"} element={<Post />}/>

                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);