import { configureStore } from '@reduxjs/toolkit';
import newdiamondSlice from '../features/counter copy/newdiamondSlice';




export const store = configureStore({
  reducer: {
    diamond:newdiamondSlice,
    
  },
});

