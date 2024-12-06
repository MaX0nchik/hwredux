import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux"
import { SET_VALUE, UPDATE_VALUE } from "../redux/actions";
import { Item } from "./Item";

export const MainApp = () => {
    const dispatch = useDispatch();
    const {id, text, price} = useSelector((state)=> state.user);
    const {data}  = useSelector((state) => state.data);
    const [search, setSearch] = useState('');
    const [st, setSt] = useState('');

    useEffect(()=>{
        const delay = setTimeout(()=>{
            setSearch(st);
        }, 500);

        return () => clearTimeout(delay);
    }, [st])

    const submitForm = (event) => {
        event.preventDefault();
        dispatch({
            type: UPDATE_VALUE,
            payload: {id:id, text:text, price:price}
        });
        dispatch({
            type:SET_VALUE,
            payload:{text:'', price:'', id: 0}
        })
    }

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch({
            type: SET_VALUE,
            payload:{text:'', price:'', id: 0}
        })
    }

    return(
        <form onSubmit={submitForm}>
            <div>
                <input type="text" placeholder="Search..." value={st} onChange={(e)=>{setSt(e.target.value);}}/>
                <input type="text" required value={text} onChange={(e) => {dispatch({type:SET_VALUE, payload: {text:e.target.value, price: price, id:id}});}}/>
                <input type="number" required value={price} onChange={(e)=>{dispatch({type:SET_VALUE, payload: {text: text, price:e.target.value, id:id}});}}/>
                <button>Save</button>
                {(text !='' || price != '') && <button type="button" onClick={handlerClick}>Cancel</button>}
            </div>
            <hr/>
            {data.filter((item) => (item.text.includes(search)))
            .map((item,idx) => <Item key={item.id} text={item.text} price={item.price} id={item.id}/>)}
        </form>
    )

}

    const mapStateToProps = (state, props) => {
        return {
            inputText: state.user.text,
            inputPrice: state.user.price,
            inputId: state.user.id
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return{
            dispatch
        }
    }

    export default connect(
        mapStateToProps, mapDispatchToProps
    )(MainApp);

