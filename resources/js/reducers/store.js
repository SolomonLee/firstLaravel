import { configureStore } from "@reduxjs/toolkit";
import constellationRedux from "./constellationRedux";

export const store = configureStore({
    reducer: {
        constellation: constellationRedux
    }
});

export default store;
