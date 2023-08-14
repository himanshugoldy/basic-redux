import React from 'react';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();


    


    const addBtn = () => {
        dispatch({
            type: 'increment',
        });
    };

    const subBtn = () => {
        dispatch({
            type: 'decrement',
        });
    };

    const addBtn25 = () =>{
        dispatch({
            type:'incrementbyValue',
            payload:25,
        })
    }



    return (
        <div>
            <button onClick={addBtn}>Increment</button>
            <button onClick={subBtn}>Decrement</button>
            <button onClick={addBtn25}>Increment By 25</button>
        </div>
    );
};

export default Home;
