import { useDispatch , connect} from "react-redux"
import { DELETE_VALUE, SET_VALUE } from "../redux/actions";


export const Item = ({text, price, id}) => {
    const dispatch = useDispatch();

    const handlerEdit = (event) => {
        event.preventDefault();
        dispatch({
            type: SET_VALUE,
            payload: {text, price, id}
        })
    }

    const handlerDelete = (event) => {
        event.preventDefault();
        dispatch({
            type: SET_VALUE,
            payload: {text, price, id}
        })
        dispatch({
            type: DELETE_VALUE,
            payload: {text, price, id}
        })
    }

    return(
        <li className="item">
            <span>{text}</span>
            <span>{price}</span>
            <button type="button" className="edit" onClick={handlerEdit}>Edit</button>
            <button type="button" className="delete" onClick={handlerDelete}>Delete</button>
        </li>
    )

}
const mapStateToProps = (state, props) => {
    return {
        text: state.user.text,
        price: state.user.price,
        id: state.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatch
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Item);