import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./teacherSlice";



export default configureStore({
    reducer:{
        teacher:teacherSlice,
        
    }
})