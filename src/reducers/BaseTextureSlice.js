import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseTexture: '/ripetute/COLOR.jpg',
  
};


const colorSlice = createSlice({
  name: 'baseColor',
  initialState,
  reducers: {
    setBaseTexture(state, action) {
      state.baseTexture = action.payload;
   
    },
  },
});

export const { setBaseTexture } = colorSlice.actions;
export default colorSlice.reducer;
