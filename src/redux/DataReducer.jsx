import { DELETE_VALUE, UPDATE_VALUE } from "./actions";


const initialState = {
    data:[]
}

const dataReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE_VALUE:
            let updata = [];
            if (state.data.find((obj)=>(obj.id == action.payload.id))){
                updata = state.data.map(
                    (item) => {
                        if (item.id === action.payload.id)
                            return action.payload;
                        else
                            return item;
                    }
                );
            }
            else {
                const nid = (state.data.length > 0) ? state.data[state.data.length - 1].id + 1 : 1;
                const {text, price} = action.payload;
                updata = [...state.data, {text, price, id: nid}];
            }
            return {data: updata};
        case DELETE_VALUE:
            const filter_data = state.data.filter((item)=>(item.id != action.payload.id));
            return {data: filter_data};    
        default:
            return state;
    }
};

export default dataReducer;