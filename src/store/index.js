import auth from "./auth";



import {createStore} from "vuex";
import boardsStore from "@/store/boards/index.js";

const store = createStore({
    modules: {
        boardsStore,
        auth
    },
});

export default store;