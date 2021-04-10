require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./reducers/store";
import Header from "./components/Header";
import Index from "./components/pages/Index";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Index />
            </div>
        </Provider>
    );
}

export default App;

// DOM element
if (document.getElementById("APP")) {
    ReactDOM.render(<App />, document.getElementById("APP"));
}
