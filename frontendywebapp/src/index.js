import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostApiConnector from "./pages/StorageSystem/Post/PostApiConnector";
import Home from "./pages/Main/Home";

import MainPagePostsWizualization from "./pages/PostSystem/MainPagePostsWizualization";
import PostPanel from "./pages/PostSystem/PostPanel";
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
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<MainPagePostsWizualization />} />
                    <Route path="/post" element={<PostPanel />} />
                    <Route path="/Api" element={<PostApiConnector />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);