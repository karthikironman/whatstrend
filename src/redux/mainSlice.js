import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name:'hanaka',
    initialState:{
        flavour:'naka',
        name:'Sameetha',
        age:25,
        pool:'Pondicherry',
        poolRelation:'living',
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