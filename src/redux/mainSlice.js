import {createSlice} from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name:'hanaka',
    initialState:{
        flavour:'ha',
        name:'Surya Kumar Yadav',
        age:'25',
        pool:'Cambridge Institute of Technology',
        poolRelation:'studying',
        liveHa:13,
        liveNaka:11
    },
    reducers:{
        increment : (state) => {
            state.age ++;
        },
        setUser : (state,data) => {
            
        }
    }
})

export default mainSlice.reducer