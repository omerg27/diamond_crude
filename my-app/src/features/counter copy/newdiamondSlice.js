import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { updimond,adddimond, getdimond } from './newdiamondAPI';

const initialState = {
 
  dimonds:[],
};


export const getdiamondAsync = createAsyncThunk(
  'diamond/getdimond',
  async () => {
    const response = await getdimond();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const adddiamondAsync = createAsyncThunk(
  'diamond/adddimond',
  async (d) => {
    const response = await adddimond(d);
    // The value we return becomes the `fulfilled` action payload
    
    return response.data;
  }
);
export const updatadiamondAsync = createAsyncThunk(
  'diamond/updimond',
  async (id) => {
    console.log(id)
    const response = await updimond(id);
    // The value we return becomes the `fulfilled` action payload
    
    return response.data;
  }
);

export const diamondSlice = createSlice({
  name: 'diamond',
  initialState,
 reducers: {
   },
  
  extraReducers: (builder) => {
    builder
    
      .addCase(getdiamondAsync.fulfilled, (state, action) => {
        
        console.log(action.payload)    
        state.dimonds= action.payload;
        
      })
      
      .addCase(adddiamondAsync.fulfilled, (state, action) => {
        
           
        state.dimonds.push (action.payload);
        
      })
      .addCase(updatadiamondAsync.fulfilled, (state, action) => {
        
        console.log(action.payload.data)  
        state.dimonds=(action.payload.data);
        
      });
  },
});

//export const { increment, decrement, incrementByAmount } = diamondSlice.actions;
export const selectDimonds = (state) => state.diamond.dimonds;
export default diamondSlice.reducer;