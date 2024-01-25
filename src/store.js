import { configureStore } from '@reduxjs/toolkit';
import impuntureCol from './reducers/ImpColorSlice';
import baseColor from './reducers/BaseTextureSlice';

const store = configureStore({
  reducer: {
    impuntureCol: impuntureCol,
    baseColor: baseColor
  }
});

export default store;
