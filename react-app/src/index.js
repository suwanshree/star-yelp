import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/Modal";
import { ProfileModalProvider } from "./context/ProfileModal";
import { AboutModalProvider } from "./context/AboutModal";
import "./index.css";
import App from "./App";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <ProfileModalProvider>
          <AboutModalProvider>
            <App />
          </AboutModalProvider>
        </ProfileModalProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
