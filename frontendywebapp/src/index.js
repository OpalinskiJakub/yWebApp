import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
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

import App from "./pages/AccessPanelVisualization/LogoPanel";
import Post from "./pages/StorageSystem/PostPanel/Model/Post";
import LoginPanel from "./pages/AccessPanelVisualization/LoginPanel";
import LogoPanel from "./pages/AccessPanelVisualization/LogoPanel";
import AccessPanel from "./pages/AccessPanelVisualization/AccessPanel";
import RegisterPanel from "./pages/AccessPanelVisualization/RegisterPanel";
import RegisterTypePanel from "./pages/AccessPanelVisualization/RegisterTypePanel";
import AppealForm from "./pages/AccessPanelVisualization/AppealForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.background = 'grey';


root.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/access" />} />
                <Route path="/access" element={<LogoPanel />}>
                    <Route index element={<AccessPanel />} />
                    <Route path="LoginPanel" element={<LoginPanel />}/>
                    <Route path="registerType" element={<RegisterTypePanel />}/>
                    <Route path="registerPanel" element={<RegisterPanel />}/>
                    <Route path="AppealForm" element={<AppealForm />}/>
                </Route>

                <Route path="/home" element={<Home />}>
                    <Route index element={<MainPagePostsWizualization />} />
                <Route path="post" element={<PostPanel />} />
                <Route path="userPanel" element={<UserPanel />}>
                    <Route index element={<UserDataPanel />} />
                    <Route path="userDataEditPanel" element={<UserDataEditPanel />} />
                    <Route path="login1" element={<PostPanel />} />
                </Route>
                <Route path="adminPanel" element={<AdminPanel />}>
                    <Route index element={<UsersAdminPanel />} />
                    <Route path="postsAdminPanel" element={<PostsAdminPanel />} />
                    <Route path="commentsAdminPanel" element={<CommentsAdminPanel />} />
                    <Route path="reportsAdminPanel" element={<ReportsAdminPanel />} />
                    <Route path="appealAdminPanel" element={<AppealAdminPanel />} />
                </Route>
                </Route>

        </Routes>
    </BrowserRouter>

);
//<Route index element={<UserDataPanel />} />
//s<Route path="UserDataEditPanel" element={<UserDataEditPanel />} />