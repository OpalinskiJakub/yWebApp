import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostPanel from "./pages/PostSystem/PostPanel";

import App from './pages/Main/App';




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
                <Route path={"/"} element={<App />}>
                    <Route path={"post"} element={<PostPanel />}/>


                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);