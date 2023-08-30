// import { configureStore,createReducer,createAction } from "@reduxjs/toolkit";

// interface StateType{
//     count:number;
// }
// const initialState:StateType={
//     count:0
// };
// const increment=createAction("increment");
// const decrement=createAction("decrement");
// const rootReducer=createReducer(initialState,(builder)=>{
// builder.addCase(increment,(state)=>{
//     state.count+=1;
// }).addCase(decrement,(state)=>{
//     state.count-=1;
// })
// })


// export const store=configureStore({
//     reducer:rootReducer 
// })


//-------------------------------Using CreateSlice

import { configureStore,createSlice,PayloadAction } from "@reduxjs/toolkit";

interface StateType{
    count:number;
}
const initialState:StateType={
    count:0
};

const rootSlice=createSlice({
    initialState:initialState,
    name:"counter",
    reducers:{
        inc:(state)=>{
            state.count+=1;
        },
        dec:(state)=>{
            state.count-=1;
        },
        incByValue:(state,action:PayloadAction<number>)=>{
            state.count+=action.payload;
        }
    }

})


export const {inc,dec,incByValue} =rootSlice.actions;

export const store=configureStore({
reducer:rootSlice.reducer

})