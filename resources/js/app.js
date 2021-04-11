/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./reducers/store";

import Index from "./components/pages/Constellation";
function ROOT() {
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    );
}

export default ROOT;

// DOM element
if (document.getElementById("ROOT")) {
    ReactDOM.render(<ROOT />, document.getElementById("ROOT"));
}
