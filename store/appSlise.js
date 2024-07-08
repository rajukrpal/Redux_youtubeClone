import {createSlice} from  "@reduxjs/toolkit";

const appSlise = createSlice({
    name:"app",
    initialState:{
        open:true,
    },
    reducers:{
        // action
        toggleSidebar:(state) =>{ // state ke sath Action bhi aata hai
            state.open = !state.open ;
        }
    }
})

export const {toggleSidebar} = appSlise.actions ;
export default appSlise.reducer ; // ab jitne slise bnaye ge sab ko store  me reducer ke andar dena hoga ! 