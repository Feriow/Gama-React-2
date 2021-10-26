import { Reducer } from "redux";
import { IPeople } from "./types";

const INITIAL_STATE: IPeople = {
  people: [],
};

const People: Reducer<IPeople | any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PERSON": {
      console.log(action.payload);
      const { person } = action.payload;
      return { ...state, people: [...state.people, person] };
    }
    default: {
      return state;
    }
  }
};

export default People;
