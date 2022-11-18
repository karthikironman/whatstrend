import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name:'hanaka',
    initialState:{
        flavour:'naka',
        name:'Sugumaran',
        age:20,
        pool:'Cambridge Institute of Technology',
        liveHa:13,
        liveNaka:11
    },
    reducers:{
        increment : (state) => {
            state.age ++;
        }
    }
})

export default mainSlice.reducer