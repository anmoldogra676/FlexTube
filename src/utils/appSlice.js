import { createSlice } from "@reduxjs/toolkit";

 
 let appSlice = createSlice({
    name: "appslice ",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
   
       togglemenu: (state, action)=>{
        state.isMenuOpen =! state.isMenuOpen;
        
       }
       ,
       closeMenu:(state, action)=>{
         state.isMenuOpen =false;
         
        },
        openMenu:(state, action)=>{
            state.isMenuOpen =true;
            
           }
   
    }
 })
 

 export const {togglemenu,closeMenu,openMenu } = appSlice.actions;
 export default appSlice.reducer; 