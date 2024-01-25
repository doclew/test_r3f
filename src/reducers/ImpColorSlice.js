import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  impColor: '#970c08',
};

const impColorSlice = createSlice({
  name: 'imputureCol',
  initialState,
  reducers: {
    setImpColor: (state, action) => {
  state.impColor = action.payload;
}

  },
});

export const { setImpColor } = impColorSlice.actions;
export default impColorSlice.reducer;
