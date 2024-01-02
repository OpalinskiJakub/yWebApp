import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/MainPanelVisualization/Home";
import MainPagePostsWizualization from "./pages/MainPanelVisualization/MainPagePostsWizualization";
import PostPanel from "./pages/PostPanelVisualization/PostPanel";
import UserPanel from "./pages/UserPanelVisualization/UserPanel";
import UserDataPanel from "./pages/UserPanelVisualization/UserDataPanel";
import UserDataEditPanel from "./pages/UserPanelVisualization/UserDataEditPanel";
import AdminPanel from "./pages/AdminPanelVisualization/AdminPanel";
import ActiveUsersAdminPanel from "./pages/AdminPanelVisualization/ActiveUsersAdminPanel";
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
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.background = 'grey';


root.render(
    <App />
);
