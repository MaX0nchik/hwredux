import { SET_VALUE } from "./actions";

const initialState = {
    id: 0,
    text: '',
    price: ''
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            return{
                ...state,
                ...action.payload
            }
            default:
                return state;
    }
};

export default inputReducer;
