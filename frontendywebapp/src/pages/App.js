import {render} from "react-dom";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LogoPanel from "./AccessPanelVisualization/LogoPanel";
import AccessPanel from "./AccessPanelVisualization/AccessPanel";
import LoginPanel from "./AccessPanelVisualization/LoginPanel";
import RegisterTypePanel from "./AccessPanelVisualization/RegisterTypePanel";
import RegisterPanel from "./AccessPanelVisualization/RegisterPanel";
import AppealForm from "./AccessPanelVisualization/AppealForm";
import UserAutorization from "./Authorisation/UserAuthorisation/UserAuthorization";
import Home from "./MainPanelVisualization/Home";
import MainPagePostsWizualization from "./MainPanelVisualization/MainPagePostsWizualization";
import PostPanel from "./PostPanelVisualization/PostPanel";
import UserPanel from "./UserPanelVisualization/UserPanel";
import UserDataPanel from "./UserPanelVisualization/UserDataPanel";
import UserDataEditPanel from "./UserPanelVisualization/UserDataEditPanel";
import AdminAutorization from "./Authorisation/AdminAuthorisation/AdminAutorization";
import AdminPanel from "./AdminPanelVisualization/AdminPanel";
import UsersAdminPanel from "./AdminPanelVisualization/UsersAdminPanel";
import PostsAdminPanel from "./AdminPanelVisualization/PostsAdminPanel";
import CommentsAdminPanel from "./AdminPanelVisualization/CommentsAdminPanel";
import ReportsAdminPanel from "./AdminPanelVisualization/ReportsAdminPanel";
import AppealAdminPanel from "./AdminPanelVisualization/AppealAdminPanel";
import React, {Component} from "react";
import UnsecuredTokenStorageSystem from "./StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";
import PreviewAuthorization from "./Authorisation/PreviewAuthorization";
import CreatePostPanel from "./PostPanelVisualization/CreatePostPanel";


class App extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/access"/>}/>
                <Route path="/access" element={<PreviewAuthorization/>}>
                    <Route index element={<AccessPanel/>}/>
                    <Route path="LoginPanel" element={<LoginPanel  />}/>
                    <Route path="registerType" element={<RegisterTypePanel/>}/>
                    <Route path="registerPanel" element={<RegisterPanel/>}/>
                    <Route path="AppealForm" element={<AppealForm/>}/>

                </Route>

                <Route element={<UserAutorization/>}>
                    <Route path="/home" element={<Home />}>
                        <Route index element={<MainPagePostsWizualization/>}/>
                        <Route path="post" element={<PostPanel/>}/>
                        <Route path="postCreator" element={<CreatePostPanel/>}/>
                        <Route path="userPanel" element={<UserPanel/>}>
                            <Route index element={<UserDataPanel/>}/>
                            <Route path="userDataEditPanel" element={<UserDataEditPanel/>}/>
                            <Route path="login1" element={<PostPanel/>}/>
                        </Route>
                        <Route element={<AdminAutorization/>}>
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
        )
    }
}
export default App;