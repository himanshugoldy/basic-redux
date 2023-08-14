import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home'; // Make sure the path is correct

const App = () => {
  const { c } = useSelector(state => state.custom); // Assuming 'custom' is the reducer name
  // You can use useDispatch here if you need to dispatch actions
  
  return (
    <div>
      <h2>{c}</h2>  
      <Home />
    </div>
  );
}

export default App;
