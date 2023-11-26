import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import zapiszDoIndexedDB from "./pages/StorageSystem/Post/PostIndexDB";
import PostApiConnector from "./pages/StorageSystem/Post/PostApiConnector";
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
                <Route path={"/"} element={<zapiszDoIndexedDB />}>


                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);