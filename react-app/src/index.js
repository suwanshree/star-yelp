import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/Modal";
import { ProfileModalProvider } from "./context/ProfileModal";
import { AboutModalProvider } from "./context/AboutModal";
import { SearchProvider } from "./context/Search";
import "./index.css";
import App from "./App";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <Provider store={store}>
        <ModalProvider>
          <ProfileModalProvider>
            <AboutModalProvider>
              <App />
            </AboutModalProvider>
          </ProfileModalProvider>
        </ModalProvider>
      </Provider>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
