import { createStore } from "redux";
import People from "./modules/reducer";

const store = createStore(People);

export default store;
