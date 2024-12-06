import { combineReducers, compose, legacy_createStore } from "redux";
import inputReducer from "./InputReducer";
import dataReducer from "./DataReducer";

function configureStore() {
    return legacy_createStore(
        combineReducers({
            user: inputReducer,
            data: dataReducer,
        }), undefined
    )
}

export default configureStore;