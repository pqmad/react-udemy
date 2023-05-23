import { types } from "../types/types";

//no se puede mandar a llamar el localsotrage en el reducer

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login:
        return {
            ...state,
            logged: true,
            user: action.payload,
        };
    case types.logout:
        return {
            ...state,
            logged: false,
            user: action.payload, //no se si es necesario pero lo dejo porque igual lleva null
        };
    default:
        return state;
  }
}
