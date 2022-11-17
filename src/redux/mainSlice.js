import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name:'hanaka',
    initialState:{
        flavour:'ha',
        name:'Harshitha',
        age:20,
        pool:'Cambridge Institute of Technology'
    },
    reducers:{
        increment : (state) => {
            state.age ++;
        }
    }
})

export default mainSlice.reducer