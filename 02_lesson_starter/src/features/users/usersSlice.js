import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: "0", name: "Dude Lebowski" },
    { id: "1", name: "Zebinette" },
    { id: "2", name: "Mi bébé" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})


export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer

