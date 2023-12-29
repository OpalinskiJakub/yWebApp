import React, {Component} from "react";
import {Navigate, Outlet} from "react-router-dom";
import LogoPanel from "../AccessPanelVisualization/LogoPanel";
import UnsecuredTokenStorageSystem from "../StorageSystem/TokenStorageSystem/UnsecuredTokenStorageSystem";

class PreviewAuthorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth:true,
        };
        this.tokenStorage=new UnsecuredTokenStorageSystem();
    }

    componentDidMount() {
        let status = this.tokenStorage.isTokenValid();
        if(this.state.auth!==status)
            this.setState({
                auth:status
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let status = this.tokenStorage.isTokenValid();
        if(this.state.auth!==status)
            this.setState({
                auth:status
            })

    }

    render() {
        return <>{this.state.auth ? null :<LogoPanel/> }</>;
    }
}

export default PreviewAuthorization;