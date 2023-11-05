import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";
const userSlice = createSlice({
   name : "user",
   initialState : [],
   reducers : {
       addUser(state, action) {
        state.push(action.payload);
        //console.log(action.payload)
       },
       removeUser(state, action){
        //console.log("Hloo" + action.payload)
        state.splice(action.payload, 1)
       },
    //    clearAllUsers(state , action) {
    //     return [];
    //    } ,
   },
   extraReducers (builder) {
    builder.addCase(clearAllUsers, ()=>{
        return [];
    })
   }
});
console.log(userSlice.actions);
export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;