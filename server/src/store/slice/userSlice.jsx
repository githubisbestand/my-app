import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(satate, action) {
            satate.splice(action.payload, 1);
        },
        deleteUser(state, action) {
            return [];
        }
    },
});

//console.log(userSlice.actions);

export const { addUser,removeUser, deleteUser} = userSlice.actions;
