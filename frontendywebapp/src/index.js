import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostApiConnector from "./pages/StorageSystem/PostPanel/PostApiConnector";
import Home from "./pages/MainPanel/Home";
import MainPagePostsWizualization from "./pages/MainPanel/MainPagePostsWizualization";
import PostPanel from "./pages/PostPanelVisualization/PostPanel";
import UserPanel from "./pages/UserPanelVisualization/UserPanel";
import UserDataPanel from "./pages/UserPanelVisualization/UserDataPanel";
import UserDataEditPanel from "./pages/UserPanelVisualization/UserDataEditPanel";
import AdminPanel from "./pages/AdminPanelVisualization/AdminPanel";
import UsersAdminPanel from "./pages/AdminPanelVisualization/UsersAdminPanel";
import PostsAdminPanel from "./pages/AdminPanelVisualization/PostsAdminPanel";
import CommentsAdminPanel from "./pages/AdminPanelVisualization/CommentsAdminPanel";
import ReportsAdminPanel from "./pages/AdminPanelVisualization/ReportsAdminPanel";
import AppealAdminPanel from "./pages/AdminPanelVisualization/AppealAdminPanel";

import LonginRegisterPage from "./pages/LoginPanelVisualization/LonginRegisterPage";
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
            <Route index="/" element={<LonginRegisterPage />} />
            <Route path="/home" element={<Home />}>
                <Route index element={<MainPagePostsWizualization />} />
                <Route path="post" element={<PostPanel />} />
                <Route path="Api" element={<PostApiConnector />} />
                <Route path="UserPanel" element={<UserPanel />}>
                    <Route index element={<UserDataPanel />} />
                    <Route path="UserDataEditPanel" element={<UserDataEditPanel />} />
                </Route>
                <Route path="AdminPanel" element={<AdminPanel />}>
                    <Route index element={<UsersAdminPanel />} />
                    <Route path="PostsAdminPanel" element={<PostsAdminPanel />} />
                    <Route path="CommentsAdminPanel" element={<CommentsAdminPanel />} />
                    <Route path="ReportsAdminPanel" element={<ReportsAdminPanel />} />
                    <Route path="AppealAdminPanel" element={<AppealAdminPanel />} />

                </Route>
            </Route>
        </Routes>
    </BrowserRouter>

);
//<Route index element={<UserDataPanel />} />
//s<Route path="UserDataEditPanel" element={<UserDataEditPanel />} />