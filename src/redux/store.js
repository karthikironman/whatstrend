import { configureStore } from '@reduxjs/toolkit';
import mainSliceReducer from './mainSlice';

export default configureStore({
    reducer: {
        hanaka: mainSliceReducer
    }
})