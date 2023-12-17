import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostApiConnector from "./pages/StorageSystem/PostPanel/PostApiConnector";
import Home from "./pages/MainPanel/Home";

import MainPagePostsWizualization from "./pages/MainPanel/MainPagePostsWizualization";
import PostPanel from "./pages/PostPanelVisualization/PostPanel";
import UserService from "./pages/StorageSystem/UserPanel/UserService";
import UserPanel from "./pages/UserPanelVisualization/UserPanel";
import UserDataPanel from "./pages/UserPanelVisualization/UserDataPanel";
import UserDataEditPanel from "./pages/UserPanelVisualization/UserDataEditPanel";
import AdminPanel from "./pages/AdminPanelVisualization/AdminPanel";
import ActiveUsersAdminPanel from "./pages/AdminPanelVisualization/ActiveUsersAdminPanel";
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
            <Route path="/" element={<Home />}>
                <Route index element={<MainPagePostsWizualization />} />
                <Route path="post" element={<PostPanel />} />
                <Route path="Api" element={<PostApiConnector />} />
                <Route path="UserPanel" element={<UserPanel />}>
                    <Route index element={<UserDataPanel />} />
                    <Route path="UserDataEditPanel" element={<UserDataEditPanel />} />
                </Route>
                <Route path="AdminPanel" element={<AdminPanel />}>
                    <Route index element={<ActiveUsersAdminPanel />} />

                </Route>
            </Route>
        </Routes>
    </BrowserRouter>

);
//<Route index element={<UserDataPanel />} />
//s<Route path="UserDataEditPanel" element={<UserDataEditPanel />} />