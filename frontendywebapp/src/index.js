import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
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

import LogoPanel from "./pages/AccessPanelVisualization/LogoPanel";
import LoginPanel from "./pages/AccessPanelVisualization/LoginPanel";
import AccessPanel from "./pages/AccessPanelVisualization/AccessPanel";
import RegisterPanel from "./pages/AccessPanelVisualization/RegisterPanel";
import RegisterTypePanel from "./pages/AccessPanelVisualization/RegisterTypePanel";
import AppealForm from "./pages/AccessPanelVisualization/AppealForm";
import UserAutorization from "./pages/Authorisation/UserAuthorisation/UserAuthorization";
import AdminAutorization from "./pages/Authorisation/AdminAuthorisation/AdminAutorization";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.background = 'grey';


root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/access"/>}/>
            <Route path="/access" element={<LogoPanel/>}>
                <Route index element={<AccessPanel/>}/>
                <Route path="LoginPanel" element={<LoginPanel/>}/>
                <Route path="registerType" element={<RegisterTypePanel/>}/>
                <Route path="registerPanel" element={<RegisterPanel/>}/>
                <Route path="AppealForm" element={<AppealForm/>}/>
            </Route>
            <Route element={<UserAutorization/>}>
                <Route path="/home" element={<Home/>}>
                    <Route index element={<MainPagePostsWizualization/>}/>
                    <Route path="post" element={<PostPanel/>}/>
                    <Route path="userPanel" element={<UserPanel/>}>
                        <Route index element={<UserDataPanel/>}/>
                        <Route path="userDataEditPanel" element={<UserDataEditPanel/>}/>
                        <Route path="login1" element={<PostPanel/>}/>
                    </Route>
                    <Route element={<AdminAutorization />}>
                        <Route path="adminPanel" element={<AdminPanel/>}>
                            <Route index element={<UsersAdminPanel/>}/>
                            <Route path="postsAdminPanel" element={<PostsAdminPanel/>}/>
                            <Route path="commentsAdminPanel" element={<CommentsAdminPanel/>}/>
                            <Route path="reportsAdminPanel" element={<ReportsAdminPanel/>}/>
                            <Route path="appealAdminPanel" element={<AppealAdminPanel/>}/>
                        </Route>
                    </Route>
                </Route>
            </Route>

        </Routes>
    </BrowserRouter>
);
//<Route index element={<UserDataPanel />} />
//s<Route path="UserDataEditPanel" element={<UserDataEditPanel />} />