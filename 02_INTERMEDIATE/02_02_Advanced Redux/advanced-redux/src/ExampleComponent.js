// ExampleComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.example.data); // Example state slice

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {/* Render data */}
    </div>
  );
};

export default ExampleComponent;
