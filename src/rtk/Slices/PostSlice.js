import { createSlice } from "@reduxjs/toolkit";

export const  PostsSlice = createSlice({
    name:"PostsSlice",
    initialState:{
        items:[]
    },
    reducers:{
addpost:(state,action)=>{
state.items.push(action.payload)
console.log(action.payload)
 },
 Del:(state,action)=>{
 state.items = state.items.filter(item => item.id !== action.payload)
 },
Updata:(state,action)=>{
state.items.map(item =>{
    if(item.id === action.payload.id){
        item.title=action.payload.title
        item.Des=action.payload.Des
    }
})
}

}

})

export const {addpost,Del,Updata} = PostsSlice.actions

export default PostsSlice.reducer