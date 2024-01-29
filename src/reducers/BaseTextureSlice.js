import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseTexture: '/ripetute/COLOR.jpg',

  normalMap: "/ripetute/NRM.jpg",
  roughnessMap: "/ripetute/ROUGH.jpg",
  specularMap: "/ripetute/SPEC.jpg",
      
  
};


const colorSlice = createSlice({
  name: 'baseColor',
  initialState,
  reducers: {
    setBaseTexture(state, action) {
      const { baseTexture, normalMap, roughnessMap, specularMap } = action.payload;

      state.baseTexture = action.payload;
      state.baseTexture = baseTexture;
      state.normalMap = normalMap;
      state.roughnessMap = roughnessMap;
      state.specularMap = specularMap;
   
    },
  },
});

export const { setBaseTexture } = colorSlice.actions;
export default colorSlice.reducer;