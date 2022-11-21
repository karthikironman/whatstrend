import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name:'hanaka',
    initialState:{
        flavour:'naka',
        name:'Nandini Sivaranjith',
        age:24,
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