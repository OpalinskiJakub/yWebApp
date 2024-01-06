import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/App";

import { initReactI18next } from 'react-i18next';
import {I18nContext, I18nextProvider} from "react-i18next";
import i18n from 'i18next';
import accesPanel from "./translations/en/accesPanel.json";
import accesPanelPol from "./translations/pol/accesPanelPol.json"
import loginPanelEn from "./translations/en/loginPanelEn.json"
import loginPanelPol from "./translations/pol/loginPanelPol.json"
import registerTypePanelEn from "./translations/en/registerTypePanelEn.json"
import registerTypePanelPol from "./translations/pol/registerTypePanelPol.json"
import appealPanelEn from "./translations/en/appealPanelEn.json"
import appealPanelPol from "./translations/pol/appealPanelPol.json"
import registerPanelEn from "./translations/en/registerPanelEn.json"
import registerPanelPol from "./translations/pol/registerPanelPol.json"

const savedLanguage = localStorage.getItem('selectedLanguage');


const defaultLanguage = savedLanguage || 'pol';

const resources = {
    en: {
        accesPanel:accesPanel,
        loginPanel:loginPanelEn,
        registerTypePanel:registerTypePanelEn,
        appealPanel:appealPanelEn,
        registerPanel:registerPanelEn

    },
    pol: {
        accesPanel:accesPanelPol,
        loginPanel:loginPanelPol,
        registerTypePanel:registerTypePanelPol,
        appealPanel:appealPanelPol,
        registerPanel:registerPanelPol
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        interpolation: {
            escapeValue: false,
        },
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.background = 'grey';


root.render(
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
);
