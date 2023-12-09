import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostApiConnector from "./pages/StorageSystem/PostPanel/PostApiConnector";
import Home from "./pages/Main/Home";

import MainPagePostsWizualization from "./pages/PostSystem/MainPagePostsWizualization";
import PostPanel from "./pages/PostSystem/PostPanel";
import UserService from "./pages/StorageSystem/UserPanel/UserService";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.background = 'grey';

const post={
    id:1,
    title:"react",
    content:"javascript"
}
root.render(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<MainPagePostsWizualization />} />
                    <Route path="/post" element={<PostPanel />} />
                    <Route path="/Api" element={<PostApiConnector />} />
                    <Route path="/UserService" element={<UserService />} />
                </Route>*/
            </Routes>
        </BrowserRouter>

);
