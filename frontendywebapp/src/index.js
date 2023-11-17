import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostPanel from "./pages/PostSystem/PostPanel";

import Home from "./pages/Main/Home";

import Post from "./pages/PostSystem/Post";
import MyComponent from "./pages/Test/App";
import App from "./pages/Test/App";


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
                <Route path={"/"} element={<App/>}>


                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);